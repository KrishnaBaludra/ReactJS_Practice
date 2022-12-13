import React, { Component } from 'react'

export default class c2 extends Component {
  constructor() {
    super();
    this.state = {
      welcome: "Hello All .... Welcome to React Js",
      studentDetails: {
        fname: "Sai",
        lname: "Krishna",
        email: "sai@krishna.com",
      },
      subjects: ["HTML", "CSS", "JS", "RJS"],
    };
  }
  render() {
    return <div>
      <h2> { this.state.welcome}</h2>
    </div>;
  }
}
