#!/usr/bin/env ts-node

/**
 * URL Status Check Script
 * 
 * This script checks the status of the 22 URLs that were previously returning 4xx errors
 * to ensure they now return 200 OK or 301 redirects as expected.
 * 
 * Run with: npx ts-node scripts/check-urls.ts
 */

interface UrlCheckResult {
  url: string;
  status: number;
  redirectUrl?: string;
  error?: string;
}

const TARGET_URLS = [
  // 20 neighborhood locations that should now return 200 OK
  "https://www.icemountn.com/locations/bel-air",
  "https://www.icemountn.com/locations/beverly-glen",
  "https://www.icemountn.com/locations/beverly-grove",
  "https://www.icemountn.com/locations/boyle-heights",
  "https://www.icemountn.com/locations/century-city",
  "https://www.icemountn.com/locations/chinatown",
  "https://www.icemountn.com/locations/eagle-rock",
  "https://www.icemountn.com/locations/east-hollywood",
  "https://www.icemountn.com/locations/encino",
  "https://www.icemountn.com/locations/gardena",
  "https://www.icemountn.com/locations/hermosa-beach",
  "https://www.icemountn.com/locations/los-feliz",
  "https://www.icemountn.com/locations/north-hollywood",
  "https://www.icemountn.com/locations/pacific-palisades",
  "https://www.icemountn.com/locations/playa-del-rey",
  "https://www.icemountn.com/locations/redondo-beach",
  "https://www.icemountn.com/locations/south-pasadena",
  "https://www.icemountn.com/locations/toluca-lake",
  "https://www.icemountn.com/locations/van-nuys",
  "https://www.icemountn.com/locations/west-los-angeles",
  
  // 2 URLs that should return 301 redirects
  "https://www.icemountn.com/locations/nearby-areas",
  "https://www.icemountn.com/services/same-day-tv-mounting"
];

const EXPECTED_REDIRECTS: Record<string, string> = {
  "https://www.icemountn.com/locations/nearby-areas": "https://www.icemountn.com/locations",
  "https://www.icemountn.com/services/same-day-tv-mounting": "https://www.icemountn.com/same-day-tv-mounting"
};

async function checkUrl(url: string): Promise<UrlCheckResult> {
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

    if (response.status === 301 || response.status === 302) {
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

async function checkAllUrls(): Promise<void> {
  console.log('🔍 Checking 22 URLs for 4xx error resolution...\n');
  
  const results: UrlCheckResult[] = [];
  let successCount = 0;
  let errorCount = 0;

  // Check URLs in parallel with a small delay to avoid overwhelming the server
  for (let i = 0; i < TARGET_URLS.length; i++) {
    const url = TARGET_URLS[i];
    const result = await checkUrl(url);
    results.push(result);
    
    // Add small delay between requests
    if (i < TARGET_URLS.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  // Process and display results
  console.log('📊 Results Summary:\n');
  
  for (const result of results) {
    const isRedirect = result.status === 301 || result.status === 302;
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
      const expectedRedirect = EXPECTED_REDIRECTS[result.url];
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
  console.log(`✅ Successful (200/301/302): ${successCount}`);
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
  
  for (const [sourceUrl, expectedTarget] of Object.entries(EXPECTED_REDIRECTS)) {
    const result = results.find(r => r.url === sourceUrl);
    if (result && result.status === 301 && result.redirectUrl) {
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
  checkAllUrls().catch(error => {
    console.error('❌ Script execution failed:', error);
    process.exit(1);
  });
}
