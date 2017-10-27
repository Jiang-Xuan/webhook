const { server } = require('./src')
const { HOSTNAME, PORT } = require('./constants')

server.listen(PORT, HOSTNAME, () => {
  console.log(`server listen at ${HOSTNAME}:${PORT}`)
})
