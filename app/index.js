import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import AppPage from 'containers/AppPage'
import { AuthProvider } from 'contexts/AuthContext'


ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AppPage />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('react-root')
)
