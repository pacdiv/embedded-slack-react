# embedded-slack-react

Embedded Slack React allows you to add a Slack built-in chat on your website using React.

> **Note:** :warning:
> Embedded Slack and Embedded Slack React were been developed as a technical try to determine if Slack can be used from a web page, to allow customers to discuss with a support team. They currently work with a test token so, **at this time, using those packages in production is not recommanded**.

### Prerequisites

----------

You need all [embedded-slack](https://github.com/pacdiv/embedded-slack) prerequisites, nothing more ! :slightly_smiling_face:

### Usage

----------

In this example, we create an EmbeddedSlackReact object with the two mandatory properties:
```javascript
// index.js
import EmbeddedSlackReact from 'embedded-slack-react'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<EmbeddedSlackReact
  channel="your_channel_id"
  token="your_channel_id"
/>, document.getElementById('embedded-slack-wrapper'))
```
```html
<!-- index.html -->
<body>
  <div id="embedded-slack-wrapper" />
</body>
```
Do you see a blue div on the bottom right of your website now ? Good, you made it ! :slightly_smiling_face:

### Built With

----------

[embedded-slack](https://github.com/pacdiv/embedded-slack) - Adds a Slack built-in chat to your website

[react](https://www.npmjs.com/package/react) - React is a JavaScript library for building user interfaces

### License

----------

[MIT](LICENSE.md)
