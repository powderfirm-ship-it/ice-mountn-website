#!/usr/bin/env node

console.log('🚀 Simple test script starting...');

async function testFetch() {
  try {
    console.log('🔍 Testing fetch...');
    const response = await fetch('http://localhost:3000/sitemap.xml');
    console.log('✅ Fetch successful:', response.status);
    const text = await response.text();
    console.log('✅ Text length:', text.length);
  } catch (error) {
    console.error('❌ Fetch error:', error.message);
  }
}

console.log('📋 About to call testFetch...');
testFetch().then(() => {
  console.log('✅ testFetch completed');
}).catch(error => {
  console.error('❌ testFetch failed:', error);
});

console.log('📋 Script end reached');
