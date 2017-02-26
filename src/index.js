'use strict';

import { EmbeddedSlackCore } from 'embedded-slack'
import EmbeddedSlackReactBody from './body'
import EmbeddedSlackReactHeader from './header'
import React, { Component, createElement } from 'react'

class EmbeddedSlackReact extends Component {
  /**
   * This methods constructs an EmbeddedSlackReact instance.
   *
   * @since 1.0.0
   * @param {*} props The required properties to create an EmbeddedSlackReact instance.
   */
  constructor(props) {
    const { channel, token } = props

    super(props)
    try {
      const core = new EmbeddedSlackCore({
        channel,
        stateDidChanged: this.onCoreStateChange.bind(this),
        token
      })

      this.state = {
        coreState: core.getState()
      }
      this.onSubmit = function(message) {
        core.sendMessage(message)
      }
      this.toggle = core.toggle.bind(core)
    }
    catch (e) {
      throw e
    }
  }

  /**
   * This methods handles the core's state changes and updates coreState property.
   *
   * @since 1.0.0
   * @param {*} coreState The new coreState value.
   */
  onCoreStateChange(coreState) {
    this.setState({ coreState })
  }

  /**
   * This methods renders the chat.
   *
   * @since 1.0.0
   * @returns {React Element} Returns a React Element containing the chat.
   */
  render() {
    const { coreState } = this.state
    const className = coreState.expanded ? 'open' : ''

    return createElement('div', { id: 'embedded-slack', className }, [
      createElement(EmbeddedSlackReactHeader, {
        expanded: coreState.expanded,
        key: 'embedded-slack-header',
        title: coreState.title,
        toggle: this.toggle,
        unreadMessages: coreState.unreadMessages
      }),
      createElement(EmbeddedSlackReactBody, {
        key: 'embedded-slack-body',
        messages: coreState.messages,
        onSubmit: this.onSubmit
      })
    ])
  }
}

EmbeddedSlackReact.propTypes = {
  channel: React.PropTypes.string,
  token: React.PropTypes.string
}

export default EmbeddedSlackReact
