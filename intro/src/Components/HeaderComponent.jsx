import { Component } from "react";

class HeaderComp extends Component {
  constructor(props) {
      super();
      console.log(props);
  }
  render() {
    return (
      <div style={{ background: "grey", paddin: 10, fontWeight: "bold" }}>
        {this.props.welcomeMessage}
      </div>
    );
  }
}
export default HeaderComp;