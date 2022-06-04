import express from 'express'
import os from 'os'

const app = express()

const computationTime = 3000

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send(`calculated by ${os.hostname()}!`)
  }, computationTime)
})

app.listen(8080, () => {
  console.log('available at http://localhost:8080')
})