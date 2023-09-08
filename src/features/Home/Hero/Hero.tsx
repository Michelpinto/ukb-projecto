import React from 'react';

import { Section } from './heroStyles';
import { useHero } from './useHero';

const Hero: React.FC = () => {
  const { images, currentImageIndex } = useHero();

  return (
    <main>
      <Section>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(${100 * (index - currentImageIndex)}%)`,
            }}
          ></div>
        ))}
      </Section>
    </main>
  );
};

export default Hero;
