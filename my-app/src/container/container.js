import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ShopSlider from '../slider/slider.js';

import * as ShopActions from '../actions/shopactions.js'

import './container.css';

class Container extends React.Component {

  componentWillMount = () =>{
    this.props.dispatch(ShopActions.testAction());

  }

  render() {
    return (
      <div className="container" >
        <ShopSlider shops={this.props.shops}/>
      </div>
    );
  }

}

const mapStateToProps = state => ({
    shops: state.shop.shops
});

export default withRouter(connect(mapStateToProps)(Container));
