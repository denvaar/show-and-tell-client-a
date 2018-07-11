import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthConsumer } from 'contexts/AuthContext'


const AuthRequiredRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthConsumer>
      {({ isAuthenticated }) => (
        <div>
          {isAuthenticated ?
            <Route {...rest} render={props => <Component {...props} />} />
            :
            <Redirect to="/unauthorized" />}
        </div>
      )}
    </AuthConsumer>
  )
}

export default AuthRequiredRoute
