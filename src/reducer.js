// 合并所有reducer并且返回：
import { combineReducers } from 'redux'
// import { counter } from './index.redux'
import { user } from './redux/user.redux'

export default combineReducers(
  {
    user,
    // auth
  }
)