import React, { Component } from "react";
import Header from "./Header";

export default class StatesParent extends Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: "Hello 10K ...Welcome to RJS Traing Sessions",
      employee: {
        fname: "Baratha",
        email: "baratha@rama.com",
        city: "Narasaraopet",
        role: "Devloper",
      },
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage = () => {
    this.setState({
      welcomeMessage: "Hello Parent ... I am changing you !!",
    });
  };
  render() {
    const { welcomeMessage } = this.state;
    return (
      <div>
        Sri Rama Jai Srirama Sri rama jaya rama jaya jaya rama
        <Header message={welcomeMessage} handleChange={this.changeMessage} />
      </div>
    );
  }
}
