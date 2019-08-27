import React from 'react'
import ElevatorDisplay from './ElevatorDisplay';

const DOOR_STATUS = {
  OPENING: "opening",
  OPEN: "open",
  CLOSING: "closing",
  CLOSED: "closed"
}

const DIRECTIONS = {
  UP: "up",
  DOWN: "down",
  IDLE: "idle"
};

const DOOR_TIME = {
  OPENING: 1000,
  OPEN: 2000,
  CLOSING: 1500
};

export default class ElevatorWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentFloor: 1,
      destinations: [],
      direction: DIRECTIONS.IDLE,
      doorStatus: DOOR_STATUS.CLOSED
    };
  }

  render() {
    return (
      <ElevatorDisplay
        addDestination={this.addDestination}
        {...this.state}
      />
    )
  }

  goToNextFloor = () => {
    const { currentFloor, destinations } = this.state;

    if (destinations.includes(currentFloor)) {
      this.arriveAtFloor(currentFloor);
    } else {
      this.calcNextFloor();
    }
  }

  arriveAtFloor = (floor) => {
    // This monstrosity is just to make the door "opening" behavior less abrupt. It's ugly, I know.
    this.setState({ doorStatus: DOOR_STATUS.OPENING }, () => {
      setTimeout(() => {
        this.setState({ doorStatus: DOOR_STATUS.OPEN }, () => {
          setTimeout(() => {
            this.setState({ doorStatus: DOOR_STATUS.CLOSING }, () => {
              setTimeout(() => {
                this.setState({
                  doorStatus: DOOR_STATUS.CLOSED,
                  destinations: this.state.destinations.filter(f => f !== floor)
                }, () => {
                  this.calcNextFloor();
                });
              }, DOOR_TIME.CLOSING);
            });
          }, DOOR_TIME.OPEN);
        });
      }, DOOR_TIME.OPENING);
    });
  }

  calcNextFloor = () => {
    const { currentFloor, destinations, direction } = this.state;

    const destinationsAbove = destinations.filter(floor => floor > currentFloor).sort((a, b) => a - b);
    const destinationsBelow = destinations.filter(floor => floor < currentFloor).sort((a, b) => b - a);
    const hasDestinationsAbove = destinationsAbove.length > 0;
    const hasDestinationsBelow = destinationsBelow.length > 0;

    let nextFloor = currentFloor;
    let goUp = false;
    let goDown = false;
    if (hasDestinationsAbove && hasDestinationsBelow) {
      if (direction === DIRECTIONS.UP) {
        goUp = true;
      } else if (direction === DIRECTIONS.DOWN) {
        goDown = true;
      } else {
        // We need to pick a direction, so find the closer destination
        if (currentFloor - destinationsBelow[0] < destinationsAbove[0] - currentFloor) {
          goDown = true;
        } else {
          goUp = true;
        }
      }
    } else if (hasDestinationsAbove) {
      goUp = true;
    } else if (hasDestinationsBelow) {
      goDown = true;
    }

    const toFloor = (currentFloor, direction) => {
      setTimeout(() => {
        this.setState({ currentFloor, direction }, () => {
          this.goToNextFloor();
        })
      }, 1000)
    };

    if (goUp) {
      toFloor(++nextFloor, DIRECTIONS.UP)
    } else if (goDown) {
      toFloor(--nextFloor, DIRECTIONS.DOWN)
    } else {
      this.setState({ direction: DIRECTIONS.IDLE });
    }
  }

  addDestination = (floor) => {
    const { currentFloor, doorStatus, destinations } = this.state;

    const floorDifference = floor - currentFloor;
    console.log(`currentFloor: ${currentFloor} | newFloor: ${floor}`)
    if (floorDifference === 0) return;

    const newDestinations = destinations.concat(floor);
    this.setState({ destinations: newDestinations }, () => {
      if (doorStatus === DOOR_STATUS.CLOSED) {
        // If the doors are open or closing, we don't want to kick off another calc right away
        this.calcNextFloor();
      }
    });
  }
}