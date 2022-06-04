import Queue from 'bull'
import express from 'express'
import os from 'os'
import { v4 as uuid } from 'uuid'

const app = express()
const queue = new Queue('calc-queue', 'redis://redis:6379')

app.get('/', (req, res) => {
  const requestId = uuid()
  queue.add({ requestId })

  const message = `queued ${requestId} by ${os.hostname()} at ${new Date().toISOString()}`
  console.log(message)
  res.send(message)
})

app.listen(8080, () => {
  console.log('available at http://localhost:8080')
})