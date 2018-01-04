import React from 'react';
import './shop.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as ShopActions from '../actions/shopactions.js'

class Plot extends React.Component {

  purchasePlot(data){
    if ((this.props.bank-data.purchaseCost)>0){
      this.props.dispatch(ShopActions.purchasePlot(data));
    }

  }

  render() {
    return (
      <div className="item plot">
        <div className="image image-plot"></div>
        <div onClick={() => this.purchasePlot(this.props.data)} className="button">Purchase for £{this.props.data.purchaseCost}</div>
        <div className="itemTitle">{this.props.data.name}</div>
        <div className="descbox">{this.props.data.description}</div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  bank: state.shop.bank
});

export default withRouter(connect(mapStateToProps)(Plot));
