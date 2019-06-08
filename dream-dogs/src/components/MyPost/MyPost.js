import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './MyPost.css';


class MyPost extends Component {
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
            'Content-Type': 'application/json',
            'Authorization': `bearer ${TokenService.getAuthToken()}`
          }
        }
        fetch(`http://localhost:8000/api/posts/myPost`, options)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            else {
              throw new Error('Something went wrong');
            }
          })
          .then(data => {
            this.setState({posts: data})
          })
          .catch(err => {
            alert(`Something went wrong ${err}`)
          })
      }

    render() {
        return (
            <>
            <main>
                <header role="banner">
                    <h1>My Posts</h1>
                </header>
                {this.state.posts.map(post => {
                    return (
                        <section key={post.id}>
                            <h4>{post.dog_name}</h4>
                            <p>Owner Email: {post.email}</p>
                            <p>Birthdate: {post.birthdate}</p>
                            <p>Breed: {post.breed}</p>
                            <p>Lifestyle: {post.lifestyle}</p>
                            <button className='deletePostBtn' onClick={() => (
                                this.props.handleDeletePost(post.id, this.handleDeletePost),
                                this.setState({posts: this.state.posts.filter(posts => posts.id !== post.id)})
                            )       
                            }>Delete</button>
                            <Link to='/edit'><button className='updateBtn' onClick={() => {
                                this.props.setId(post.id)
                            }}>Update</button></Link>
                        </section>
                    )
                })}
            </main>
            </>
        )
    }
}


export default MyPost;