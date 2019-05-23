import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainNav from './MainNav/MainNav';
import LandingPage from './LandingPage/LandingPage';
import PostsHome from './PostsHome/PostsHome';
import DemoNav from './DemoNav/DemoNav';
import Post from './Post/Post'
import AddPostNav from './AddPostNav/AddPostNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path='/' component={MainNav} />
          <Route exact path='/posts' component={DemoNav} />
          <Route exact path='/addPost' component={AddPostNav}/>
        </header>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/posts' component={PostsHome} />
          <Route exact path='/addPost' component={Post}/>
        </main>
      </div>
    );
  }
}

export default App;
