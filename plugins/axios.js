import * as axios from 'axios'

let options = {
  baseUrl: 'http://localhost:8080/api/'
}

// The server-side needs a full url to works
// if (process.server) {
//   options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8080}`
// }

export default axios.create(options)
