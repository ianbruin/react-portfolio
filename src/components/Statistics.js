import React, { Component, PropTypes } from 'react';

export default class Statistics extends Component {
  render() {
    // Benchmarks are calculated from the time it takes to get from app init (src/index.js)
    // to render of containers/App.js. Uses the Perf object from react-addons-perf.
    const { benchmark } = this.props;
    return (
      <div className="statistics">
        React.js rendered this page in {benchmark} milliseconds (<a href="https://facebook.github.io/react/docs/perf.html">inclusive</a>). Refresh to benchmark again.
      </div>
    );
  }
}

Statistics.propTypes = {
  benchmark: PropTypes.number.isRequired
};
