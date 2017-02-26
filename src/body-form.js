'use strict';

import React, { Component, createElement } from 'react'

class EmbeddedSlackReactBodyForm extends Component {
  /**
   * This methods constructs an EmbeddedSlackReactBodyForm instance.
   *
   * @since 1.0.0
   * @param {*} props The required properties to create an EmbeddedSlackReactBodyForm instance.
   */
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /**
   * This methods handles changes on the input form and sets the new value property.
   *
   * @since 1.0.0
   * @param {Event} event The triggered event.
   */
  handleChange(event) {
    const { value } = event.target
    this.setState({ value })
  }

  /**
   * This methods handles the submissions of the form and transmits them the value to the parent.
   *
   * @since 1.0.0
   * @param {Event} event The triggered event.
   */
  handleSubmit(event) {
    const { props: { onSubmit }, state: { value } } = this

    event.preventDefault()
    onSubmit(value)
    this.setState({ value: '' })
  }

  /**
   * This methods renders the chat form.
   *
   * @since 1.0.0
   * @returns {React Element} Returns a React Element containing the chat form.
   */
  render() {
    const input = createElement('input', {
      onChange: this.handleChange,
      placeholder: 'Type something here',
      type: 'text',
      value: this.state.value
    })

    return createElement('form', {
      className: 'form-container',
      onSubmit: this.handleSubmit
    }, input)
  }
}

EmbeddedSlackReactBodyForm.propTypes = {
  onSubmit: React.PropTypes.func
}

export default EmbeddedSlackReactBodyForm
