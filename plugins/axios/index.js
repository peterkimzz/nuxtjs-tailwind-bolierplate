export default function({ app }) {
  const IS_PROD = process.env.NODE_ENV === 'production'

  /** Trying to request */
  app.$axios.onRequest(config => {
    const { method, url, query, data } = config
    // config.withCredentials = true

    if (IS_PROD) {
      config.baseURL = 'https://api.example.com'
    } else {
      if (process.server) {
        config.baseURL = 'http://api:3000'
      } else if (process.client) {
        config.baseURL = 'http://localhost:3000'
      }
    }

    app.$log(
      `[Axios Request] Making request to ${method.toUpperCase()} "${url}"`,
      {
        query,
        data
      }
    )
    return config
  })

  /** Succeed */
  app.$axios.onResponse(res => {
    app.$log(`[Axios Response]`, res.data.data)

    return res.data.data
  })

  /** Error */
  app.$axios.onError(err => {
    app.$log(`[Axios Error] ${err.response.status}`, err.response.data)

    return Promise.reject(err)
  })
}
