import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <span className="planetas">
        <div data-testid="planet-card">
          <p className="texto" data-testid="planet-name">{planetName}</p>
          <img src={ planetImage } alt={ planetName } />
        </div>
      </span>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
