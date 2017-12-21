import React from 'react';
import './bar.css';
import Countdown from 'react-countdown-clock';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class TopBar extends React.Component {

  state = {
    countdown: this.returnCountdown()
  }

  onTimerEnd(){
    this.setState({
      countdown: this.returnCountdown()
    })
  }

  returnCountdown(){
    return (
      <Countdown key={Date.now()} seconds={5}
                     color="#000"
                     alpha={0.9}
                     size={70}
                     onComplete={() => this.onTimerEnd()}/>
    )
  }

  render() {
    return (
      <div className="topBar bar">
        <h1 className="title">I.J. PARTRIDGE & SONS</h1>
        { this.state.countdown }
      </div>
    );
  }

}

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(TopBar));
