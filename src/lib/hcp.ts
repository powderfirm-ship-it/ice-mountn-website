let loaded = false;

// Extend Window interface for HousecallPro
declare global {
  interface Window {
    HousecallPro?: {
      openModal?: () => void;
    };
  }
}

export async function openHcp() {
  if (!loaded) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://online-booking.housecallpro.com/script.js?token=b89a8095e38d4b95a43f864fca45ad5c&orgName=Ice-Mountn";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
    loaded = true;
  }
  
  // Wait a bit for the script to initialize
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (window?.HousecallPro?.openModal) {
    window.HousecallPro.openModal();
  } else {
    // Fallback: open in new window
    window.open('https://online-booking.housecallpro.com/Ice-Mountn/573582', '_blank');
  }
}

export function loadHousecallPro() {
  if (!loaded) {
    const script = document.createElement("script");
    script.src = "https://online-booking.housecallpro.com/script.js?token=b89a8095e38d4b95a43f864fca45ad5c&orgName=Ice-Mountn";
    script.async = true;
    document.head.appendChild(script);
    loaded = true;
  }
}
