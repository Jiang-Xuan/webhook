const http = require('http')
const { validGithubData } = require('./validGithubData')

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') { // 不是POST请求将不被允许
    res.statusCode = 405
    res.setHeader('Content-Type', 'text/html')
    res.end('Method not allowed.\n')
    return
  }

  const { headers } = req
  const userAgent = 'User-Agent'.toLowerCase() // 将头部小写化
  const xHubSignature = 'X-Hub-Signature'.toLowerCase() // 摘要头部小写化

  // 如果 user-agent 不存在或者 user-agent 的格式不符合 github 的 webhook 格式 或 没有摘要加密字符串
  // 就响应没有权限
  if (!headers[userAgent] || !headers[userAgent].startsWith('GitHub-Hookshot/') || !headers[xHubSignature]) {
    res.statusCode = 403
    res.setHeader('Content-Type', 'text/plain')
    res.end('403 Deny.\n')
  }

  let postReqBody = ''

  req.on('data', (fragment) => {
    postReqBody += fragment.toString()
  })

  req.on('end', () => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    // 可以终止请求的 请求的参数都是符合要求的.
    res.end(postReqBody)
    // 接下来要去做的是去处理关于本地部署的事情, 如果有错误应该记录到本地
    validGithubData(postReqBody, headers[xHubSignature])
  })
})

module.exports.server = server
