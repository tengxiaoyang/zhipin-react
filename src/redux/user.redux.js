import axios from 'axios'
import { getRedirectPath } from "../util";

// 定义action：
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'

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
    case LOGIN_SUCCESS:
      return {
        ...state, 
        msg: '', 
        redirectTo: getRedirectPath(action.payload), 
        isAuth: true, 
        ...action.payload
      }
    case REGISTER_SUCCESS:
      return {
        ...state, 
        msg: '', 
        redirectTo: getRedirectPath(action.payload), 
        isAuth: true, 
        ...action.payload
      }
    case ERROR_MSG:
      return {
        ...state, 
        isAuth: false, 
        msg: action.msg
      }
    case LOAD_DATA:
      return {
        ...state, 
        ...action.payload
      }
    default:
      return state
  }
  return state
} //reducer真正处理页面逻辑

// 用action creator生成action：

function loginSuccess(data) {
  return { type: LOGIN_SUCCESS, payload: data }
}

function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data }
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

export function userinfo () {
  // 获取用户信息：
  // return dispatch => {
  //   axios.get('/user/info')
  //     .then(res => {
  //       if (res.status == 200) {
  //         if (res.data.code === 0) {
  //           // 有登录信息
  //         } else {
  //           this.props.loadData(res.data.data)
  //           this.props.history.push('/login')
  //           // console.log(this.props.history)
  //         }
  //         // console.log(res.data)
  //       }
  //     })
  // }
  // 获取用户信息：
  // 是否登录
  // 现在的url地址，如果是login是不需要跳转的

  // 用户的type是BOSS还是牛人
  // 用户是否完善信息（头像，简介）
}

export function loadData (userinfo) {
  return {
    type: LOAD_DATA,
    payload: userinfo
  }
}

// 获取异步数据：

export function login ({user, pwd}) {
  if (!user || !pwd) {
    return errorMsg('请输入用户名和密码')
  }
  if (pwd.length < 8) {
    return errorMsg('密码不得小于八位')
  }
  if (pwd.length > 16) {
    return errorMsg('密码不得大于十六位')
  }
  // 要返回一个异步对象：
  // 用dispatch来通知数据修改：
  return dispatch => {
    axios.post('/user/login', {user, pwd})
      .then(res => {
        if (res.status == 200 && res.data.code === 0) {
          dispatch(loginSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function register({user, repeatuser, pwd, repeatpwd, type}) {
  if (!user || !pwd || !type) {
    return errorMsg('请输入用户名和密码')
  }
  if (user !== repeatuser) {
    return errorMsg('两次用户名输入不一致')
  }
  if (pwd !== repeatpwd) {
    return errorMsg('两次密码输入不一致')
  }
  if (pwd.length < 8 || repeatpwd.length < 8) {
    return errorMsg('密码不得小于八位')
  }
  if (pwd.length > 16 || repeatpwd.length > 16) {
    return errorMsg('密码不得大于十六位')
  }
  // 要返回一个异步对象：
  // 用dispatch来通知数据修改：
  return dispatch => {
    axios.post('/user/register', {user, pwd, type})
      .then(res => {
        if (res.status == 200 && res.data.code === 0) {
          dispatch(registerSuccess({user, pwd, type}))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}