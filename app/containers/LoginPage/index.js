import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const queryString = require('query-string')

import { AuthConsumer } from 'contexts/AuthContext'
import { Button, PrimaryButton } from 'components/Ui'
import LoadingOverlay from 'components/LoadingOverlay'

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 84px);

  background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ececec' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
`

const LoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;

  padding: 4rem;

  border: 1px solid #ddd;
  background: #ffffff;
`

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
      <PageWrapper>
        <LoginBox>
          {code && !isAuthenticated && <LoadingOverlay />}
          <PrimaryButton
            onClick={this.handleLoginClick}
          >
            {'Log in with GitHub '}
            <i className="fab fa-github"></i>
          </PrimaryButton>
        </LoginBox>
      </PageWrapper>
    )
  }
}

LoginPage.propTypes = {
}

export default LoginPage
