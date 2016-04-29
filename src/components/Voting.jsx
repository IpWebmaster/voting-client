import React, { PropTypes } from 'react';

class Voting extends React.Component {
  static propTypes = {
    pair: PropTypes.array.isRequired,
    hasVoted: PropTypes.string.isRequired
  }

  getPair = () => this.props.pair || [];

  isDisabled = () => !!this.props.hasVoted;

  vote = (entry) => entry;

  hasVotedFor = (entry) => this.props.hasVoted === entry;

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.vote(entry)}
          >
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ? <div className="label">Voted</div> : null}
          </button>
        )}
      </div>
    );
  }
}
export default Voting;
