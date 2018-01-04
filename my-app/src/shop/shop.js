import React from 'react';
import './shop.css';

class Shop extends React.Component {

  state = {
    budget: 100
  }

  upBudget(){
    this.setState({
      budget: this.state.budget + 100
    })
  }

  downBudget(){
    if (this.state.budget-100 < 0)
      return;
    this.setState({
      budget: this.state.budget - 100
    })
  }

  render() {
    return (
      <div className="item shop">
        <div className="image image-shop"></div>
        <div className="itemTitle">{this.props.data.name}</div>
        <div className="descbox">{this.props.data.description}</div>
        <div className="shopContainer">
          <div className="budgetButton" onClick={() => this.downBudget()}>-</div>
          <div className="shopInner">£{this.state.budget}</div>
          <div className="budgetButton" onClick={() => this.upBudget()}>+</div>
        </div>
        <div className="shopContainer">
          <div className="shopInner">LAST MONTH'S PROFIT</div>
        </div>
      </div>
    );
  }

}

export default Shop;
