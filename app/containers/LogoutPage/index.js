import React from 'react'
import { Redirect } from 'react-router-dom'


class LogoutPage extends React.Component {
  componentWillMount() {
    this.props.handleLogout()
  }

  render() {
    return (
      <Redirect to="/login" />
    )
  }
}

export default LogoutPage
