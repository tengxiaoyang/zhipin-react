const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res) {
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

Router.post('/register', function(req, res) {
  console.log(req.body)
  const {user, pwd, type} = req.body
  User.findOne({user}, function(err, doc) {
    if (doc) {
      return res.json({code: 1, msg: '用户名已存在，请重新输入'})
    }
    User.create({user, pwd, type}, function(err, doc) {
      if (err) {
        return res.json({code: 1, msg: '服务器维护中，请耐心等待'})
        return res.json({code: 0})
      }
    })
  })

  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})


Router.get('/info', function(req, res) {
  // 做cookie的校验，看用户有没有cookie
  return res.json({code: 1})
})

module.exports = Router