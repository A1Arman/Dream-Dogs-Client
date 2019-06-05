import React from 'react';
import { Link } from 'react-router-dom'

function MyPost(props) {
    return (
        <>
        <main>
            <header role="banner">
                <h1>My Posts</h1>
            </header>
            {props.posts.map(post => {
                return (
                    <section key={post.id}>
                        <h4>{post.dog_name}</h4>
                        <p>Owner Email: {post.email}</p>
                        <p>Birthdate: {post.birthdate}</p>
                        <p>Breed: {post.breed}</p>
                        <p>Lifestyle: {post.lifestyle}</p>
                        <button className='deletePostBtn' onClick={() => {
                            props.deleteUser(post.id, props.deleteUser)
                        }}>Delete</button>
                        <Link to='/edit'><button>Update</button></Link>
                    </section>
                )
            })}
        </main>
        </>
    )
}


export default MyPost;