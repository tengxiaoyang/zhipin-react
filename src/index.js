import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from './App';
import { counter } from './index.redux'

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

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>一营</Link>
        </li>
        <li>
          <Link to='/erying'>二营</Link>
        </li>
        <li>
          <Link to='/qibinglian'>骑兵连</Link>
        </li>
      </ul>
      <div>
        <Route path='/' exact component={App}></Route>
        <Route path='/erying' component={Erying}></Route>
        <Route path='/qibinglian' component={Qibinglian}></Route>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
); //Provider组件在应用最外层，传入store，并且只需要用一次，Connect负责从外部获取组件需要的参数，Connect可以用装饰器的方式来写

// 用subscribe订阅render函数，当状态变化时render会重新执行，重新渲染整个页面：
// store.subscribe(render)

