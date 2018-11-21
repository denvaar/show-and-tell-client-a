import React from 'react'

import { getUser, createCredentials } from 'utils/api'
import clientStore from 'utils/clientStore'


const clientId = process.env.CLIENT_ID
const redirectUrl = process.env.REDIRECT_URL

const AuthContext = React.createContext()


class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      isAuthenticated: false,
      user: null
    }

    this.authenticate = this.authenticate.bind(this)
    this.unauthenticate = this.unauthenticate.bind(this)
  }

  componentDidMount() {
    const authToken = clientStore.getAuthToken()

    if (authToken) {
      this.setState({ loading: true })

      getUser(authToken)
        .then(response => {
          this.setState({
            loading: false,
            isAuthenticated: true,
            user: {
              name: `${response.data.first_name} ${response.data.last_name}`,
              photo: response.data.photo
            }
          })
        })
        .catch(error => {
          this.setState({ loading: false })
        })
    } else {
      this.setState({ loading: false })
    }
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
    this.setState({ user: null, isAuthenticated: false })
    clientStore.removeAuthToken()
  }

  handleSuccessfulAuthentication(data) {
    this.setState({
      isAuthenticated: true,
      user: {
        name: `${data.first_name} ${data.last_name}`,
        photo: data.photo
      }
    })
    clientStore.setAuthToken(data.api_token)
  }

  render() {
    const { isAuthenticated, loading, user } = this.state

    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          user,
          loading,
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
