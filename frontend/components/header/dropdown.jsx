import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {getSearchResult} from '../../actions/business_actions'

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  handleButtonClick(e) {
    debugger
    e.preventDefault();
    this.props.getSearchResult(e.target.innerText);
  }


  render() {
    const businesses = this.props.businesses;
    const bizCat = ["Japanese", "Korean", "Delivery","Fast Food", "Salad"]
    let bizArr = Object.values(businesses).map((biz, idx) => {
          if (this.props.searchtxt !== "") {
            if (biz.business_name.toLowerCase().includes(this.props.searchtxt.toLowerCase())) {
              return (
                <div key={idx} className="biz-dropdown">
                  <li><Link to={`/businesses/${biz.id}`}>{biz.business_name}</Link></li>
                </div>
              )
            }
          }
      })

  if (this.props.searchtxt === "") {
    bizArr = bizCat.map((biz, idx) => {
      return  (
        <div key={idx} className="biz-dropdown">
          <li onClick={this.handleButtonClick}><Link to="/businesses">{biz}</Link></li>
        </div>
      )
    })
  }

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
    getSearchResult: (searchtxt) => dispatch(getSearchResult(searchtxt)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
