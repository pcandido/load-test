import Queue from 'bull'
import express from 'express'
import os from 'os'

const app = express()
const queue = new Queue('calc-queue', 'redis://redis:6379')

app.get('/', (req, res) => {
  queue.add({ requestTime: new Date().getTime() })
  res.send(`queued by ${os.hostname()}`)
})

app.listen(8080, () => {
  console.log('available at http://localhost:8080')
})