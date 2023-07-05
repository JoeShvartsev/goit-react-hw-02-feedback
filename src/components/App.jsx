import React, { Component } from 'react';
import { Section } from './Section/Section.jsx';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import { Statistics} from './Statistics/Statistics'
import {Notification} from './Notification/Notification'
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

    return (
      <div>
        <Section title="Please leave a feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistics">
          {total===0?<Notification message="There is no feedback"/>:<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
        </Section>
      </div>
    );
  }
}
App.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};

