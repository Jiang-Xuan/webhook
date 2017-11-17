const { createEventHandler } = require('./create-event-handler/index')

const webhookEventHandler = (eventType, postReqBody) => {
  const { created, deleted } = postReqBody
  const action = created ? `${eventType}-create-true` :
    deleted ? `${eventType}-delete-true` :
    ''

  switch (action) {
    case 'ping': {
      console.log('Oh, this is a ping test request, wish you happiness.:)')
      return
    }
    case 'create':
    case 'push-create-true': {
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
