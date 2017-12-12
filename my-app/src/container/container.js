import React from 'react';

import ShopSlider from '../slider/slider.js';
import Shop from '../shop/shop.js';

import './container.css';

class Container extends React.Component {

  render() {
    return (
      <div className="container">
        <ShopSlider />
      </div>
    );
  }

}

export default Container;
