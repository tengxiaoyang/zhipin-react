import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Redirect,
  Switch
} from 'react-router-dom'

import App from './App';
import { counter } from './index.redux'
import Auth from './Auth'
import Dashboard from './Dashboard'

// 新建Store，并且以组件属性的形式传入组件里：
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
)) //compose可以组合函数

applyMiddleware(thunk)

function Erying() {
  return <h2>二营</h2>
}
function Qibinglian() {
  return <h2>骑兵连</h2>
}

class Test extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    // this.props.history.push('/')
    return <h2>测试组件 {this.props.match.params.location}</h2>
  }
}

// 页面设计：
// 登录
//   如果没有登录信息，统一跳转到login
// 页面 导航+显示+注销
//   一营
//   二营
//   骑兵连
// 全部用redux来管理，route+redux
ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Auth}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Redirect to='/dashboard'></Redirect>
      </Switch> {/*只渲染命中的第一个Route*/}
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
); //Provider组件在应用最外层，传入store，并且只需要用一次，Connect负责从外部获取组件需要的参数，Connect可以用装饰器的方式来写

