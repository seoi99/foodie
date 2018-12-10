import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {getSearchResult} from '../../actions/business_actions'

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      len: 0
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.searchtxt.length !== this.state.len) {
      this.setState({len: this.props.searchtxt.length});
      this.props.getSearchResult(this.props.searchtxt);
    }
  }

  render() {
    const businesses = this.props.businesses;
    const bizCat = ["Japanese", "Korean", "Delivery","Fast Food", "Salad"]
      let bizArr;
      if (this.props.searchtxt !== "") {
         bizArr = Object.values(businesses).map((biz, idx) => {
           if (biz.business_name.toLowerCase().includes(this.props.searchtxt.toLowerCase())) {
            return (
              <div key={idx} className="biz-dropdown">
                <li><Link to={`/businesses/${biz.id}`}>{biz.business_name}</Link></li>
              </div>
            )
          }
        })
      }

  else if (this.props.searchtxt === "") {

    bizArr = bizCat.map((biz, idx) => {
      return  (
        <div key={idx} className="biz-dropdown">
          <li><Link to="/businesses">{biz}</Link></li>
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
