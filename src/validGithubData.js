const crypto = require('crypto')
const { GETWEBHOOKCONFIG } = require('../constants')

const validGithubData = async (data, xHubSignature) => {
  const webhookConfigJSON = await GETWEBHOOKCONFIG()
  let webhooksecret = ''

  if (!webhookConfigJSON.webhooksecret) {
    console.warn('webhooksecret 不存在, 默认将为空字符串')
  } else {
    webhooksecret = webhookConfigJSON.webhooksecret
  }

  // 计算摘要
  const signature = crypto.createHmac('sha1', webhooksecret)
                          .update(data)
                          .digest('hex')

  if (`sha1=${signature}` !== xHubSignature) {
    console.warn('加密字符串不匹配, 丢弃该请求')
    return
  }

  console.log('请求校验成功, 需要处理该请求')

}

module.exports.validGithubData = validGithubData
