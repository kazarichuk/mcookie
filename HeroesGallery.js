import React from 'react';

function HeroesGallery() {
    const heroes = [
        {
          name: 'Sparklestar',
          description:
            'This stealthy character has the incredible ability to ...',
          imagePath: '/Heroes/Sparklestar.png',
        },
        {
          name: 'Technomancer',
          description:
            'Another hero description...',
           imagePath: '/Heroes/Technomancer.png',
        },
        {
            name: 'Starlight',
            description:
              'Another hero description...',
            imagePath: '/Heroes/Starlight.png',
          },
          {
            name: 'Aquaforce',
            description:
              'Another hero description...',
            imagePath: '/Heroes/Aquaforce.png',
          },
          {
            name: 'Blaze',
            description:
              'Another hero description...',
              imagePath: '/Heroes/Blaze.png',
          },
          {
            name: 'Dreamweaver',
            description:
              'Another hero description...',
              imagePath: '/Heroes/Dreamweaver.png',
          },
          {
            name: 'Frostbite',
            description:
              'Another hero description...',
              imagePath: '/Heroes/Frostbite.png',
          },
          {
            name: 'Gigantus',
            description:
              'Another hero description...',
              imagePath: '/Heroes/Gigantus.png',
          },
          {
            name: 'Rockslide',
            description:
              'Another hero description...',
              imagePath: '/Heroes/Rockslide.png',
          },
          {
            name: 'Shadowcat',
            description:
              'Another hero description...',
              imagePath: '/Heroes/Shadowcat.png',
          },
          {
            name: 'Thunderbolt',
            description:
              'Another hero description...',
              imagePath: '/Heroes/Thunderbolt.png',
          },
          {
            name: 'Windrider',
            description:
              'Another hero description...',
              imagePath: '/Heroes/Windrider.png',
          },
      ];
      const renderHeroCards = () => {
        return heroes.map((hero, index) => {
          return (
            <div key={index} className="hero-card">
              <img src={hero.imagePath} alt={hero.name} />
              <h3>{hero.name}</h3>
              <p>{hero.description}</p>
            </div>
          );
        });
      };
    
      return (
        <div className="heroes-gallery">
          <h2>Welcome to our Heroes Gallery</h2>
          <p>Discover 12 unique heroes for your child to choose from, offering insights into their personality while promoting growth, learning, and self-discovery.</p>
          <div className="hero-cards-container">{renderHeroCards()}</div>
        </div>
      );
    }
    
    export default HeroesGallery;
