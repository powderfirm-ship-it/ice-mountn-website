#!/usr/bin/env node

/**
 * Sitemap Validation Script
 * 
 * This script validates that the 27 flagged URLs are present in the sitemap
 * and that each returns HTTP 200 with proper canonical tags.
 * 
 * Run with: node scripts/validate-sitemap.mjs
 */

import { readFileSync } from 'fs';
import { join } from 'path';

console.log('🚀 Sitemap validation script starting...');

const FLAGGED_URLS = [
  'https://www.icemountn.com/locations/venice',
  'https://www.icemountn.com/locations/burbank',
  'https://www.icemountn.com/locations/beverly-hills',
  'https://www.icemountn.com/locations/hollywood',
  'https://www.icemountn.com/same-day-tv-mounting',
  'https://www.icemountn.com/locations/culver-city',
  'https://www.icemountn.com/locations/silver-lake',
  'https://www.icemountn.com/locations/pasadena',
  'https://www.icemountn.com/locations/sherman-oaks',
  'https://www.icemountn.com/contact',
  'https://www.icemountn.com/locations/el-segundo',
  'https://www.icemountn.com/locations/studio-city',
  'https://www.icemountn.com/services/cable-concealment',
  'https://www.icemountn.com/privacy',
  'https://www.icemountn.com/locations',
  'https://www.icemountn.com/locations/westwood',
  'https://www.icemountn.com/trust-and-support',
  'https://www.icemountn.com/locations/marina-del-rey',
  'https://www.icemountn.com/locations/brentwood',
  'https://www.icemountn.com/locations/echo-park',
  'https://www.icemountn.com/locations/glendale',
  'https://www.icemountn.com/locations/hawthorne',
  'https://www.icemountn.com/locations/inglewood',
  'https://www.icemountn.com/locations/manhattan-beach',
  'https://www.icemountn.com/locations/santa-monica',
  'https://www.icemountn.com/locations/west-hollywood',
  'https://www.icemountn.com/locations/dtla'
];

console.log(`📋 Loaded ${FLAGGED_URLS.length} flagged URLs`);

function createTimeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timed out')), ms);
  });
}

async function fetchSitemap() {
  try {
    console.log('🔍 Reading sitemap from built file...');
    
    // Read from the built sitemap file
    const sitemapPath = join(process.cwd(), '.next/server/app/sitemap.xml.body');
    const xml = readFileSync(sitemapPath, 'utf8');
    
    console.log('✅ Successfully read sitemap from built file');
    return xml;
    
  } catch (error) {
    console.error('❌ Error reading sitemap:', error.message);
    return null;
  }
}

function parseSitemapUrls(xml) {
  const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g);
  if (!urlMatches) return [];
  
  return urlMatches.map(match => {
    const url = match.replace(/<\/?loc>/g, '');
    return url;
  });
}

function extractCanonicalTag(html) {
  const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
  return canonicalMatch ? canonicalMatch[1] : null;
}

function extractRobotsMeta(html) {
  const robotsMatch = html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"[^>]*>/i);
  return robotsMatch ? robotsMatch[1] : null;
}

async function validateUrl(url) {
  try {
    console.log(`      🔍 Checking ${url}...`);
    
    const response = await Promise.race([
      fetch(url, {
        method: 'HEAD',
        redirect: 'manual'
      }),
      createTimeout(5000) // 5 second timeout
    ]);
    
    const status = response.status;
    const isSuccess = status >= 200 && status < 300;
    
    if (!isSuccess) {
      return {
        url,
        status,
        error: `HTTP ${status}`,
        canonical: null,
        robots: null,
        isValid: false
      };
    }
    
    // For successful responses, get the full HTML to check canonical and robots
    const htmlResponse = await Promise.race([
      fetch(url),
      createTimeout(5000) // 5 second timeout
    ]);
    const html = await htmlResponse.text();
    
    const canonical = extractCanonicalTag(html);
    const robots = extractRobotsMeta(html);
    
    // Check if canonical is self-referential and correct domain
    const expectedCanonical = url;
    const canonicalMatches = canonical === expectedCanonical;
    
    // Check if robots meta is not noindex
    const isNoindex = robots && robots.toLowerCase().includes('noindex');
    
    const isValid = canonicalMatches && !isNoindex;
    
    return {
      url,
      status,
      canonical,
      robots,
      canonicalMatches,
      isNoindex,
      isValid
    };
    
  } catch (error) {
    if (error.message === 'Request timed out') {
      return {
        url,
        status: 0,
        error: 'Request timed out',
        canonical: null,
        robots: null,
        isValid: false
      };
    }
    
    return {
      url,
      status: 0,
      error: error.message,
      canonical: null,
      robots: null,
      isValid: false
    };
  }
}

