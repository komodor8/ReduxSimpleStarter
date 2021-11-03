import React, { Component } from 'react';


class Person {
  name: string;
  age: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  greet(person: Person) {
    console.log("Hello " + person.name)
  }

}

export default class App extends Component {

  constructor(props: any) {
    super(props);
  }

  log(message: string) {
    console.log(message);
  }

  render() {
    let person = new Person('farid');
    person.greet(person)

    return (
      <div>Landing page - app.js</div>
    );
  }
}
