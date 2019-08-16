import React from 'react';

import Container from './Container';
import Number from './Number';
import { shape, string, number } from 'prop-types';
import Unit from './Unit';
import Quote from './Quote';
import PlanetName from './PlanetName';
import Description from './Description';
import AstronautsTotal from './AstronautsTotal';
import PlanetImage from './PlanetImage';

const Planet = ({ planet, position }) => (
  <Container row>
    <Container centered>
      <PlanetImage alt="duck planet" src={planet.img} />
      <Number>{planet.points}<Unit>points</Unit></Number>
    </Container>
    <div>
      <PlanetName><Number compact>{position}</Number>{planet.name}</PlanetName>
      <Quote>{planet.citation}</Quote>
      <Description>{planet.description}</Description>
      <AstronautsTotal>{`Cette planète est habité par ${planet.totalAstronauts} astronautes`}</AstronautsTotal>
    </div>
  </Container>
);

Planet.propTypes = {
  planet: shape({
    img: string.isRequired,
    points: number.isRequired,
    name: string.isRequired,
    citation: string.isRequired,
    description: string.isRequired,
    totalAstronauts: number.isRequired,
  }),
  position: number.isRequired,
}

export default Planet;
