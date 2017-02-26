'use strict';

import React, { PureComponent, createElement } from 'react'

class EmbeddedSlackReactHeader extends PureComponent {
  /**
   * This methods renders the chat header.
   *
   * @since 1.0.0
   * @returns {React Element} Returns a React Element containing the chat header.
   */
  render() {
    const { expanded, title: propsTitle, toggle, unreadMessages } = this.props
    let title = !expanded && unreadMessages > 0
      ? unreadMessages + ' unread message(s)'
      : propsTitle
    const paragraph = createElement('p', null, title)

    return createElement('div', {
      id: 'embedded-slack-header',
      onClick: toggle
    }, paragraph)
  }
}

EmbeddedSlackReactHeader.propTypes = {
  expanded: React.PropTypes.bool,
  title: React.PropTypes.string,
  toggle: React.PropTypes.func,
  unreadMessages: React.PropTypes.number
}

export default EmbeddedSlackReactHeader
