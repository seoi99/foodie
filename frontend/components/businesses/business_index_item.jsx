import React from 'react';
import { Link } from 'react-router-dom';
const BusinessIndexItem = ({business, num}) => {

  const images = business.images.map((image, idx) => {
    return (
      <li key={image.id}> <img src={image.img_url} alt={business.business_name} /></li>
      );
    });
  return(
    <li className="index-li">
      <ul className="img-list">
        {images[0]}
      </ul>
      <div className="index-info">
        <div className="business-info">
          <div className="businessId">
            <p><Link to={`/businesses/${business.id}`}><span>{num + 1}. </span>{business.business_name}</Link></p>
            <div className="all-five-rates">
              <div className="avg-rating"></div>
              <div className="avg-rating"></div>
              <div className="avg-rating"></div>
              <div className="avg-rating"></div>
              <div className="avg-rating"></div>
              <span> # of reviews</span>
            </div>
            <div className="p-info-catg">
              <p>$- p info:</p>
              <p>category </p>
            </div>
          </div>
          <div className="business-content">
            <p>{business.phone_number}</p>
            <p>{business.full_address}</p>
          </div>
        </div>
        <p>
          reviews content
        </p>
      </div>
    </li>
  );
};

export default BusinessIndexItem;
