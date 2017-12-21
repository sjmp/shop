import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Shop from '../shop/shop.js';
import Plot from '../shop/plot.js';

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


    const shops = this.props.shops.shops ?
      this.props.shops.shops.map( (item, i) =>
      <div key={i}>
        {this.props.userShops.includes(item.id) ?
          <Shop data={ item }/>
          : <Plot data={item}/> }
      </div> )
      : null;

    return (
      <Slider {...settings}>
        {shops}
      </Slider>
    );

  }
}




const mapStateToProps = state => ({
  userShops: state.shop.user.ownedShopIds
});

export default withRouter(connect(mapStateToProps)(ShopSlider));
