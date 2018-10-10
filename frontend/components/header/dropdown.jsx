import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {requestAllBusinesses} from '../../actions/business_actions'

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const businesses = this.props.businesses;
    const bizArr = Object.values(businesses).map((biz, idx) => {
      if (this.props.searchtxt !== "") {
        if (biz.business_name.toLowerCase().includes(this.props.searchtxt.toLowerCase())) {
          return (
            <div key={idx} className="biz-dropdown">
              <li><Link to={`/businesses/${biz.id}`}>{biz.business_name}</Link></li>
            </div>
          )
        }
         else if (biz.category.toLowerCase().includes(this.props.searchtxt.toLowerCase())) {
          return (
            <div key={idx} className="biz-dropdown">
              <option onClick={this.props.updateSearchtxt} value={biz.category}>{biz.category}</option>
            </div>
          )
        }
      }

    });

    return(
      <ul>
        {bizArr}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    businesses: state.entities.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBusinesses: () => dispatch(requestAllBusinesses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
