import React, { Component } from 'react';
import './demo.css';
 
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
        {
            this.state.checklist.length?
            this.state.checklist.map((item, index) => {
                return (
                  <div key={index}>
                  <label>
                    <input 
                      type="checkbox" 
                      onChange={_self.checkThis.bind(_self,item)} 
                      checked={item.checked}
                    />{item.name}
                  </label>
                  </div>
                )
            })
            :''
        }
      </div>
    );
  }
}
 
export default Demo;