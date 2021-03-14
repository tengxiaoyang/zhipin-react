import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Button, WingBlank, Whitespace } from 'antd-mobile'

class Login extends React.Component {

  render() {
    return (
      <div>
        <Logo></Logo>
        <h2>登录页</h2>
        <WingBlank>
          <Button type='primary'>登录</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login