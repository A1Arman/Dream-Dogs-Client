import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import LandingPage from './components/LandingPage/LandingPage';
import PostsHome from './components/PostsHome/PostsHome';
import DemoNav from './components/DemoNav/DemoNav';
import Post from './components/Post/Post'
import AddPostNav from './components/AddPostNav/AddPostNav';
import config from './config';
import {DreamDogsProvider} from './DreamDogsContext';
import MyPost from './components/MyPost/MyPost';
import LoginForm from './components/LoginForm/LoginForm';
import TokenService from './services/token-service';
import PrivateRoute from './components/Utils/PrivateRoute';
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute';

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

    fetch(`http://localhost:8000/api/posts`, options)
      .then(res => {
        if(res.ok) {
         return res.json();
        }
        else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        this.setState({posts: data})
      })
  }

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      dog_name: e.target.dog_name.value,
      email: e.target.owner_email.value,
      birthdate: e.target.dog_bday.value,
      breed: e.target.breed.value,
      lifestyle: e.target.lifestyle.value
    }

    fetch(`http://localhost:8000/api/posts`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${TokenService.getAuthToken()}`
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

    const confirmedPass = e.target.confirm.value;

    const user = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    if (!confirmedPass === user.password) {
      alert('Password fields do not match')
    }

    fetch(`http://localhost:8000/api/users`, {
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

  handleDeletePost = post_id => {
    fetch(`http://localhost:8000/api/posts/${post_id}`,{
      method: "DELETE",
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
      })
      .then(() => {
        this.setState({
          posts: this.state.posts.filter(post => post.id !== post_id)
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  loginUser = ev => {
    ev.preventDefault();

    const { login_email, login_password } = ev.target
    
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(login_email.value, login_password.value)
    )
    
    login_email.value = ''
    login_password.value = ''
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
          <Route exact path='/myPost' component={DemoNav} />
          <Route exact path='/login' component={DemoNav} />
          <Route exact path='/addPost' component={AddPostNav}/>
        </header>
        <>
          <DreamDogsProvider value={contextVal}>
            <Route exact path='/' render={(props) => <LandingPage {...props}  posts={this.state.posts} addUser={(event) => this.handleUserSubmit(event)}/>} />
            {this.state.posts.length > 0 &&
              <PrivateRoute exact path='/myPost' render={(props) => <MyPost {...props} posts={this.state.posts} deleteUser={post_id => this.handleDeletePost(post_id)} />} />
            }
            <PublicOnlyRoute exact path='/login' render={(props) => <LoginForm {...props} loginUser={(event) => this.loginUser(event)} />} />
          </DreamDogsProvider>
          <Route exact path='/posts' render={(props) => <PostsHome {...props} posts={this.state.posts}/>} />
          <PrivateRoute exact path='/addPost' render={(props) => <Post {...props} addPost={(event) => this.handleSubmit(event)} />}/>
        </>
      </div>
    );
  }
}

export default App;
