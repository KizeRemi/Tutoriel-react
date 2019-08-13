import React from 'react';
import { shape, string, number } from 'prop-types';

const Planet = ({ planet }) => (
  <div style={{ display: 'flex' }}>
    <div>
      <img alt="duck planet" style={{ height: 300 }} src={planet.img}></img>
      <div>{planet.points}</div>
    </div>
    <div>
      <h2>{planet.name}</h2>
      <cite>{planet.citation}</cite>
      <div>
        {planet.description}
      </div>
      <div>{`Cette planète est habité par ${planet.totalAstronauts} astronautes`}</div>
    </div>
  </div>
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
}

export default Planet;
