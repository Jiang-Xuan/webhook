import http from 'http'
import { HOSTNAME, PORT } from '../constants/const.mjs'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
})

export default server
