import React from 'react';

class GoogleMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.751116, lng: -73.983708 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
        <div className="map-container" ref={ map => this.mapNode = map }>
        </div>
    )
  }
}

export default GoogleMap
