import express from 'express'
import os from 'os'

const app = express()

app.get('/', (req, res) => {

  for (let i = 0; i < 1000000000; i++) {
    //simulate complex processing
  }

  console.log(`calculated by ${os.hostname()}!`)
  res.send(`calculated by ${os.hostname()}!`)
})

app.listen(8080, () => {
  console.log('available at http://localhost:8080')
})