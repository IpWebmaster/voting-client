import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Vote extends React.Component {
  static propTypes = {
    pair: PropTypes.object.isRequired,
    hasVoted: PropTypes.string.isRequired,
    vote: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getPair = () => this.props.pair || [];

  isDisabled = () => !!this.props.hasVoted;

  hasVotedFor = (entry) => this.props.hasVoted === entry;

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}
          >
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ? <div className="label">Voted</div> : null}
          </button>
        )}
      </div>
    );
  }
}

export default Vote;
