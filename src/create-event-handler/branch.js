const path = require('path')
const { exec } = require('child_process')
const createBranchEventHandlerShell = path.resolve(__dirname, '../../scripts/create-event-handler/branch.sh')


const createBranchEventHandler = (repositoryName, ref) => {
  const version = ref.match(/v(\d\.\d\.\d)/)[1]

  exec(`${createBranchEventHandlerShell} ${repositoryName} ${version}`, (err, stdout, stderr) => {
    debugger
  })
}

module.exports.createBranchEventHandler = createBranchEventHandler
