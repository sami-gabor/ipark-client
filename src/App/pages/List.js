import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('http://localhost:5000/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h2 className="mb-5">Available spots:</h2>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item, index) => {
              return(
                <div key={index} className="m-2">
                  <Button variant="info" type="submit">Reserve {item}</Button>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h4>None</h4>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;