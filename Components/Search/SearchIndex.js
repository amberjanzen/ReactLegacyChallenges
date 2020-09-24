import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      value: "",
      filtered: []
    }
    this.searchFunction = this.searchFunction.bind(this)
    this.filterArray = this.filterArray.bind(this)
  }
  searchFunction() {
    console.log(this.state.value);
    this.setState({
      filtered: this.filterArray()

    })
  };
  filterArray() {
    return this.state.things.filter(thing => {
      if (this.state.value !== " ") {
        if (thing.includes(this.state.value)) {
          return thing
        }
      } else {
        return thing;
      }
    }
    )
  }

  render() {
    return (
      <div>
        <Input
        placeholder='Search for Item'
        type='text'
          onChange={e => { this.setState({ value: e.target.value }, () => { this.searchFunction() }); }}
        />
        <h3>Item:</h3>
        <ul>
          {this.state.value ? this.state.filter.map(thing=><li>{thing}</li>) : this.filterArray().map(thing=><li>{thing}</li>)}
        </ul>
      </div>
    )
  }
}
export default SearchIndex;
