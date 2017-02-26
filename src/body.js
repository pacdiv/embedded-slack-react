'use strict';

import EmbeddedSlackReactBodyChat from './body-chat'
import EmbeddedSlackReactBodyForm from './body-form'
import React, { Component, createElement } from 'react'

class EmbeddedSlackReactBody extends Component {
  /**
   * This methods renders the chat body.
   *
   * @since 1.0.0
   * @returns {React Element} Returns a React Element containing the chat body.
   */
  render() {
    const key = 'embedded-slack-body-'
    const { messages, onSubmit } = this.props

    return createElement('div', { id: 'embedded-slack-body' }, [
      createElement(EmbeddedSlackReactBodyChat, {
        messages,
        key: `${key}chat`
      }),
      createElement(EmbeddedSlackReactBodyForm, {
        onSubmit,
        key: `${key}form`
      })
    ])
  }
}

EmbeddedSlackReactBody.propTypes = {
  messages: React.PropTypes.array,
  onSubmit: React.PropTypes.func
}

export default EmbeddedSlackReactBody
