// Declare global interface for Housecall Pro widget
declare global {
  interface Window {
    HCPWidget?: {
      openModal: () => void;
    };
  }
}

let isHousecallProLoaded = false;
let isLoading = false;

export const loadHousecallPro = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (isHousecallProLoaded && typeof window !== 'undefined' && window.HCPWidget) {
      resolve();
      return;
    }

    if (isLoading) {
      const checkLoaded = () => {
        if (isHousecallProLoaded && typeof window !== 'undefined' && window.HCPWidget) {
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
    script.src = 'https://online-booking.housecallpro.com/script.js?token=b89a8095e38d4b95a43f864fca45ad5c&orgName=Ice-Mountn';
    script.async = true;

    script.onload = () => {
      isHousecallProLoaded = true;
      isLoading = false;
      resolve();
    };

    script.onerror = () => {
      isLoading = false;
      reject(new Error('Failed to load Housecall Pro script'));
    };

    document.head.appendChild(script);
  });
};

export const openHousecallProModal = async () => {
  try {
    await loadHousecallPro();
    if (typeof window !== 'undefined' && window.HCPWidget) {
      window.HCPWidget.openModal();
    }
  } catch (error) {
    console.error('Error loading Housecall Pro:', error);
    window.location.href = 'tel:(323) 863-8146';
  }
};
