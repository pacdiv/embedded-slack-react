'use strict';

import React, { Component, createElement } from 'react'

class EmbeddedSlackReactBodyChat extends Component {
  /**
   * This methods renders a single message.
   *
   * @since 1.0.0
   * @returns {React Element} Returns a React Element containing a message.
   */
  getMessage(message) {
    let className = 'message'
    const key = `embedded-slack-body-chat-message-${message.ts}`

    if (typeof message.fromSupport !== 'undefined') {
      className += ' support'
    }

    return createElement('div', { className, key }, [
      createElement('p', {
        className: 'author',
        key: `${key}-author`
      }, message.user),
      createElement('p', {
        className: 'content',
        key: `${key}-content`
      }, message.text)
    ])
  }

  /**
   * This methods renders the chat's messages.
   *
   * @since 1.0.0
   * @returns {React Element} Returns a React Element containing a collection of messages.
   */
  render() {
    const { getMessage, props: { messages: propsMessages } } = this
    const messages = propsMessages.map(message => getMessage(message))

    return createElement('div', { className: 'chat' }, messages)
  }
}

EmbeddedSlackReactBodyChat.propTypes = {
  messages: React.PropTypes.array
}

export default EmbeddedSlackReactBodyChat
