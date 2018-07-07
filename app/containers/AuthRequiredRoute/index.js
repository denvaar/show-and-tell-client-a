import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthProvider, AuthConsumer } from 'contexts/AuthContext'


const AuthRequiredRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default AuthRequiredRoute
