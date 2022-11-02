import React from "react";

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// class App extends React.Component {
//   render() {
//     return <div>App</div>;
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 5000);
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

export default App;
