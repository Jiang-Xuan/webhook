const fs = require('fs')

module.exports.HOSTNAME = process.env.NODE_ENV === 'dev' ? '127.0.0.1' : '172.104.118.145'
module.exports.PORT = 3000
const WEBHOOKCONFIGFILE =  process.env.NODE_ENV === 'dev' ? '/Users/jiangxuan/loveTech/auto-manage-system/webhook/webhook/config.json' : ''

module.exports.GETWEBHOOKCONFIG = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(WEBHOOKCONFIGFILE, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }

      try {
        resolve(JSON.parse(data))
      } catch (err) {
        reject('JSON parse webhook config file filed.')
      }
    })
  })
}
