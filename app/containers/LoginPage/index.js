import React from 'react'
import PropTypes from 'prop-types'

import { AuthConsumer } from 'contexts/AuthContext'


class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div>
        {'Login page'}
        <AuthConsumer>
          {({ isAuthenticated, handleLogin, handleLogout }) => (
            <div>
              <button onClick={() => isAuthenticated ? handleLogout() : handleLogin()}>{isAuthenticated ? 'Logout' : 'Login'}</button>
            </div>
          )}
        </AuthConsumer>
      </div>
    )
  }
}

LoginPage.propTypes = {
}

export default LoginPage
