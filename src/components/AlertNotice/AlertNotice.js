import React from 'react';
import './AlertNotice.css';

const AlertNotice = (props) => {
   const {active, type, text} = props;
   if (!active) {
      return null
   } else {
      return (
         <div className={`${type} alert-notice`}>{text}</div>
      )
   }
}

AlertNotice.defaultProps = {
   type: 'success',
}

export default AlertNotice;