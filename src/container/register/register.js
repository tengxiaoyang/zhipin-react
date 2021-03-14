import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Button, WingBlank, Whitespace } from 'antd-mobile'

class Register extends React.Component {

  render() {
    return (
      <div>
        <Logo></Logo>
        <h2>注册页</h2>
        <WingBlank>
          <Button type='primary'>登录</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register