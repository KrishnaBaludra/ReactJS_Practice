import React, { Component } from "react";

class HomeClass extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Rama",
      person: {
        fname: "SriRama",
        lname: "Surya",
        email: "sriram@gmail.com",
        city: "Ayodhya",
        state: "UttarPradesh",
      },
      brothers: ["lakshman", "Bharatha", "Sathrugnu"],
    };
  }
  render() {
    return (
      <div>
        <p>Sai Krishna Singh Practicing the State Conceps</p>
        <h1>{this.state.fullName}</h1>
        <ul>
          {Object.values(this.state.person).map((value, i) => {
            return <li key={i}>{value}</li>;
          })}
        </ul>
        <ul>
          {this.state.brothers.map((val,i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default HomeClass;
