import axios from 'axios'

// 定义action：
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

// 定义reducer：
export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg: '', redirectTo: '', isAuth: true, ...action.payload}
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
    default:
      return state
  }
  return state
} //reducer真正处理页面逻辑

// 用action creator生成action：

function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data }
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}


// 获取异步数据：

export function register({user, pwd, repeatpwd, type}) {
  if (!user || !pwd || !type) {
    return errorMsg('请输入用户名和密码')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('两次密码输入不一致')
  }
  if (pwd.length < 8 || repeatpwd.length < 8) {
    return errorMsg('密码不得小于八位')
  }
  // 要返回一个异步对象：
  // 用dispatch来通知数据修改：
  return dispatch => {
    axios.post('/user/register', {user, pwd, type})
      .then(res => {
        if (res.state === 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, type}))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}