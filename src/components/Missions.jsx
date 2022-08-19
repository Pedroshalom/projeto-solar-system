import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    console.log(missions);
    return (
      <div>
        <div data-testid="missions" />
        <Title headline="Missões" />
        {missions.map((element) => (
          <MissionCard
            key={ element.name }
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
          />
        ))}
      </div>
    );
  }
}
export default Missions;
