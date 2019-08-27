import PropTypes from 'prop-types';
import React from 'react';
import './DestinationDisplay.scss';

const NUM_FLOORS = 15;

export default class DestinationDisplay extends React.Component {
  static propTypes = {
    destinations: PropTypes.arrayOf(PropTypes.number),
    addDestination: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = { }
  }

  render() {
    const { destinations, addDestination } = this.props;

    console.log(destinations)
    const buttons = [...Array(NUM_FLOORS)].map((_, i) => i + 1).map(floor => {
      const classes = `floor-button${destinations.includes(floor) ? ' selected' : ''}`;
      return <button key={floor} className={classes} onClick={() => {addDestination(floor)}}>{floor}</button>
    });

    return (
      <div className="destination-display">
        <div className="destination-grid">
          {buttons}
        </div>
      </div>
    )
  }
  
}