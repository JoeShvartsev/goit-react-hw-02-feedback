import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};