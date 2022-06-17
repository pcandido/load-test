import { MongoClient } from 'mongodb'
import express from 'express'
import os from 'os'

const app = express()
let collection

async function getCollection() {
  if (!collection) {
    const client = new MongoClient('mongodb://mongo:27017')
    await client.connect()
    const db = client.db('api')
    collection = db.collection('requests')
  }

  return collection
}

app.get('/', async (req, res) => {
  const coll = await getCollection()
  coll.insertOne({
    node: os.hostname(),
  })

  console.log(await coll.find({}).next())

  res.send(`calculated by ${os.hostname()}`)
})

app.listen(8080, () => {
  console.log('available at http://localhost:8080')
})