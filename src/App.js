import React from 'react';
import './components/Style.css';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';


class App extends React.Component {

  componentDidMount() {
    axios.get('https://api.github.com/users/jimjamesjimathy')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    console.log('Go on Git: App rendering')
    return(
      <div className='App'>
        <div className='header'>
          <h1>Welcome to Go on GIT!</h1>
          <form>
            <input type='text' placeholder='Search for a user'/>
            <button>search</button>
          </form>
        </div>
        <img src='https://avatars.githubusercontent.com/u/85250373?v=4' width='300'></img>
      </div>
    );
  }
}

export default App;
