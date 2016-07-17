import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import anime from 'animejs'

class Elevator extends Component {

  static propTypes = {
    open: PropTypes.bool,
    duration: PropTypes.number,
    easing: PropTypes.oneOf(Object.keys(anime.easings)),
    children: PropTypes.arrayOf(PropTypes.node),
  }

  static defaultProps = {
    open: false,
    duration: 500,
    easing: 'linear',
  }

  constructor (props) {
    super(props)

    const len = props.children && props.children.length
    if (!len || len < 2) {
      throw new Error('The Elevator need two children nodes.')
    } else if (len > 2) {
      console.warn('Only the first 2 nodes will be rendered.') // eslint-disable-line
    }
  }

  componentDidMount () {
    this.main = ReactDOM.findDOMNode(this.refs.e)
    this.child = this.main.childNodes[0]

    this.sizes = {
      one: this.child.childNodes[0].getBoundingClientRect(),
      two: this.child.childNodes[1].getBoundingClientRect(),
    }

    const active = this.sizes[this.props.open ? 'two' : 'one']
    const translateY = this.props.open ? -this.sizes.one.height : 0

    this.main.style.height = `${active.height}px`
    this.main.style.width = `${active.width}px`
    this.child.style.transform = `translateY(${translateY}px)`
  }

  componentDidUpdate (prev) {
    if (prev.open === this.props.open) { return }
    this.anime()
  }

  anime () {
    const { easing, duration } = this.props
    const { height, width } = this.sizes[this.props.open ? 'two' : 'one']
    const translateY = this.props.open ? -this.sizes.one.height : 0

    anime({
      targets: this.child,
      translateY,
      easing,
      duration,
    })

    anime({
      targets: this.main,
      height,
      width,
      easing,
      duration,
    })
  }

  render () {
    const { children: [one, two], style } = this.props

    return (
      <div style={{ ...style, overflow: 'hidden' }} ref='e'>
        <div>
          {one}
          {two}
        </div>
      </div>
    )
  }

}

export default Elevator
