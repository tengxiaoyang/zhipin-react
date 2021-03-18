import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter //非路由组件用@withRouter包裹就可以看到history对象
class AuthRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const publicList = ['/login', '/register']
    console.log(this.props)
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) !== -1) {
      return null
    }
    // 获取用户信息：
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            // 有登录信息
          } else {
            this.props.history.push('/login')
            // console.log(this.props.history)
          }
          console.log(res.data)
        }
      })
    // 获取用户信息：
    // 是否登录
    // 现在的url地址，如果是login是不需要跳转的

    // 用户的type是BOSS还是牛人
    // 用户是否完善信息（头像，简介）
  }
  render() { 
    return null
  }
}
 
export default AuthRoute;