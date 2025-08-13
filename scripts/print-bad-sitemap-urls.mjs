#!/usr/bin/env node

import { readFileSync } from 'fs';
import { join } from 'path';

try {
  // Read the CSV file
  const csvPath = '/mnt/data/www.icemountn.com_wrong_pages_found_in_sitemap_20250813.csv';
  const csvContent = readFileSync(csvPath, 'utf8');
  
  // Parse CSV and extract URLs
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  // Find the column with URLs (usually "Link URL" or similar)
  const urlColumnIndex = headers.findIndex(h => 
    h.toLowerCase().includes('link') && h.toLowerCase().includes('url')
  );
  
  if (urlColumnIndex === -1) {
    console.error('❌ Could not find URL column in CSV headers:', headers);
    process.exit(1);
  }
  
  console.log(`📊 Found URL column: "${headers[urlColumnIndex]}" at index ${urlColumnIndex}`);
  
  // Extract URLs from the data rows
  const urls = new Set();
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      const columns = line.split(',').map(c => c.trim().replace(/"/g, ''));
      if (columns[urlColumnIndex]) {
        urls.add(columns[urlColumnIndex]);
      }
    }
  }
  
  // Convert to array, normalize, and sort
  const normalizedUrls = Array.from(urls)
    .filter(url => url && url.trim())
    .map(url => url.trim())
    .sort();
  
  console.log(`\n📋 Total unique URLs found: ${normalizedUrls.length}`);
  
  // Assert count === 163
  if (normalizedUrls.length !== 163) {
    console.error(`❌ Expected 163 URLs, but found ${normalizedUrls.length}`);
    process.exit(1);
  }
  
  console.log('✅ Found exactly 163 URLs as expected!');
  console.log('\n🔗 All 163 wrong URLs from sitemap:');
  console.log('=' .repeat(80));
  
  // Print each URL with bullet point
  normalizedUrls.forEach((url, index) => {
    console.log(`• ${url}`);
  });
  
  console.log('=' .repeat(80));
  console.log(`\n📊 Summary: ${normalizedUrls.length} URLs ready for canonicalization`);
  
} catch (error) {
  console.error('❌ Error reading CSV file:', error.message);
  process.exit(1);
}
