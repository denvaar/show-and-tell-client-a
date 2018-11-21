import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import AppPage from 'containers/AppPage'
import { AuthProvider } from 'contexts/AuthContext'

import gql from 'graphql-tag'
import client from 'utils/graphql'

client
  .query({
    query: gql`
      {
        talks {
          id
          title
          description
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AppPage />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('react-root')
)
