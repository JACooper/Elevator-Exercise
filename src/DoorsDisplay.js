import PropTypes from 'prop-types';
import React from 'react';
import './DoorsDisplay.scss';

export default class DoorsDisplay extends React.Component {
  static propTypes = {
    doorStatus: PropTypes.string
  }

  render() {
    const { doorStatus } = this.props;

    let displayContents = null;
    switch(doorStatus) {
      case 'opening':
        displayContents = <div className="blinking-text">The doors are opening...</div>;
        break;
      case 'open':
        displayContents = <div className="open-doors">The doors are open.</div>;
        break;
      case 'closing':
        displayContents = <div className="blinking-text">The doors are closing...</div>;
        break;
      case 'closed':
        displayContents = <div className="closed-doors">The doors are closed.</div>;
        break;
    };

    return (
      <div className="doors-display">
        {displayContents}
      </div>
    )
  }
  
}