import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Elevator from '../src'

const root = document.createElement('div')
document.body.appendChild(root)

class Demo extends Component {

  constructor (props) {
    super(props)
    this.state = { open: true }
  }

  toggle () {
    return () => this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <div>
        <Elevator open={this.state.open}>
          <div style={{ background: 'red' }}>one</div>
          <div style={{ background: 'blue' }}>
            two
            <br/>
            big
          </div>
        </Elevator>
        <button onClick={this.toggle()}>{'Toggle'}</button>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, root)
