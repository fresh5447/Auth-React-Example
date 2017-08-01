import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.css';
import NavigationBar from './Nav/NavigationBar';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Ping from './Ping/Ping';
import Admin from './Admin/Admin';


class App extends Component {
  state = {
    cart: ["one fish", "two fish", "three fish"]
  }

  render() {
    
    const { isAuthenticated, userHasScopes } = this.props.auth;

    return (
      <div>
        <NavigationBar
          login={this.props.auth.login}
          logout={this.props.auth.logout}
          isAuthenticated={this.props.auth.isAuthenticated}
          userHasScopes={this.props.auth.userHasScopes}
        />

        <Route path="/home" render={(props) => <Home auth={this.props.auth} {...props} />} />

        <Route path="/profile" render={(props) => (
          !this.props.auth.isAuthenticated() ? (
            <Redirect to="/home"/>
          ) : (
            <Profile hello={"Hello"} auth={this.props.auth} {...props} />
          )
        )} />

        <Route path="/ping" render={(props) => (
          !this.props.auth.isAuthenticated() ? (
            <Redirect to="/home"/>
          ) : (
            <Ping auth={this.props.auth} {...props} />
          )
        )} />

        <Route path="/admin" render={(props) => (
          !this.props.auth.isAuthenticated() || !this.props.auth.userHasScopes(['write:messages']) ? (
            <Redirect to="/home"/>
          ) : (
            <Admin auth={this.props.auth} {...props} />
          )
        )} />



        {/* <Route path="/profile" render={(props) => (
          !this.props.auth.isAuthenticated() ? (
            <Redirect to="/home"/>
          ) : (
            <Profile hello={"Hello"} auth={this.props.auth} {...props} />
          )
        )} />
        <Route path="/ping" render={(props) => (
          !this.props.auth.isAuthenticated() ? (
            <Redirect to="/home"/>
          ) : (
            <Ping auth={this.props.auth} {...props} />
          )
        )} />
        <Route path="/admin" render={(props) => (
          !this.props.auth.isAuthenticated() || !this.props.auth.userHasScopes(['write:messages']) ? (
            <Redirect to="/home"/>
          ) : (
            <Admin auth={this.props.auth} {...props} />
          )
        )} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/> */}
      </div>
    );
  }
}

export default App;
