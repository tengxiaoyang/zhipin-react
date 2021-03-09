import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App';
import { counter } from './index.redux'

// 新建Store，并且以组件属性的形式传入组件里：
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
)) //compose可以组合函数

applyMiddleware(thunk)

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
); //Provider组件在应用最外层，传入store，并且只需要用一次，Connect负责从外部获取组件需要的参数，Connect可以用装饰器的方式来写

// 用subscribe订阅render函数，当状态变化时render会重新执行，重新渲染整个页面：
// store.subscribe(render)

