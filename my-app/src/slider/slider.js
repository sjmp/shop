import React from 'react';
import Slider from 'react-slick';

import Shop from '../shop/shop.js';

import './slider.css';

class ShopSlider extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
      centerMode: true,
      slidesToShow: 3,
      swipeToSlide: true,
      responsive: [
        {breakpoint: 1000, settings: { slidesToShow: 1}}

      ]
    };

    const shops = this.props.shops ? this.props.shops.shops.map( (item, i) => <div key={i}><Shop data={ item }/></div> ) : null;

    return (
      <Slider {...settings}>
        {shops}
      </Slider>
    );

  }
}


export default ShopSlider;
