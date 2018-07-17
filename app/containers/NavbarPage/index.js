import React from 'react'
import PropTypes from 'prop-types'

import withAuthContext from 'containers/withAuthContext'
import Navbar from 'components/Navbar'


class NavbarPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { loading, user } = this.props

    return (
      <Navbar loading={loading} user={user} />
    )
  }
}

NavbarPage.propTypes = {
}

export default NavbarPage
