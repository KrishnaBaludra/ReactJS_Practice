import React, { Component } from "react";

export default class FunctionsTernary extends Component {
  constructor() {
    super();
    this.state = {
      employeeDetails: {
        empName: "Rama",
        empEmail: "rama@gmai.com",
        empRole: "Devloper",
      },
      showEmployee: false,
    };
  }
  showEmpInfo = () => {
      console.log( "Employee Detailes Called" );
      let newEmp = { ...this.state.employeeDetails, empRole: "Tester" };
      this.setState({showEmployee:true,employeeDetails:newEmp})
  };
  render() {
    return (
      <div>
        Sri Rama
        <h2>Welcome to Employee Component</h2>
        <button onClick={this.showEmpInfo}>Show Employee</button>
        {this.state.showEmployee ? (
          <div>
            <p>{this.state.employeeDetails.empName}</p>
            <p>{this.state.employeeDetails.empEmail}</p>
            <p>{this.state.employeeDetails.empRole}</p>
          </div>
        ) : (
          <p>No Employee Details</p>
        )}
      </div>
    );
  }
}
