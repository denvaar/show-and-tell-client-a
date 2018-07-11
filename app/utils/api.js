import axios from 'axios'

const apiBase = process.env.API_BASE
const defaultConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const createCredentials = (code) =>
  axios.post(`${apiBase}/api/authenticate`, { github_code: code, state: 'authorizing' }, defaultConfig)
