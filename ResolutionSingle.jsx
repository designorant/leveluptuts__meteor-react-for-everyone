import React, { Component } from 'react'

export default class ResolutionSingle extends Component {
  render () {
    return (
      <li>
        {this.props.resolution.text}
        {this.props.resolution.complete.toString()}
      </li>
    )
  }
}

ResolutionSingle.propTypes = {
  text: React.PropTypes.string,
  complete: React.PropTypes.bool,
};
