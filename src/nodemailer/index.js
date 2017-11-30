const nodemailer = require('nodemailer')
const { GETWEBHOOKCONFIG } = require('../../constants/index')

async function createTransporter() {
  const webhookConfigJSON = await GETWEBHOOKCONFIG()

  const { nodeMailer: { user, pass } } = webhookConfigJSON

  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass
    }
  })

  const mailOptions = {
    from: '"ams" <645762213@qq.com>',
    to: '',
    subject: '',
    html: ''
  }

  return {
    transporter,
    mailOptions
  }
}


/*
 * to string 邮件收件人
 * subject string 邮件主题
 * html string 邮件的HTML内容
 */
module.exports.sendMail = async (to, subject, html) => {
  const { transporter, mailOptions } = await createTransporter()

  const result = new Promise((resolve, reject) => {
    transporter.sendMail(Object.assign({}, mailOptions, {
      to,
      subject,
      html
    }), (err, info) => {
      if (err) {
        resolve(new Error(err))
      }

      resolve(info)
    })
  })

  return (await result)
}
