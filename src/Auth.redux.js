// 定义action：
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initState = {
  isAuth: false, 
  user: '李云龙',
  age: 20
}

// 定义reducer：
export function auth(state = initState, action) {
  // console.log(state)
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false}
    default:
      return state
  }
} //reducer真正处理页面逻辑

// 用action creator生成action：

// 获取异步数据：

export function login() {
  return {type: LOGIN}
}
export function logout() {
  return {type: LOGOUT}
}