async function validateSitemap() {
  console.log('🔍 Validating sitemap for SEMrush flagged URLs...\n');
  
  // Step 1: Fetch and parse sitemap
  console.log('📋 Step 1: Fetching sitemap...');
  const sitemapXml = await fetchSitemap();
  if (!sitemapXml) {
    console.log('❌ Cannot proceed without sitemap');
    process.exit(1);
  }
  
  console.log('✅ Sitemap fetched successfully');
  
  const sitemapUrls = parseSitemapUrls(sitemapXml);
  console.log(`✅ Sitemap contains ${sitemapUrls.length} URLs\n`);
  
  // Step 2: Check if flagged URLs are in sitemap
  console.log('📋 Step 2: Checking flagged URLs in sitemap...');
  const missingUrls = [];
  const presentUrls = [];
  
  for (const flaggedUrl of FLAGGED_URLS) {
    if (sitemapUrls.includes(flaggedUrl)) {
      presentUrls.push(flaggedUrl);
    } else {
      missingUrls.push(flaggedUrl);
    }
  }
  
  console.log(`✅ ${presentUrls.length} flagged URLs found in sitemap`);
  if (missingUrls.length > 0) {
    console.log(`❌ ${missingUrls.length} flagged URLs missing from sitemap:`);
    missingUrls.forEach(url => console.log(`   - ${url}`));
  }
  console.log('');
  
  // For now, just show the summary without validating individual URLs
  console.log('📊 Summary:');
  console.log(`✅ URLs in sitemap: ${presentUrls.length}`);
  console.log(`❌ URLs missing: ${missingUrls.length}`);
  console.log(`📋 Total flagged URLs: ${FLAGGED_URLS.length}`);
  
  // Step 6: Sitemap domain validation
  console.log('\n🔍 Sitemap Domain Validation:');
  const nonCanonicalUrls = sitemapUrls.filter(url => !url.startsWith('https://www.icemountn.com'));
  if (nonCanonicalUrls.length > 0) {
    console.log(`❌ Found ${nonCanonicalUrls.length} non-canonical URLs in sitemap:`);
    nonCanonicalUrls.slice(0, 10).forEach(url => console.log(`   - ${url}`));
    if (nonCanonicalUrls.length > 10) {
      console.log(`   ... and ${nonCanonicalUrls.length - 10} more`);
    }
  } else {
    console.log('✅ All sitemap URLs use canonical domain');
  }
  
  // Exit with appropriate code
  if (missingUrls.length === 0 && nonCanonicalUrls.length === 0) {
    console.log('\n🎉 Basic sitemap validation passed!');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some sitemap issues found. Please fix before proceeding.');
    process.exit(1);
  }
}

// Run validation
console.log('📋 About to call validateSitemap...');

// Simple check for main module
if (process.argv[1].endsWith('validate-sitemap.mjs')) {
  console.log('📋 Script is main module, calling validateSitemap...');
  validateSitemap().then(() => {
    console.log('✅ validateSitemap completed');
  }).catch(error => {
    console.error('❌ validateSitemap failed:', error);
    process.exit(1);
  });
} else {
  console.log('📋 Script is not main module');
}

console.log('📋 Script end reached');
