import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, Button, WingBlank, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { register } from '../../redux/user.redux'

// 需要合并reducer：
@connect(
  state => state.user,
  { register }
)

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      repeatuser: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius' //或者boss
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  handleRegister() {
    // console.log(this.state)
    this.props.register(this.state)
  }
  render() {
    // const Item = List.Item
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? 
          <Redirect to={this.props.redirectTo}></Redirect> : null
        }
        <Logo></Logo>
        {/* <h2>注册页</h2> */}
        <WingBlank>
          <List>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('user', v)}
              placeholder='输入用户名'
            >用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('repeatuser', v)}
              placeholder='再次输入用户名'
            >确认用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('pwd', v)}
              type='password'
              placeholder='输入密码'
            >密码</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('repeatpwd', v)}
              type='password'
              placeholder='再次输入密码'
            >确认密码</InputItem>
            <WhiteSpace></WhiteSpace>
            <RadioItem 
              checked={this.state.type==='genius'}
              onChange={()=>this.handleChange('type', 'genius')}
            >我是牛人</RadioItem>
            <WhiteSpace></WhiteSpace>
            <RadioItem 
              checked={this.state.type==='boss'}
              onChange={()=>this.handleChange('type', 'boss')}
            >我是BOSS</RadioItem>
          </List>
          <WhiteSpace></WhiteSpace>
          {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
          <Button 
            onClick={this.handleRegister} 
            type='primary'
          >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register