import { useEffect, useState } from 'react';
// import landscape1 from '../../../assets/landscapeOne.jpg';
// import landscape2 from '../../../assets/landscapeTwo.jpg';
// import landscape3 from '../../../assets/landscapeThree.jpg';
import curso1 from '../../../assets/curso1.avif';
import curso2 from '../../../assets/curso2.avif';
import curso3 from '../../../assets/curso3.avif';

const images = [curso2, curso3, curso1];

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
