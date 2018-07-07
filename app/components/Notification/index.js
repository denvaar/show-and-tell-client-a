import React from 'react'
import PropTypes from 'prop-types'

import Container from './Container'


class Notification extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Container>
        <div />
        <div>{this.props.message}</div>
        <div />
      </Container>
    )
  }
}

Notification.propTypes = {
}

export default Notification
