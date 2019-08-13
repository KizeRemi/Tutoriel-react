import React from 'react';

import TitlePage from './components/Title';
import Planet from './components/Planet';
import DuckImg from './assets/images/Duck+triangles.png';
import RaccoonImg from './assets/images/Raccoon+triangles.png';

const App = () => {
  const planets = [
    {
      img: DuckImg,
      points: 1100,
      name: 'Duck Invaders',
      citation: 'DUCK! DUCK! DUCK!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra, velit ut luctus imperdiet, orci arcu vulputate urna, ac accumsan ex ligula sit amet lacus.',
      totalAstronauts: 17,
    },
    {
      img: RaccoonImg,
      points: 500,
      name: 'Raccoon of Asgard',
      citation: 'Nous sommes les raccoons',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra, velit ut luctus imperdiet, orci arcu vulputate urna, ac accumsan ex ligula sit amet lacus.',
      totalAstronauts: 16,
    }
  ];

  return (
    <div className="App">
      <TitlePage title="Bienvenue sur le système planétaire d'Eleven labs" />
      {planets.map(planet => <Planet planet={planet} />)}
    </div>
  )
};

export default App;
