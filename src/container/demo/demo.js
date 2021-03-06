import React, { Component } from 'react';
import './demo.css';
 
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklist:[
        {name: '全选', checked: false},
        {name: '111111111', checked: false},
        {name: '222222222', checked: false},
        {name: '333333333', checked: false},
        {name: '444444444', checked: false},
        {name: '555555555', checked: false},
        {name: '666666666', checked: false},
        {name: '777777777', checked: false},
        {name: '888888888', checked: false},
        {name: '999999999', checked: false}
      ]
    }
  }
  
  checkThis(item) {
    item.checked = !item.checked;
    if (item.name === '全选') {
      if (item.checked) {
          this.state.checklist.forEach(i => {
              i.checked = true;
          })
      } else {
          this.state.checklist.forEach(i => {
              i.checked = false;
          })
      }
    }

    let result = this.state.checklist.some(j => {
        if (!j.checked) {
            return true;
        }
    })

    if (result) {
        this.state.checklist[0].checked = false;
    }
    
    let len = this.state.checklist.length
    let ev = true;
    for (let i = 1; i < len; ++ i) {
        if (!this.state.checklist[i].checked) {
            ev = false;
        }
    }
    if (ev) {
        this.state.checklist[0].checked = true;
    }
    this.setState({
      checklist:this.state.checklist
    })
  }
  
  render() { 
    return (
      <div className="Demo">
        {
          this.state.checklist.length
          ?
            this.state.checklist.map((item, index) => {
              return (
                <div key={index}>
                  <label>
                    <input 
                      type="checkbox" 
                      onChange={() => this.checkThis(item)} 
                      checked={item.checked}
                    />
                    <span>{item.name}</span>
                  </label>
                </div>
              )
            })
          :
            ''
        }
      </div>
    )
  }

}
 
export default Demo;