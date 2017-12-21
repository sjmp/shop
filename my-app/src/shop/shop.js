import React from 'react';
import './shop.css';

class Shop extends React.Component {

  render() {


    return (
      <div className="item shop">
        <span className="image"></span>
        <h2>{this.props.data.name}</h2>
        <h5>Turnover £{this.props.data.income}</h5>
      </div>
    );
  }

}

export default Shop;
