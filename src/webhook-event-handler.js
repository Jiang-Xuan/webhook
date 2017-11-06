const { createEventHandler } = require('./create-event-handler/index')

const webhookEventHandler = (eventType, postReqBody) => {
  const { created } = postReqBody
  switch (`${eventType}${created ? '-true' : ''}`) {
    case 'ping': {
      console.log('Oh, this is a ping test request, wish you happiness.:)')
      return
    }
    case 'create':
    case 'create-true': {
      createEventHandler(postReqBody)
      return
    }
    case 'delete': {
      deleteEventHandler(postReqBody)
      return
    }
  }
}

module.exports.webhookEventHandler = webhookEventHandler
