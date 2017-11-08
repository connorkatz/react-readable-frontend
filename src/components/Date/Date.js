import React from 'react';
import timestampToDate from 'timestamp-to-date';

const Date = (props) => {
   return (
      <time>{timestampToDate(props.timestamp, 'MM/dd/yyyy')}</time>
   )
}

export default Date;