const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')

// 新建app：
const app = express()

// 解析cookie：
app.use(cookieParser())

// 解析post过来的json：
app.use(bodyParser.json())

// 使用app.use开启一个中间件：
app.use('/user', userRouter) //当前缀是/user时，子路由由userRouter定义

app.listen(9093, function() {
	console.log('Node app start at port 9093')
})

// 尽量保证入口文件的精简