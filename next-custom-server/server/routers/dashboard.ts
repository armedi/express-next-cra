import path from 'path'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const route = express.Router()

// relative to dist/routers/dashboard.js
const dashboardBuildDir = '../../../dashboard/build'

route.use(express.static(path.join(__dirname, dashboardBuildDir)))

if (process.env.NODE_ENV === 'development') {
  route.use(
    createProxyMiddleware({
      target: 'http://localhost:8080',
    })
  )
} else {
  route.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, dashboardBuildDir, 'index.html'))
  })
}

export default route
