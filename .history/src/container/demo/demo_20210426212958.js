import React, { Component } from 'react';
impof
 
class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checklist:[
        {name: '全选', checked: false},
        {name: '1', checked: false},
        {name: '2', checked: false},
        {name: '3', checked: false},
        {name: '4', checked: false},
        {name: '5', checked: false},
        {name: '6', checked: false},
        {name: '7', checked: false},
        {name: '8', checked: false},
        {name: '9', checked: false}
      ]
    };
  }
  render() { 
    return (
      <div className="Demo">
        Demo
      </div>
    );
  }
}
 
export default Demo;