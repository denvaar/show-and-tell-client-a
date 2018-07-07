import React from 'react'
import PropTypes from 'prop-types'


class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div>
        {'??? Page not found ??'}
      </div>
    )
  }
}

NotFoundPage.propTypes = {
}

export default NotFoundPage
