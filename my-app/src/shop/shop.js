import React from 'react';
import './shop.css';

class Shop extends React.Component {

  render() {
    // console.log(this.props.data);

    return (
      <div className="shop">
        <h2>{this.props.data.name}</h2>
        <h4>Carl <i>Change manager?</i></h4>
        <h5>Turnover £500</h5>
        <p>Sawdust floors</p>
        <p>Dairy</p>
        <p>Bacon & Hams</p>
        <p>Poultry & Game</p>
      </div>
    );
  }

}

export default Shop;
