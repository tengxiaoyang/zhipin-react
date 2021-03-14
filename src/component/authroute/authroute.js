import React, { Component } from 'react';
import axios from 'axios'
 
class AuthRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
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
    return (
      <div>
        <h1>判断跳转的地方</h1>
      </div>
    );
  }
}
 
export default AuthRoute;