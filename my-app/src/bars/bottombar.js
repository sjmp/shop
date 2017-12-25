import React from 'react';
import './bar.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class BottomBar extends React.Component {

  render() {
    return (
        <div className="bottomBar bar">
          <h2 className="stats">BANK £{this.props.bank} - INCOME £{this.props.income}</h2>
        </div>
        );
      }

  }

  const mapStateToProps = state => ({
    bank: state.shop.bank,
    income: state.shop.income
  });

  export default withRouter(connect(mapStateToProps)(BottomBar));
