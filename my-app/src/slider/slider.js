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

    return (
      <Slider {...settings}>
        <div><Shop /></div>
        <div><Shop /></div>
        <div><Shop /></div>
        <div><Shop /></div>
        <div><Shop /></div>
      </Slider>
    );

  }
}


export default ShopSlider;
