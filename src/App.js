import React from 'react'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    // 通过属性获取store以及addGun、removeGun这两个操作函数，再通过store获取初始状态和dispatch方法：
    const store = this.props.store
    const num = store.getState()
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync =this.props.addGunAsync
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={() => store.dispatch(addGun())}>申请武器</button>
        <button onClick={() => store.dispatch(removeGun())}>上交武器</button>
        <button onClick={() => store.dispatch(addGunAsync())}>拖两天再给</button>
      </div>
    )
  }
}

export default App