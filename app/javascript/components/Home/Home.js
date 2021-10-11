import React, { Component } from "react";
import Jumbotron from "./Jumbotron";

class Home extends Component {
  constructor() {
    super()

    this.state = {
      course_modules: [
        { id: 1, title: '1. Setting up new RoR app with React', description: 'lorem impsum', active: false },
        { id: 2, title: '2. Adding React to an existing Rails app', description: 'lorem impsum', active: false },
        { id: 3, title: '3. Building a Hello World App', description: 'lorem impsum', active: false },
        { id: 4, title: '4. Adding React Router Dom to your App', description: 'lorem impsum', active: false },
      ]
    }
  }

  render() {
    return (
      <Jumbotron/>
    )
  }
}

export default Home
