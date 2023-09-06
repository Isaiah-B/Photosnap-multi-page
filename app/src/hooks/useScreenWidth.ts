import { useEffect, useState } from 'react';

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResizeWindow = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', onResizeWindow);

    return () => window.removeEventListener('resize', onResizeWindow);
  }, []);  

  return screenWidth;
}