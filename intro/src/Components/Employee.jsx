import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employeeDetails: {
        empName: "Kiran",
        empEmail: "kiran@gmail.com",
        empRole: "Developer",
      },
      showEmplyoee: false,
    };
  }

  showEmployeeInformation = () => {
    console.log("show Employee Info");
    let newEmployee = { ...this.state.employeeDetails, empName: "Srirama" };
    this.setState({ showEmplyoee: true, employeeDetails: newEmployee });
  };
  render() {
    return (
      <div>
        <h2>Welcome to Empolyee </h2>
        <button onClick={this.showEmployeeInformation}>Show EmpTemple</button>
        {this.state.showEmplyoee ? (
          <div>
            <p>{this.state.employeeDetails.empName}</p>
            <p>{this.state.employeeDetails.empEmail}</p>
            <p>{this.state.employeeDetails.empRole}</p>
          </div>
        ) : (
          <p>Employee Details Not Available</p>
        )}
      </div>
    );
  }
}

export default Employee;
