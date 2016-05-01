import React, { PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Winner extends React.Component {
  static propTypes = {
    winner: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
