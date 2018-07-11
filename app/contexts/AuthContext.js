import React from 'react'

import { createCredentials } from 'utils/api'


const clientId = process.env.CLIENT_ID
const redirectUrl = process.env.REDIRECT_URL

const AuthContext = React.createContext()


class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isAuthenticated: false }

    this.authenticate = this.authenticate.bind(this)
    this.unauthenticate = this.unauthenticate.bind(this)
  }

  authenticate(authCode) {
    if (authCode) {
      return createCredentials(authCode)
        .then(response => {
          if (response.status === 200 && response.data.api_token) {
            this.handleSuccessfulAuthentication(response.data)
          }
          return response
        })
        .catch(error => { return Promise.reject(error) })
    } else {
      const githubSSO = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`
      window.location.replace(githubSSO)

      return new Promise((resolve, reject) => resolve)
    }
  }

  unauthenticate() {
    this.setState({ isAuthenticated: false })
    window.localStorage.removeItem('api-token');
  }

  handleSuccessfulAuthentication(data) {
    this.setState({ isAuthenticated: true })
    window.localStorage.setItem('api-token', data.api_token);
  }

  render() {
    const { isAuthenticated } = this.state

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          handleLogin: this.authenticate,
          handleLogout: this.unauthenticate
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
