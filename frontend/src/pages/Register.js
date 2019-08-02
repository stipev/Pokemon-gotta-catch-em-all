import React from "react";
import { Link } from "react-router-dom";
const REGISTER_URL = "http://localhost:8000/register";

export default class Register extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onUsernameSubmmit = e => {
    e.preventDefault();
    console.log("form submmited");
    let username = this.state.username;
    let password = this.state.password;
    fetch(REGISTER_URL, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => console.log(res))
      .catch(error => console.error("Error:", error));
  };

  onUsernameInput = e => {
    let username = e.target.value;
    this.setState({ username });
  };
  onPasswordInput = e => {
    let password = e.target.value;
    this.setState({ password });
  };

  render() {
    return (
      <div className="LoginPage">
        <form action="" onSubmit={this.onUsernameSubmmit}>
          <p>Username:</p>
          <input
            onChange={this.onUsernameInput}
            placeholder="Username here..."
            type="text"
          />
          <p>Password:</p>
          <input
            onChange={this.onPasswordInput}
            placeholder="Password here..."
            type="text"
          />
        </form>
        <button onClick={this.onUsernameSubmmit} className="RegisterButton">
          REGISTER
        </button>
        <Link to="/login">Don't have an account yet!?</Link>
      </div>
    );
  }
}