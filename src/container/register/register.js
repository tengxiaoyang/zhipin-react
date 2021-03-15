import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, Button, WingBlank, WhiteSpace } from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
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
    console.log(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <h2>注册页</h2>
        <WingBlank>
          <List>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('user', v)}
            >用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('pwd', v)}
            >密码</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('repeatpwd', v)}
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
          <Button onClick={this.handleRegister} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register