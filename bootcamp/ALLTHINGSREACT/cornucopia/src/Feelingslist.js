import React, {Component} from 'react';
import "./index.css";

class FeelingsList extends Component {
  render() {
    const theStyles = {fontSize: "24px"};
    console.log({theStyles});
    return (
      <div>
        <ul style={theStyles}>
          <li>Happy</li>
          <li>Sad</li>
          <li>Wanted to accomplish somthing</li>
        </ul>
      </div>
    );
  }
};

export default FeelingsList;