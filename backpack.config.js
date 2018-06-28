module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/api.js'
    return config
  }
}
