// Declare global interface for Housecall Pro widget
declare global {
  interface Window {
    HCPWidget?: {
      openModal: () => void;
    };
    HousecallPro?: {
      openModal?: () => void;
    };
  }
}

let isHousecallProLoaded = false;
let isLoading = false;
const SCRIPT_ID = 'hcp-widget-script';
const FALLBACK_URL = 'https://online-booking.housecallpro.com/Ice-Mountn/573582';

export const loadHcpWidget = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (isHousecallProLoaded && typeof window !== 'undefined' && (window.HCPWidget || window.HousecallPro)) {
      resolve();
      return;
    }

    // Check if script is already loading
    if (isLoading) {
      const checkLoaded = () => {
        if (isHousecallProLoaded && typeof window !== 'undefined' && (window.HCPWidget || window.HousecallPro)) {
          resolve();
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    // Check if script tag already exists
    const existingScript = document.getElementById(SCRIPT_ID);
    if (existingScript) {
      const checkLoaded = () => {
        if (typeof window !== 'undefined' && (window.HCPWidget || window.HousecallPro)) {
          isHousecallProLoaded = true;
          isLoading = false;
          resolve();
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    isLoading = true;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://online-booking.housecallpro.com/script.js?token=b89a8095e38d4b95a43f864fca45ad5c&orgName=Ice-Mountn';
    script.async = true;

    script.onload = () => {
      // Wait for the widget to initialize
      const checkWidget = () => {
        if (typeof window !== 'undefined' && (window.HCPWidget || window.HousecallPro)) {
          isHousecallProLoaded = true;
          isLoading = false;
          resolve();
        } else {
          setTimeout(checkWidget, 100);
        }
      };
      checkWidget();
    };

    script.onerror = () => {
      isLoading = false;
      reject(new Error('Failed to load Housecall Pro script'));
    };

    document.head.appendChild(script);
  });
};

export const openBooking = async (): Promise<void> => {
  try {
    await loadHcpWidget();
    
    // Try to open the modal with a timeout
    const openPromise = new Promise<void>((resolve, reject) => {
      if (window.HCPWidget?.openModal) {
        window.HCPWidget.openModal();
        resolve();
      } else if (window.HousecallPro?.openModal) {
        window.HousecallPro.openModal();
        resolve();
      } else {
        reject(new Error('No HCP widget found'));
      }
    });

    // Wait up to 2 seconds for the modal to open
    await Promise.race([
      openPromise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 2000))
    ]);

  } catch (error) {
    console.warn('HCP modal failed, opening fallback URL:', error);
    // Fallback: open the Housecall Pro page in a new tab
    window.open(FALLBACK_URL, '_blank');
  }
};

// Legacy export for backward compatibility
export const openHousecallProModal = openBooking;
export const loadHousecallPro = loadHcpWidget;
