import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, TextInput } from 'evergreen-ui';
// import logo from './logo.svg';
// import './App.css';

function Index() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>

            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          
          <h1>
            Where do you want to go?
          </h1>
          <TextInput
            name="text-input-name"
            placeholder="City..."
          /><br/><br/>
          <TextInput
            name="text-input-name"
            placeholder="Phone# 1..."
          /><br/><br/>
          <TextInput
            name="text-input-name"
            placeholder="Phone# 2..."
          /><br/><br/>
          <TextInput
            name="text-input-name"
            placeholder="Phone# 3..."
          /><br/><br/>
          <Button>Let's Jet</Button>
        </div>
      </Router>
    );
  }
}

export default App;
