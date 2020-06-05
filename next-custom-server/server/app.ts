import express from 'express'
import errorhandler from 'errorhandler'
import next from 'next'

import apiRouter from './routers/api'
import dashboardRouter from './routers/dashboard'
import logger from './logger'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))

  server.use('/api', apiRouter)
  server.use('/dashboard', dashboardRouter)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.use(errorhandler({ logger } as any))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
