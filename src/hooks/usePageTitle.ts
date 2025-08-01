import { useEffect } from 'react';

const usePageTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    
    // Cleanup function to restore previous title if needed
    return () => {
      // Optional: restore previous title on unmount
      // document.title = prevTitle;
    };
  }, [title]);
};

export default usePageTitle;