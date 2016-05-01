import React, { PropTypes } from 'react';

class Winner extends React.Component {
  static propTypes = {
    winner: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}
      </div>
    );
  }
}

export default Winner;
