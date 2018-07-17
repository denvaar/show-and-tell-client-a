const clientStore = {
  getAuthToken: () => {
    return window.localStorage.getItem('api-token')
  },
  setAuthToken: (token) => {
    window.localStorage.setItem('api-token', token)
  },
  removeAuthToken: () => {
    window.localStorage.removeItem('api-token')
  }
}

export default clientStore
