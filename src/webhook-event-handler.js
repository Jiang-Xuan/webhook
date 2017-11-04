const createEventHandler = require('./create-event-handler/index')

const webhookEventHandler = (eventType, postReqBody) => {
  switch (eventType) {
    case 'ping': {
      console.log('Oh, this is a ping test request, wish you happiness.:)')
      return
    }
    case 'create': {
      createEventHandler(postReqBody)
      return
    }
  }
}

module.exports.webhookEventHandler = webhookEventHandler
