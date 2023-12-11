import { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../Feedback/Feedback';
import { Notification } from '../Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import data from './data.json';

export class App extends Component {
  state = { ...data };

  handleClick = event => {
    if (event.target.type === 'button') {
      const name = event.target.innerText.toLowerCase();
      return this.setState({
        [name]: this.state[name] + 1,
      });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    let percent = 0;
    if (total > 0) {
      percent = Math.round((good / total) * 100);
    }
    return percent;
  };

  render() {
    const options = Object.keys(data);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
