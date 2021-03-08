import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';

// 新建Store
// 通过reducer建立
// 根据老的状态和action生成新的state

function counter(state = 0, action) {
  switch (action.type) {
    case '加机关枪':
      return state + 1
    case '减机关枪':
      return state - 1
    default:
      return 10
  }
}

// 新建Store：
const store = createStore(counter)

const init = store.getState()
console.log(init)

// 定义事件：
function listener() {
  const current = store.getState()
  console.log(`现在有机枪${current}把`)
}
store.subscribe(listener)

// 派发事件，传递action：
store.dispatch({type: '加机关枪'})
// console.log(store.getState())
store.dispatch({type: '加机关枪'})
// console.log(store.getState())
store.dispatch({type: '减机关枪'})
// console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
