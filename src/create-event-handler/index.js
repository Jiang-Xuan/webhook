const { createBranchEventHandler } = require('./branch')
const { createTagEventHandler } = require('./tag')

const createEventHandler = (postReqBody) => {
  const { ref, repository: { name, clone_url } } = postReqBody
  const ref_type = ~ref.indexOf('tags') ? 'tag' : 'branch'

  switch (ref_type) {
    case 'branch': {
      createBranchEventHandler(name, ref, clone_url)
      return
    }
    case 'tag': {
      createTagEventHandler(name, ref, clone_url)
      return
    }
  }
}

module.exports.createEventHandler = createEventHandler
