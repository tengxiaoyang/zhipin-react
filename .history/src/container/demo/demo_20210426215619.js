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
                      onChange={this._self.checkThis.bind(_self, item)} 
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
  
  checkThis(item){
    item.checked = !item.checked;
    if(item.name==='全选'){ // 如果点击的是全选，就把所有的选中或全部取消勾选
        if(item.checked){
            this.state.checklist.forEach(i=>{
                i.checked = true;
            })
        }else{
            this.state.checklist.forEach(i=>{
                i.checked = false;
            })
        }
        
    }

  　// 如果全选之后，取消勾选其中的一个或多个，则会把全选也取消勾选掉
    let result = this.state.checklist.some(j=>{
        if(!j.checked){
            return true;
        }
    })

    if(result){
        this.state.checklist[0].checked = false;
    }
    
    
    let len = this.state.checklist.length
    let ev = true;
    for(let a=1;a<len;a++){ // 遍历，如果列表里除了第一个之外，其他的都勾选的话，就把全选按钮也勾选掉
        if(!this.state.checklist[a].checked){
            ev = false;
        }
    }
    if(ev){
        this.state.checklist[0].checked = true;
    }
    this.setState({ // 每点击一次更新状态
      checklist:this.state.checklist
    })
  }
}
 
export default Demo;