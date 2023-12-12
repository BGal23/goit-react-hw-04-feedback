import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

const data = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState({ ...data });

  const handleClick = event => {
    if (event.target.type === 'button') {
      const name = event.target.innerText.toLowerCase();
      setFeedback({ ...feedback, [name]: feedback[name] + 1 });
    }
  };
  const { good, neutral, bad } = feedback;

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    let percent = 0;
    if (total > 0) {
      percent = Math.round((good / total) * 100);
    }
    return percent;
  };

  const options = Object.keys(data);
  const total = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
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
};

export default App;
