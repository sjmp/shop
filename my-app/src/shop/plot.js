import React from 'react';
import './shop.css';

class Plot extends React.Component {

  render() {
    return (
      <div className="item plot">
        <h2>{this.props.data.name}</h2>

      </div>
    );
  }

}

export default Plot;
