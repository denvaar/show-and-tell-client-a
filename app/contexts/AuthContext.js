import React from 'react'

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isAuthenticated: false }

    this.authenticate = this.authenticate.bind(this)
    this.unauthenticate = this.unauthenticate.bind(this)
  }

  authenticate() {
    setTimeout(() => this.setState({ isAuthenticated: true }), 1000)
  }

  unauthenticate() {
    this.setState({ isAuthenticated: false })
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
