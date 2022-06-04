import express from 'express'

const app = express()

const computationTime = 3000

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('calculated!')
  }, computationTime)
})

app.listen(8080, () => {
  console.log('available at http://localhost:8080')
})