import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    // console.log(planets);
    return (
      <div>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {planets
          .map((planetas) => (<PlanetCard
            key={ planetas.name }
            planetName={ planetas.name }
            planetImage={ planetas.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
