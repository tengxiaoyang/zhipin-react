const mongoose = require('mongoose')

// 链接mongo，使用react集合：
const DB_URL = 'mongodb://localhost:27017/zhipin-react-express'
mongoose.connect(DB_URL)

const models = {
  user: {
    'user': {type: String, 'require': true},
    'pwd': {type: String, 'require': true},
    'type': {'type': String, 'require': true},
    'avatar': {'type': String}, //头像
    'desc': {'type': String}, //简介
    'title': {'type': String}, //职位

    // 如果是boss，还有几个字段：
    'company': {'type': String},
    'money': {'type': String}
  },
  chat: {

  }
}


// 新建模型：i是文档名，值是new mongoose.Schema，里面的models[i]是字段
for (let i in models) {
  mongoose.model(i, new mongoose.Schema(models[i]))
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name) //直接用mongoose.model读取出模块名
  }
}