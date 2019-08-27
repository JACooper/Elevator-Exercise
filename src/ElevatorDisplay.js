import PropTypes from 'prop-types';
import React from 'react';
import './ElevatorDisplay.scss';

import CurrentFloorDisplay from './CurrentFloorDisplay';
import DoorsDisplay from './DoorsDisplay';
import DestinationDisplay from './DestinationDisplay';

export default class ElevatorDisplay extends React.Component {
  static propTypes = {
    currentFloor: PropTypes.number,
    destinations: PropTypes.arrayOf(PropTypes.number),
    direction: PropTypes.string,
    doorStatus: PropTypes.string,
    addDestination: PropTypes.func
  }

  render() {
    const { currentFloor, destinations, direction, doorStatus, addDestination } = this.props;

    return (
      <div className="elevator-display">
        <DoorsDisplay doorStatus={doorStatus} />
        <div className="panel-display">
          <CurrentFloorDisplay currentFloor={currentFloor} direction={direction} />
          <DestinationDisplay destinations={destinations} addDestination={addDestination} />
        </div>
      </div>
    )
  }
}