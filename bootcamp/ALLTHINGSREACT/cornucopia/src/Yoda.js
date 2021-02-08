import React, { Component } from 'react';
import './index.css';
import FeelingsList from './Feelingslist';


class Yoda extends Component {
  render() {
    const theStyles = {fontSize: "24px"};
    console.log(theStyles);
    return (<div className="theImage">
            <h1 className="name">Life</h1>
            <img src="https://miro.medium.com/max/1050/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></img>
            <h3> How does he feel?</h3>
            <FeelingsList />
           </div>

     );
  }
};

export default Yoda;