import { Component } from 'react';
import Subclass from './Subclass'

class BaseComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { width: window.innerWidth, height: window.innerHeight, loggedIn: false }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }


  render() {
    console.log(this.state)

    return <Subclass width={this.state.width} height={this.state.height}/>
  }
}

export default BaseComponent;