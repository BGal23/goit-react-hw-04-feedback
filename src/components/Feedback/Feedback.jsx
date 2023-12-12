const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const buttons = options.map(name => (
    <button style={{ textTransform: 'capitalize' }} type="button" key={name}>
      {name}
    </button>
  ));

  return <div onClick={onLeaveFeedback}>{buttons}</div>;
};

export default FeedbackOptions;
