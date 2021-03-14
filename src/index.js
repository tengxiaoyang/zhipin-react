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

import reducer from './reducer' //合并所有reducer
import './config'
// import Auth from './Auth'
// import Dashboard from './Dashboard'

// 新建Store，并且以组件属性的形式传入组件里：
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
)) //compose可以组合函数

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
    
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
); //Provider组件在应用最外层，传入store，并且只需要用一次，Connect负责从外部获取组件需要的参数，Connect可以用装饰器的方式来写

