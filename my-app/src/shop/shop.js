import React from 'react';
import './shop.css';

class Shop extends React.Component {

  render() {


    return (
      <div className="item shop">
        <div className="image image-shop"></div>
        <h1>{this.props.data.name}</h1>
        <h5>Turnover £{this.props.data.income}</h5>
      </div>
    );
  }

}

export default Shop;
