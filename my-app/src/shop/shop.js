import React from 'react';
import './shop.css';

class Shop extends React.Component {

  render() {
    return (
      <div className="item shop">
        <div className="image image-shop"></div>
        <h1>{this.props.data.name}</h1>
        <div className="infobox">Turnover £{this.props.data.income}</div>
      </div>
    );
  }

}

export default Shop;
