import React from 'react';

const BusinessIndexItem = ({business}) => {
  debugger
  return(
    <li>
      <p>{business.business_name}</p>
      <p>{business.full_address}</p>
    </li>
  )
}

export default BusinessIndexItem;
