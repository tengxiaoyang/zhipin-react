import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, Button, WingBlank, WhiteSpace } from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'genius'
    }
    this.register = this.register.bind(this)
  }
  register() {
    console.log(this.props)
    this.props.history.push('/register')
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
            <InputItem>用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem>密码</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem>确认密码</InputItem>
            <WhiteSpace></WhiteSpace>
            <RadioItem checked={this.state.type=='genius'}>我是牛人</RadioItem>
            <WhiteSpace></WhiteSpace>
            <RadioItem checked={this.state.type=='boss'}>我是BOSS</RadioItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register