import React, { PureComponent } from 'react'

export class AddFish extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      rating: '5'
    }
  }

  saveFish (e) {
    e.preventDefault()
    if (!this.state.name.trim()) {
      return
    }
    this.props.addFish({name: this.state.name, rating: this.state.rating})
    this.setState({name: '', rating: '5'})
  }

  render () {
    return (
      <form onSubmit={this.saveFish.bind(this)}>
        <label>
          Fish type:
          <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
        </label>
        <label>
          Deliciousness:
          <input type='range' min='0' max='10' step='1' value={this.state.rating} onChange={(e) => this.setState({rating: e.target.value})} />
        </label>
        <button type='submit'>
          Add Fish
        </button>
      </form>
    )
  }
}
