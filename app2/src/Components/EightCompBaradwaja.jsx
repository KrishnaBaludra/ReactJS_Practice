import { Component } from "react";

class Baradwaja extends Component {
  constructor() {
    super();
    this.state = {
      showHeading: true,
      showImages: true,
      welcome: "Hello All .... Welcome to React Js",
      studentDetails: {
        fname: "Sai",
        lname: "Krishna",
        email: "sai@krishna.com",
      },
      subjects: ["HTML", "CSS", "JS", "RJS"],
      imges: [
        "https://cdn-icons-png.flaticon.com/512/888/888859.png",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
        "https://www.computerhope.com/jargon/j/javascript.png",
        "https://bitnetinfotech.com/wp-content/uploads/2022/08/Frameworks-for-React-JS.jpg",
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Baradwaja Maharshi</h1>
        <button onClick={this.showEmployeeDetails}>
          Show Details of Employee
        </button>
        <h3>{this.state.welcome}</h3>
        <ul>
          {Object.values(this.state.studentDetails).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
        
            {this.state.imges.map( ( val, i ) => (
                <img src={val}
                    key={i}
                    alt=""
                    style={{ width: 100, height: 100 }} />
            ))}
       
      </div>
    );
  }
}
export default Baradwaja;
