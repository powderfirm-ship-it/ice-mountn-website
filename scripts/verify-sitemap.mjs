#!/usr/bin/env node

import { spawn } from 'child_process';
import { readFileSync } from 'fs';

const CANONICAL_HOST = 'www.icemountn.com';
const FORBIDDEN_HOSTS = [
  'icemountn-website.vercel.app',
  'ice-mountn-website.vercel.app',
  'icemountn.com', // non-www
  'localhost',
  '127.0.0.1'
];

async function startDevServer() {
  return new Promise((resolve, reject) => {
    console.log('🚀 Starting dev server...');
    const server = spawn('npm', ['run', 'dev'], {
      stdio: 'pipe',
      shell: true
    });
    
    // Wait for server to be ready
    let output = '';
    server.stdout.on('data', (data) => {
      output += data.toString();
      if (output.includes('Ready in') || output.includes('Local:')) {
        console.log('✅ Dev server ready');
        resolve(server);
      }
    });
    
    server.stderr.on('data', (data) => {
      console.error('Dev server error:', data.toString());
    });
    
    // Timeout after 30 seconds
    setTimeout(() => {
      server.kill();
      reject(new Error('Dev server timeout'));
    }, 30000);
  });
}

async function waitForServer(url, maxAttempts = 10) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return true;
      }
    } catch (error) {
      // Ignore fetch errors
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return false;
}

async function fetchSitemap() {
  try {
    const response = await fetch('http://localhost:3000/sitemap.xml');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    throw new Error(`Failed to fetch sitemap: ${error.message}`);
  }
}

function parseSitemap(xml) {
  const locMatches = xml.match(/<loc>(.*?)<\/loc>/g);
  if (!locMatches) {
    return [];
  }
  
  return locMatches.map(match => {
    const url = match.replace(/<\/?loc>/g, '');
    return url.trim();
  });
}

function validateUrls(urls) {
  const issues = [];
  const canonicalUrls = [];
  
  urls.forEach((url, index) => {
    try {
      const parsed = new URL(url);
      
      // Check protocol
      if (parsed.protocol !== 'https:') {
        issues.push(`❌ Line ${index + 1}: Non-HTTPS protocol: ${url}`);
      }
      
      // Check host
      if (parsed.host !== CANONICAL_HOST) {
        if (FORBIDDEN_HOSTS.includes(parsed.host)) {
          issues.push(`❌ Line ${index + 1}: Forbidden host "${parsed.host}": ${url}`);
        } else {
          issues.push(`⚠️  Line ${index + 1}: Non-canonical host "${parsed.host}": ${url}`);
        }
      } else {
        canonicalUrls.push(url);
      }
      
    } catch (error) {
      issues.push(`❌ Line ${index + 1}: Invalid URL format: ${url}`);
    }
  });
  
  return { issues, canonicalUrls };
}

async function main() {
  let server = null;
  
  try {
    // Start dev server
    server = await startDevServer();
    
    // Wait for server to be ready
    const serverReady = await waitForServer('http://localhost:3000');
    if (!serverReady) {
      throw new Error('Server not ready after timeout');
    }
    
    // Fetch sitemap
    console.log('📥 Fetching sitemap...');
    const sitemapXml = await fetchSitemap();
    
    // Parse URLs
    console.log('🔍 Parsing sitemap...');
    const urls = parseSitemap(sitemapXml);
    console.log(`📊 Found ${urls.length} URLs in sitemap`);
    
    // Validate URLs
    console.log('✅ Validating URLs...');
    const { issues, canonicalUrls } = validateUrls(urls);
    
    // Report results
    if (issues.length === 0) {
      console.log('\n🎉 SUCCESS: All URLs are canonical!');
      console.log(`✅ ${canonicalUrls.length} URLs use https://${CANONICAL_HOST}`);
    } else {
      console.log('\n❌ ISSUES FOUND:');
      issues.forEach(issue => console.log(issue));
      process.exit(1);
    }
    
    // Show sample of canonical URLs
    console.log('\n📋 Sample canonical URLs:');
    canonicalUrls.slice(0, 5).forEach(url => {
      console.log(`  • ${url}`);
    });
    if (canonicalUrls.length > 5) {
      console.log(`  ... and ${canonicalUrls.length - 5} more`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    if (server) {
      console.log('\n🛑 Stopping dev server...');
      server.kill();
    }
  }
}

main();
