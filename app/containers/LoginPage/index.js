import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const queryString = require('query-string')

import { AuthConsumer } from 'contexts/AuthContext'


class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }

    this.handleLoginClick = this.handleLoginClick.bind(this)
  }

  handleLoginClick() {
    const { isAuthenticated, handleLogin, handleLogout } = this.props

    if (isAuthenticated) {
      handleLogout()
    } else {
      handleLogin()
    }
  }

  render() {
    const { isAuthenticated, handleLogin } = this.props
    const { code } = queryString.parse(this.props.location.search)

    if (code && !isAuthenticated) {
      handleLogin(code)
        .then(successfulResponse => {
          this.setState({ redirect: true })
        })
    }

    if (this.state.redirect) {
      return <Redirect to="/talks" />
    }

    return (
      <div>
        {'Login page'}
        <div>
          <button
            onClick={this.handleLoginClick}
          >
            {'Authenticate with GitHub'}
          </button>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
}

export default LoginPage
