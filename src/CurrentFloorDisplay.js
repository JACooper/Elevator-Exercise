import PropTypes from 'prop-types';
import React from 'react';
import './CurrentFloorDisplay.scss';

export default class CurrentFloorDisplay extends React.Component {
  static propTypes = {
    currentFloor: PropTypes.number,
    direction: PropTypes.string
  }

  render() {
    const { currentFloor, direction } = this.props;

    let directionDisplay = null;
    switch(direction) {
      case 'up':
        directionDisplay = <div>^</div>;
        break;
      case 'down':
        directionDisplay = <div>v</div>;
        break;
      case 'idle':
        directionDisplay = <div/>;
        break;
    };

    return (
      <div className='current-floor-display'>
        <div className='floor-number'>{currentFloor}</div>
        <div className='elevator-direction'>{directionDisplay}</div>
      </div>
    )
  }
  
}