import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, percent } = this.props;
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percent}%</li>
      </ul>
    );
  }
}
