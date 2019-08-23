import React, { useState } from 'react';
import { shape, string, number, arrayOf } from 'prop-types';
import { MdKeyboardArrowDown } from 'react-icons/md';

import Container from './Container';
import Number from './Number';
import Unit from './Unit';
import Quote from './Quote';
import PlanetName from './PlanetName';
import Description from './Description';
import AstronautsTotal from './AstronautsTotal';
import PlanetImage from './PlanetImage';
import AstronautsDataTable from './AstronautsDataTable';
import Button from './Button';

const Planet = ({ planet, position }) => {
  const { astronauts = [] } = planet;
  const [open, toggle] = useState(false);

  return (
    <Container row bordered>
      <Container centered>
        <PlanetImage alt="duck planet" src={planet.img} />
        <Number>{astronauts.reduce((points, astronaut) => points += astronaut.points, 0)}<Unit>points</Unit></Number>
      </Container>
      <div>
        <PlanetName><Number compact>{position}</Number>{planet.name}</PlanetName>
        <Quote>{planet.citation}</Quote>
        <Description>{planet.description}</Description>
        <AstronautsTotal>
          {`Cette planète est habité par ${astronauts.length} astronautes`}
          <Button onClick={() => toggle(!open)} collapse={open}>
            <MdKeyboardArrowDown />
          </Button>
        </AstronautsTotal>
        {open && (
          <AstronautsDataTable
            noHeader
            columns={[{ name: 'Pseudo', selector: 'userName' }, { name: 'Points', selector: 'points', }]}
            data={astronauts}
          />
        )}
      </div>
    </Container>
  );
};

Planet.propTypes = {
  planet: shape({
    img: string.isRequired,
    name: string.isRequired,
    citation: string.isRequired,
    description: string.isRequired,
    astronauts: arrayOf(shape(
      {
        firstName: string,
        lastName: string,
        userName: string,
        age: number,
        points: number.isRequired,
      }
    )).isRequired,
  }),
  position: number.isRequired,
}

export default Planet;
