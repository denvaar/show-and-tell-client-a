import React from 'react'

import { AuthConsumer } from 'contexts/AuthContext'


const withAuthContext = (Component) => {
  return (props) => (
    <AuthConsumer>
      {(authProps) => (
        <Component {...props} {...authProps} />
      )}
    </AuthConsumer>
  )
}

export default withAuthContext
