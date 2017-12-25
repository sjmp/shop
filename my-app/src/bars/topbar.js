import React from 'react';
import './bar.css';
  import Countdown from 'react-countdown-clock';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as ShopActions from '../actions/shopactions.js'

class TopBar extends React.Component {

  state = {
    seconds: 1
  }

  onTimerEnd(){
    this.setState({
      seconds: 10
    })

    this.props.dispatch(ShopActions.revenueCount());
  }

  render() {
    return (
      <div className="topBar bar">
        <h1 className="title">I.J. PARTRIDGE & SONS</h1>
        <Countdown key={Date.now()}
                      seconds={this.state.seconds}
                      color="#c5b792"
                      alpha={0.9}
                      size={67}
                      onComplete={() => this.onTimerEnd()}/>
      </div>
    );
  }

}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(TopBar));
