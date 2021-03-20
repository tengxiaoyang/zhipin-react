import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { login } from '../../redux/user.redux'

// 需要合并reducer：
@connect(
  state => state.user,
  { login }
)

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register() {
    console.log(this.props)
    this.props.history.push('/register')
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  handleLogin() {
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? 
          <Redirect to={this.props.redirectTo}></Redirect> : null
        }
        <Logo></Logo>
        {/* <h2>登录页</h2> */}
        <WingBlank>
          <List>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('user', v)}
              placeholder='输入用户名'
            >用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem
              onChange={v=>this.handleChange('pwd', v)}
              type='password'
              placeholder='输入密码'
            >密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
          <Button 
            onClick={this.handleLogin}
            type='primary'
          >登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login