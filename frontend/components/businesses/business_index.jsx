import React from 'react';
import BusinessIndexItem from './business_index_item';
import HeaderContainer from '../header/header_fixed_container';
import GoogleMap from '../business_map/google_map';
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
  }

  componentDidUpdate() {

  }
  render() {

    const businesses = this.props.businesses.map((business, idx) => {
      return <BusinessIndexItem business={business} key={idx} num={idx}/>;
    });

      return(
      <div>
        <HeaderContainer businesses={businesses}/>
        <div className="bg-two">
          <div className="biz-shelf">
            <h1>Welcome to Foodie </h1>

          </div>
        </div>
        <div className="biz-idx-main">
          <ul>
            {businesses}
          </ul>
          <div className="all-map">
            <GoogleMap requestAllBusiness={this.props.requestAllBusinesses} businesses={this.props.businesses} singleBusiness={false}/>
          </div>
        </div>
      </div>
    );
  }
}


export default BusinessIndex;
