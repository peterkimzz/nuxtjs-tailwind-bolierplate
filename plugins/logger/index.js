export default ({ isDev }, inject) => {
  const logging = (...args) => {
    if (!isDev) return

    console.log(`\n[Console Log] Visible only development mode.`)
    console.log(...args)
  }

  inject('log', logging)
}
