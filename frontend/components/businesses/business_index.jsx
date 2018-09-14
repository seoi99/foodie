import React from 'react';
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBusinesses();
  }
  render() {
    debugger
    const businesses = this.props.businesses.map((business, idx) => {
      return <BusinessIndexItem business={business} key={idx}/>
    })
    return(
      <div>
        <ul>
          {businesses}
        </ul>
        
      </div>
    )
  }
}

export default BusinessIndex;
