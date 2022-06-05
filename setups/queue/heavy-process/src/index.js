import Queue from 'bull'
import os from 'os'

const queue = new Queue('calc-queue', 'redis://redis:6379')

queue.process((job, done) => {
  const start = new Date().getTime()
  const { start: requestStart } = job.data
  for (let i = 0; i < 1000000000; i++) {
    //simulate complex processing
  }
  const end = new Date().getTime()

  console.log(`processed by ${os.hostname()} in ${end - start}ms. total time = ${end - requestStart}ms`)
  done()
})