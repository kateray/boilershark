import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class FishInternal extends PureComponent {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        {this.props.rating}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const fish = state.fishes.find((f) => {
    return f.name === ownProps.match.params.fish_name
  })
  return fish || {}
}

export const Fish = connect(mapStateToProps)(FishInternal)
