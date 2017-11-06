const { createBranchEventHandler } = require('./branch')
const { createTagEventHandler } = require('./tag')
const createEventHandler = (postReqBody) => {
  debugger
  const { ref, repository: { name } } = postReqBody
  const ref_type = ~ref.indexOf('tags') ? 'tag' : 'branch'

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
