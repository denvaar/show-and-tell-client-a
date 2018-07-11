import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage'
import LoginPage from 'containers/LoginPage'
import NotFoundPage from 'containers/NotFoundPage'
import TalksListPage from 'containers/TalksListPage'
import AuthRequiredRoute from 'containers/AuthRequiredRoute'
import UnauthorizedPage from 'containers/UnauthorizedPage'
import withAuthContext from 'containers/withAuthContext'


class AppPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={withAuthContext(LoginPage)} />
        <AuthRequiredRoute path="/talks" component={TalksListPage} />

        <Route path="/unauthorized" component={UnauthorizedPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    )
  }
}

AppPage.propTypes = {
}

export default AppPage
