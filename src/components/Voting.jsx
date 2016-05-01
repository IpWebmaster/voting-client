import React, { PropTypes } from 'react';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends React.Component {
  static propTypes = {
    winner: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    );
  }
}
export default Voting;
