import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';

const Timestamp = (props) => {
  const time = moment(props.time);
  const absolute = time.format('MMMM Do YYYY, h:mm:ss a');
  const relative = time.fromNow();

  return (
    <span title={absolute}>{relative}</span>
  );
};

Timestamp.propTypes = {
  title: PropTypes.instanceOf(Date).isRequired,
};

export default Timestamp;