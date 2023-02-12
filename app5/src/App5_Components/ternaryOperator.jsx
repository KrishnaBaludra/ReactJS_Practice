import React, { Component } from "react";

class TernaryOperator extends Component {
  constructor() {
    super();

    this.state = {
      showHeading: true,
      showImage: true,
      welcome: "Hello Welcome to React Js ....",
      studentDetails: {
        fname: "Ram",
        lname: "Krishna",
        email: "ram@krishna.com",
      },
      subjects: ["HTML", "CSS", "JS", "AJAX", "RJS"],
      images: [
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
        {this.state.showHeading && <h2>{this.state.welcome}</h2>}
        <hr />
        <ul>
          {Object.values(this.state.studentDetails).map((value, o) => {
            return <li key={o}>{value}</li>;
          })}
        </ul>
        <ul>
          {this.state.subjects.map((value, i) => {
            return <li key={i}>{value}</li>;
          })}
        </ul>

        {this.state.showImage ? (
          this.state.images.map((val, i) => (
            <img src={val} alt="" key={i} style={{ width: 100, height: 100 }} />
          ))
        ) : (
          <p>There is no Image</p>
        )}
      </div>
    );
  }
}
export default TernaryOperator;
