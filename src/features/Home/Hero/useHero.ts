import { useEffect, useState } from 'react';
import landscape1 from '../../../assets/landscapeOne.jpg';
import landscape2 from '../../../assets/landscapeTwo.jpg';
import landscape3 from '../../../assets/landscapeThree.jpg';

const images = [landscape1, landscape2, landscape3];

export const useHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex: number) => (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    currentImageIndex,
    setCurrentImageIndex,
    images,
  };
};
