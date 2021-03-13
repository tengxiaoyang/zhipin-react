const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

// 定义reducer：
export function auth(
  state={isAuth=false, user: '李云龙'}, action
  ) {
  Switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false}
    default:
      return state
  }
}

// 定义action：
export function login() {
  return {type: LOGIN}
}
export function logout() {
  return {type: LOGOUT}
}