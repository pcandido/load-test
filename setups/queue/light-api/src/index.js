import Queue from 'bull'
import express from 'express'
import os from 'os'

const app = express()
const queue = new Queue('calc-queue', 'redis://redis:6379')

app.get('/', (req, res) => {
  const start = new Date().getTime()
  queue.add({ start })
  const end = new Date().getTime()

  const message = `queued by ${os.hostname()} in ${end - start}ms`
  console.log(message)
  res.send(message)
})

app.listen(8080, () => {
  console.log('available at http://localhost:8080')
})