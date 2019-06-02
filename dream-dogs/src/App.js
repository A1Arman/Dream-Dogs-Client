import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainNav from './MainNav/MainNav';
import LandingPage from './LandingPage/LandingPage';
import PostsHome from './PostsHome/PostsHome';
import DemoNav from './DemoNav/DemoNav';
import Post from './Post/Post'
import AddPostNav from './AddPostNav/AddPostNav';
import config from './config';
import {DreamDogsProvider} from './DreamDogsContext';

const {API_BASE_URL} = config

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`${API_BASE_URL}/posts`, options)
      .then(res => {
        if(res.ok) {
         return res.json();
        }
        else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        console.log(data)
        this.setState({posts: data})
      })
  }

  handleSubmit = e => {
    console.log('ran')
    e.preventDefault();
    const post = {
      dog_name: e.target.dog_name.value,
      email: e.target.owner_email.value,
      birthdate: e.target.dog_bday.value,
      breed: e.target.breed.value,
      lifestyle: e.target.lifestyle.value
    }

    fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(post => {
        this.addPost(post);
        const form = document.getElementById('post-form');
        form.reset();
      })
      .catch(error => {
        alert(`something went wrong: ${error.message}`)
      })

  }

  handleUserSubmit = e => {
    e.preventDefault();

    const user = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value
    }

    fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(data => {
        const form = document.getElementById('signup_form');
        form.reset();
      })
      .catch(error => {
        alert(`Something went wrong: ${error.message}`)
      })
  }

  addPost = post => {
    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  render() {
    const contextVal = {
      posts: this.state.posts,
    }
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path='/' component={MainNav} />
          <Route exact path='/posts' component={DemoNav} />
          <Route exact path='/addPost' component={AddPostNav}/>
        </header>
        <>
        {this.state.posts.length > 0 && 
          <DreamDogsProvider value={contextVal}>
            <Route exact path='/' render={(props) => <LandingPage {...props} addUser={(event) => this.handleUserSubmit(event)}/>} />
          </DreamDogsProvider>
        } 
          <Route exact path='/posts' render={(props) => <PostsHome {...props} posts={this.state.posts}/>} />
          <Route exact path='/addPost' render={(props) => <Post {...props} addPost={(event) => this.handleSubmit(event)} />}/>
        </>
      </div>
    );
  }
}

export default App;
