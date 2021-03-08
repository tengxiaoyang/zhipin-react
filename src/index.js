import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import App from './App';
import { counter, addGun, removeGun, addGunAsync } from './index.redux'

// 新建Store，并且以组件属性的形式传入组件里：
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
)) //compose可以组合函数

applyMiddleware(thunk)

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        store={store} 
        addGun={addGun}
        removeGun={removeGun}
        addGunAsync={addGunAsync}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render()

// 用subscribe订阅render函数，当状态变化时render会重新执行，重新渲染整个页面：
store.subscribe(render)

