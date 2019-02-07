import React, { Component } from 'react'

class Robot extends Component {
  render() {
  	let {item} = this.props
    return (
      <div>
  		Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
  		<input type="button" value="select" onClick={() => this.props.onSelect(item.id)} />
      </div>
    )
  }
}

export default Robot
