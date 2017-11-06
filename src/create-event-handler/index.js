const { createBranchEventHandler } = require('./branch')
const { createTagEventHandler } = require('./tag')
const createEventHandler = (postReqBody) => {
  debugger
  const { ref_type, ref, repository: { name } } = postReqBody

  switch (ref_type) {
    case 'branch': {
      createBranchEventHandler(name, ref)
      return
    }
    case 'tag': {
      createTagEventHandler(name, ref)
    }
  }
}

module.exports.createEventHandler = createEventHandler
