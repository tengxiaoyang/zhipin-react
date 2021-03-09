import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    // 通过属性获取store以及addGun、removeGun这两个操作函数，再通过store获取初始状态和dispatch方法：
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {num: state} //把状态放到属性里
}
const actionCreators = { addGun, removeGun, addGunAsync } //把方法传入

App = connect(mapStateToProps, actionCreators)(App) //先执行connect，再把App当做参数传入，这就是一个装饰器
export default App