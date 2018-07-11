import React from 'react'
import PropTypes from 'prop-types'


class UnauthorizedPage extends React.Component {
  render() {
    return (
      <div>
        {'You are not allowed here!'}
      </div>
    )
  }
}

UnauthorizedPage.propTypes = {
}

export default UnauthorizedPage
