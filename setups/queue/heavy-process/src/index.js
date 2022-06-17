import { MongoClient } from 'mongodb'
import Queue from 'bull'
import os from 'os'

const queue = new Queue('calc-queue', 'redis://redis:6379')
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

queue.process(async (job, done) => {
  const now = new Date().getTime()
  const { requestTime, apiNode } = job.data

  const coll = await getCollection()
  coll.insertOne({
    apiNode,
    processNode: os.hostname(),
    totalTime: now - requestTime
  })

  done()
})