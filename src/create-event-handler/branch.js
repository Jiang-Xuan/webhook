const path = require('path')
const { exec } = require('child_process')
const createBranchEventHandlerShell = path.resolve(__dirname, '../../scripts/create-event-handler/branch.sh')
const { sendMail } = require('../nodemailer/index')


const createBranchEventHandler = (repositoryName, ref, clone_url) => {
  const version = ref.match(/v(\d\.\d\.\d)/)[1]

  exec(`${createBranchEventHandlerShell} ${repositoryName} ${version} ${clone_url} ${process.cwd()}`, (err, stdout, stderr) => {
    if (err) {
      console.log(err)
      return
    }

    sendMail('645762213@qq.com', `部署项目 - ${repositoryName}:${version}`, `
      <h1>项目部署输出</h1>
      <h2>stdout</h2>
      <strong>${stdout}</strong>
      <br />
      <h2>stderr</h2>
      <strong>${stderr}</strong>
    `)
  })
}

module.exports.createBranchEventHandler = createBranchEventHandler
