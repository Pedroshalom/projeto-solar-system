import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    // console.log(this.props);
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
