const fs = require('fs')
const path = require('path')

// 执行该命令的时候一定是在项目的根目录下面, 虽然该脚本并不在项目里面
// process.cwd() 打印出来的是  node 命令执行的目录
const cwd = process.cwd()

/*
 * 从该项目的根目录下面拿出来 该项目的 .ams.json 配置文件中的content字段, 里面存放着
 * 该项目是 frontend 项目还是 backend 项目
 */
const content = JSON.parse(fs.readFileSync(path.resolve(cwd, './.ams.json')))

// console.log 将输出到标准输出中, shell 脚本会获取到该数据
// 然后进行下一步的处理
console.log(content.type)
