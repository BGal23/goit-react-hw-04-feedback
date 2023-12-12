const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {percent}%</li>
    </ul>
  );
};

export default Statistics;
