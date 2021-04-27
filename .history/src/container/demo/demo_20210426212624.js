import React, { Component } from 'react';
 
class Demo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      checklist:[
        {name:'全选',checked:false},
        {name:'张三',checked:false},
        {name:'李四',checked:false},
        {name:'王五',checked:false},
      ]
    };
  }
  render() { 
    return (
      <div>
        Demo
      </div>
    );
  }
}
 
export default Demo;