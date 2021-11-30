import React from 'react';
import './components/Style.css';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';


class App extends React.Component {
  state = {
    selectedUser: 'jimjamesjimathy',
    user: {},
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.selectedUser}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user) {
      axios.get(`https://api.github.com/users/${this.state.selectedUser}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  handleChange= (e) => {
    this.setState({
      ...this.setState,
      selectedUser: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.selectedUser}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return(
      <div className='App'>
        <div className='header'>
          <h1>Welcome to Go on GIT!</h1>
          <form>
            <input onChange={this.handleChange} type='text' placeholder='Search for a user'/>
            <button onClick={this.handleSubmit} >search</button>
          </form>
        </div>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />



      </div>
    );
  }
}

export default App;
