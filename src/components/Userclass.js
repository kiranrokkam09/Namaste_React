import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  render() {
    const { name, education } = this.props;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Education: {education}</h2>
        <h3>Contact:kiran.rokkam456@gmail.com</h3>
      </div>
    );
  }
}

export default Userclass;
