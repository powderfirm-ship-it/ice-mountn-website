#!/usr/bin/env ts-node

/**
 * Local URL Status Check Script
 * 
 * This script checks the status of the 22 URLs against localhost:3000
 * to ensure they now return 200 OK or 301 redirects as expected.
 * 
 * Run with: npx ts-node scripts/check-urls-local.ts
 * Make sure to run 'npm start' first in another terminal
 */

interface UrlCheckResult {
  url: string;
  status: number;
  redirectUrl?: string;
  error?: string;
}

const BASE_URL = "http://localhost:3000";

const LOCAL_TARGET_URLS = [
  // 20 neighborhood locations that should now return 200 OK
  `${BASE_URL}/locations/bel-air`,
  `${BASE_URL}/locations/beverly-glen`,
  `${BASE_URL}/locations/beverly-grove`,
  `${BASE_URL}/locations/boyle-heights`,
  `${BASE_URL}/locations/century-city`,
  `${BASE_URL}/locations/chinatown`,
  `${BASE_URL}/locations/eagle-rock`,
  `${BASE_URL}/locations/east-hollywood`,
  `${BASE_URL}/locations/encino`,
  `${BASE_URL}/locations/gardena`,
  `${BASE_URL}/locations/hermosa-beach`,
  `${BASE_URL}/locations/los-feliz`,
  `${BASE_URL}/locations/north-hollywood`,
  `${BASE_URL}/locations/pacific-palisades`,
  `${BASE_URL}/locations/playa-del-rey`,
  `${BASE_URL}/locations/redondo-beach`,
  `${BASE_URL}/locations/south-pasadena`,
  `${BASE_URL}/locations/toluca-lake`,
  `${BASE_URL}/locations/van-nuys`,
  `${BASE_URL}/locations/west-los-angeles`,
  
  // 2 URLs that should return 301/308 redirects
  `${BASE_URL}/locations/nearby-areas`,
  `${BASE_URL}/services/same-day-tv-mounting`
];

const LOCAL_EXPECTED_REDIRECTS: Record<string, string> = {
  [`${BASE_URL}/locations/nearby-areas`]: `${BASE_URL}/locations`,
  [`${BASE_URL}/services/same-day-tv-mounting`]: `${BASE_URL}/same-day-tv-mounting`
};

async function checkLocalUrl(url: string): Promise<UrlCheckResult> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'manual', // Don't follow redirects automatically
      headers: {
        'User-Agent': 'IceMountn-URL-Checker/1.0'
      }
    });

    const result: UrlCheckResult = {
      url,
      status: response.status
    };

    if (response.status === 301 || response.status === 302 || response.status === 308) {
      const location = response.headers.get('location');
      if (location) {
        result.redirectUrl = location;
      }
    }

    return result;
  } catch (error) {
    return {
      url,
      status: 0,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

async function checkAllLocalUrls(): Promise<void> {
  console.log('🔍 Checking 22 URLs for 4xx error resolution (LOCAL)...\n');
  console.log('Make sure you have "npm start" running in another terminal!\n');
  
  const results: UrlCheckResult[] = [];
  let successCount = 0;
  let errorCount = 0;

  // Check URLs in parallel with a small delay to avoid overwhelming the server
  for (let i = 0; i < LOCAL_TARGET_URLS.length; i++) {
    const url = LOCAL_TARGET_URLS[i];
    const result = await checkLocalUrl(url);
    results.push(result);
    
    // Add small delay between requests
    if (i < LOCAL_TARGET_URLS.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // Process and display results
  console.log('📊 Results Summary:\n');
  
  for (const result of results) {
    const isRedirect = result.status === 301 || result.status === 302 || result.status === 308;
    const isSuccess = result.status === 200 || isRedirect;
    
    if (isSuccess) {
      successCount++;
    } else {
      errorCount++;
    }

    const statusIcon = isSuccess ? '✅' : '❌';
    const statusText = isRedirect ? `${result.status} (Redirect)` : result.status.toString();
    
    console.log(`${statusIcon} ${result.url}`);
    console.log(`   Status: ${statusText}`);
    
    if (isRedirect && result.redirectUrl) {
      const expectedRedirect = LOCAL_EXPECTED_REDIRECTS[result.url];
      const redirectIcon = expectedRedirect && result.redirectUrl.includes(expectedRedirect.split('/').pop()!) ? '✅' : '⚠️';
      console.log(`   Redirects to: ${redirectIcon} ${result.redirectUrl}`);
      
      if (expectedRedirect && !result.redirectUrl.includes(expectedRedirect.split('/').pop()!)) {
        console.log(`   Expected: ${expectedRedirect}`);
      }
    }
    
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
    
    console.log('');
  }

  // Summary
  console.log('📈 Summary:');
  console.log(`✅ Successful (200/301/302/308): ${successCount}`);
  console.log(`❌ Failed: ${errorCount}`);
  console.log(`📊 Total: ${results.length}`);
  
  if (errorCount === 0) {
    console.log('\n🎉 All URLs are now working correctly! No more 4xx errors.');
  } else {
    console.log(`\n⚠️  ${errorCount} URL(s) still have issues that need attention.`);
  }
  
  // Check redirect targets
  console.log('\n🔍 Redirect Validation:');
  let redirectSuccessCount = 0;
  let redirectErrorCount = 0;
  
  for (const [sourceUrl, expectedTarget] of Object.entries(LOCAL_EXPECTED_REDIRECTS)) {
    const result = results.find(r => r.url === sourceUrl);
    if (result && (result.status === 301 || result.status === 308) && result.redirectUrl) {
      if (result.redirectUrl.includes(expectedTarget.split('/').pop()!)) {
        console.log(`✅ ${sourceUrl} → ${result.redirectUrl} (Correct)`);
        redirectSuccessCount++;
      } else {
        console.log(`❌ ${sourceUrl} → ${result.redirectUrl} (Expected: ${expectedTarget})`);
        redirectErrorCount++;
      }
    } else {
      console.log(`❌ ${sourceUrl} - No redirect found (Status: ${result?.status})`);
      redirectErrorCount++;
    }
  }
  
  console.log(`\n📊 Redirect Summary: ${redirectSuccessCount} correct, ${redirectErrorCount} incorrect`);
  
  // Exit with appropriate code
  if (errorCount === 0 && redirectErrorCount === 0) {
    console.log('\n🎯 All checks passed! Ready for deployment.');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some issues found. Please resolve before deployment.');
    process.exit(1);
  }
}

// Run the check
if (require.main === module) {
  checkAllLocalUrls().catch(error => {
    console.error('❌ Script execution failed:', error);
    process.exit(1);
  });
}
