import express from 'express'

export default () => {
  const routes = express.Router()
  routes.get('/', (req, res) => res.json('service is running'))
  routes.all('*', (req, res) =>
    res.status(404).json(`route not found ${req.path}`)
  )

  return routes
}
