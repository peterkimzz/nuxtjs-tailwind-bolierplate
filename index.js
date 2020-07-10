require('dotenv').config()

const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('./nuxt.config')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  try {
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    await nuxt.ready()
    // Build only in dev mode
    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Listen the server
    app.listen(port, host, () => {
      console.log(`[Nuxt info] Server listening on http://${host}:${port}`)
    })
  } catch (err) {
    console.error(`[Nuxt error]`, err)
  }
}

start()
