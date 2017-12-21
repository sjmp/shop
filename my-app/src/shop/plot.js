import React from 'react';
import './shop.css';

class Plot extends React.Component {

  purchasePlot(){
    console.log("TEST");
  }

  render() {
    return (
      <div className="item plot">
        <div className="image image-plot"></div>
        <h1>{this.props.data.name}</h1>
        <div onClick={() => this.purchasePlot()} className="button">Purchase for £{this.props.data.purchaseCost}</div>
      </div>
    );
  }

}

export default Plot;
