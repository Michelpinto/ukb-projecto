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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${image})`,
              transform: `translateX(${100 * (index - currentImageIndex)}%)`,
            }}
          >
            {/* <h1>Hello world</h1> */}
          </div>
        ))}
      </Section>
    </main>
  );
};

export default Hero;
