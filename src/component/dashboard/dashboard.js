import React, { Component } from 'react';
 
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    return (
      <h2>header</h2>
      // <Route path='/boss' componenet={Boss}></Route>
      // <Route path='/genius' componenet={Genius}></Route>
      <h2>footer</h2>
    );
  }
}
 
export default Dashboard;