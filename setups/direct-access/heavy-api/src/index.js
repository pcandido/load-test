import express from 'express'
import os from 'os'

const app = express()

app.get('/', (req, res) => {

  const start = new Date().getTime()
  for (let i = 0; i < 1000000000; i++) {
    //simulate complex processing
  }
  const end = new Date().getTime()

  const message = `calculated by ${os.hostname()} in ${end - start}ms`
  console.log(message)
  res.send(message)
})

app.listen(8080, () => {
  console.log('available at http://localhost:8080')
})