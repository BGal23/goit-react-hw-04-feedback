import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    const buttons = options.map(name => (
      <button style={{ textTransform: 'capitalize' }} type="button" key={name}>
        {name}
      </button>
    ));

    return <div onClick={onLeaveFeedback}>{buttons}</div>;
  }
}
