import Queue from 'bull'
import os from 'os'

const queue = new Queue('calc-queue', 'redis://redis:6379')

queue.process((job, done) => {
  const { requestId } = job.data

  for (let i = 0; i < 1000000000; i++) {
    //simulate complex processing
  }

  console.log(`processed ${requestId} by ${os.hostname()} at ${new Date().toISOString()}`)
  done()
})