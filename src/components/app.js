import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  log(message) {
    console.log(message);
  }

  render() {

    var message = 'Hello world';
    let count = 5;
    count = 'a'
    this.log(message)

    return (
      <div>Landing page - app.js</div>
    );
  }
}
