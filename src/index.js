import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { 
  BrowserRouter, 
  Route, 
  Redirect,
  Switch
} from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import BossInfo from "./container/bossinfo/bossinfo";
import GeniusInfo from "./container/geniusinfo/geniusinfo";

import reducer from './reducer' //合并所有reducer
import './config'
import './index.css'
// import Dashboard from './Dashboard'

// 新建Store，并且以组件属性的形式传入组件里：
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
)) //compose可以组合函数
function Boss() {
  return <h2>Boss页面</h2>
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path='/bossinfo' component={BossInfo}></Route>
        <Route path='/geniusinfo' component={GeniusInfo}></Route>
        <Route path='/boss' component={Boss}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        {/* <Redirect to='/login'></Redirect> 如果都没命中就跳转到login */}
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
); //Provider组件在应用最外层，传入store，并且只需要用一次，Connect负责从外部获取组件需要的参数，Connect可以用装饰器的方式来写

