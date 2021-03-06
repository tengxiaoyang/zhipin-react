const { json } = require('body-parser')
const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

// 查询条件，使不显示密码：
const _filter = {'pwd': 0, '__v': 0}

Router.get('/list', function(req, res) {
  const { type } = req.query
  // User.remove({}, function(e, d) {
  //   return null
  // })
  User.find({ type }, function(err, doc) {
    return res.json({code: 0, data: doc})
  })
})

Router.post('/update', function(req, res) {
  const userid = req.cookies.userid
  if (!userid) {
    return json.dumps({code: 1})
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, function(err, doc) {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({code: 0, data})
  })

  const {user, pwd} = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, function(err, doc) { //第一个是查询条件，第二个是显示条件
    if (!doc) {
      return res.json({code: 1, msg: '用户名或密码错误，请重新输入'})
    }
    res.cookie('userid', doc._id)
    return res.json({code: 0, data: doc})
  })
})

Router.post('/login', function(req, res) {
  // console.log(req.body)
  const {user, pwd} = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, function(err, doc) { //第一个是查询条件，第二个是显示条件
    if (!doc) {
      return res.json({code: 1, msg: '用户名或密码错误，请重新输入'})
    }
    res.cookie('userid', doc._id)
    return res.json({code: 0, data: doc})
  })
})

Router.post('/register', function(req, res) {
  // console.log(req.body)
  const {user, pwd, type} = req.body
  User.findOne({user}, function(err, doc) {
    if (doc) {
      return res.json({code: 1, msg: '用户名已存在，请重新输入'})
    }

    // 用userModel.save方法可以拿到用户的id：
    const userModel = new User({user, type, pwd: md5Pwd(pwd)})
      userModel.save(function(e, d) {
        if (e) {
          return res.json({code: 1, msg: '服务器维护中，请耐心等待'})
        }

        // 获取数据：
        const {user, type, _id} = d
        res.cookie('userid', _id)

        return res.json({code: 0, data: {user, type, _id}})
      })

    // 用create无法拿到用户的id：
    // User.create({user, type, pwd: md5Pwd(pwd)}, function(e, d) {
    //   if (e) {
    //     return res.json({code: 1, msg: '服务器维护中，请耐心等待'})
    //   }
    //   return res.json({code: 0})
    // })
  })
})

Router.get('/info', function(req, res) {
  // 做cookie的校验，看用户有没有cookie
  const {userid} = req.cookies
  if (!userid) {
    return res.json({code: 1})
  }
  User.findOne({_id: userid}, _filter, function (err, doc) {
    if (err) {
      return res.json({code: 1, msg: '服务器维护中，请耐心等待'})
    }
    if (doc) {
      return res.json({code: 0, data: doc})
    }
  })
  // User.findById({userid})
})

// 密码加盐:
function md5Pwd(pwd) {
  const salt = 't`e!n#g$x%i^a&o*y(a)n-g=T~X_Y+1[9]9{7}'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router