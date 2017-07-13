import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { AddFish } from '../components/AddFish'
import { FishItem } from '../components/FishItem'
import { addFish } from '../actions/FishActions'

class AppInternal extends PureComponent {
  render () {
    return (
      <div>
        <AddFish addFish={this.props.addFish} />
        <ul>
          {this.props.fishes.map(fish =>
            <FishItem
              key={fish.id}
              {...fish}
            />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fishes: state.fishes
  }
}

const mapDispatchToProps = ({
  addFish: addFish
})

export const App = connect(mapStateToProps, mapDispatchToProps)(AppInternal)
