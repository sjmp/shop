import React from 'react';
import './bar.css';
  import Countdown from 'react-countdown-clock';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as ShopActions from '../actions/shopactions.js'

class TopBar extends React.Component {

  state = {
    seconds: 10,
    paused: false
  }

  onTimerEnd(){
    console.log("END");
    this.setState({
      seconds: 10,
      paused: false
    })

    this.props.dispatch(ShopActions.revenueCount());
  }

  pauseClock(){
    this.setState({
      paused: !this.state.paused
    })
  }

  retire(){
    this.props.dispatch(ShopActions.restartGame());
    this.props.dispatch(ShopActions.testAction());
  }

  render() {
    return (
      <div className="topBar bar">
        <h1 className="title">I.J. PARTRIDGE & SONS</h1>
        <Countdown key={Date.now()}
                      seconds={this.state.seconds}
                      color="#e1ce7a"
                      alpha={0.9}
                      size={60}
                      onComplete={() => this.onTimerEnd()}
                      paused={this.state.paused}
                      onClick={() => this.pauseClock()}
                      pausedText= {"▐▐ "}/>
        <div onClick={() => this.retire()} className="retire">
          <p className="retireText">RETIRE</p>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(TopBar));
