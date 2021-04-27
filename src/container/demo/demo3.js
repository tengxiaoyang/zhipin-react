import React, { Component } from 'react';
import './demo.css';
 
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
      arr: [],
      options: [
        { value: "grapefruit", label: "葡萄柚" },
        { value: "lime", label: "酸橙" },
        { value: "coconut", label: "椰子" },
        { value: "mango", label: "芒果" }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let idx = this.state.arr.findIndex(item=>{
      return item===e.target.value
    })
    if(idx>=0){
      this.state.arr.splice(idx,1);
    }else{
      this.state.arr.push(e.target.value);
    }
    let arr=this.state.arr;
    this.setState({arr});
  }

  render() {
    return (
      <div>
        <select multiple={true} value={this.state.arr} onClick={this.handleChange}>
          {this.state.options.map((item,index) => {
            return <option value={item.value} key={index}>{item.label}</option>;
          })}
        </select>
      </div>
    );
  }
}
 
export default Demo;