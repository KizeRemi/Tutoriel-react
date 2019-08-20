import React from 'react';

import TitlePage from '../components/TitlePage';
import BodyLayout from '../components/BodyLayout';
import Planet from '../components/Planet';
import DuckImg from '../assets/images/Duck+triangles.png';
import RaccoonImg from '../assets/images/Raccoon+triangles.png';

const HomePage = () => {
  const planets = [
    {
      id: 1,
      img: DuckImg,
      name: 'Duck Invaders',
      citation: 'DUCK! DUCK! DUCK!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra, velit ut luctus imperdiet, orci arcu vulputate urna, ac accumsan ex ligula sit amet lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra, velit ut luctus imperdiet, orci arcu vulputate urna, ac accumsan ex ligula sit amet lacus.',
      astronauts: [
        {
          firstName: 'Jonathan',
          lastName: 'Jalouzot',
          userName: 'CaptainJojo',
          age: 31,
          points: 1200,
        },
        {
          firstName: 'Kamal',
          lastName: 'Farsaoui',
          userName: 'Kamalou',
          age: 35,
          points: 850,
        },
        {
          firstName: 'Pierre',
          lastName: 'Brenot',
          userName: 'Pierrot',
          age: 12,
          points: 500,
        }
      ],
    },
    {
      id: 2,
      img: RaccoonImg,
      name: 'Raccoon of Asgard',
      citation: 'Nous sommes les raccoons',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra, velit ut luctus imperdiet, orci arcu vulputate urna, ac accumsan ex ligula sit amet lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra, velit ut luctus imperdiet, orci arcu vulputate urna, ac accumsan ex ligula sit amet lacus.',
      astronauts: [
        {
          firstName: 'Nicolas',
          lastName: 'Grévin',
          userName: 'GNicolas',
          age: 30,
          points: 150,
        },
        {
          firstName: 'Kévin',
          lastName: 'Agiri',
          userName: 'MasterPO',
          age: 29,
          points: 850,
        },
        {
          firstName: 'Kevin',
          lastName: 'Cordier',
          userName: 'Tintin',
          age: 12,
          points: 500,
        }
      ],
    }
  ];

  return (
    <BodyLayout>
      <TitlePage uppercase>Bienvenue sur le système planétaire d'Eleven labs</TitlePage>
      {planets.map((planet, index) => <Planet key={planet.id} position={index + 1} planet={planet} />)}
    </BodyLayout>
  )
};

export default HomePage;
