import React from 'react';
import './bottombar.css';

class BottomBar extends React.Component {

  render() {
    return (
      <div className="bottomBar">
        <p>PROFIT: £500 PER DAY</p>
        <p>£2500 GROSS - £2000 NET</p>
        <p>MONEY IN BANK: £5300</p>
      </div>
    );
  }

}

export default BottomBar;
