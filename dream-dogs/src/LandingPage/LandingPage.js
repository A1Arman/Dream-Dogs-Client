import { Component } from 'react';

class LandingPage extends Component {
    render() {
        return (
            <>
    <main role="main">
      <header role="banner">
        <h1>Dream Dogs</h1>
        <h2>Find Your Dream Dog.</h2>
      </header>
      <section>
        <header>
            <h3>How Dream Dogs works</h3>
        </header>
        <p>Dream dogs helps owners struggling to provide for their dogs to find a safe new home. Owners can create posts and also include a description of the dog, and the lifestyle needs of the dog.</p>
      </section>
      <section>
        <header>
            <h3>Dream Dog Spotlight</h3>
        </header>
        <h4>Jax</h4>
        <p>Birthdate: 06-08-2018</p>
        <p>Breed: Maltipoo</p>
        <p>Lifestlye: Great for families with smaller homes or apartments. Jax is a very loving dog that always wants to be with his family. He is a bundle of energy that adores the outdoors and going on walks. He will truly become a part of your family.</p>
      </section>
      <section>
        <header>
            <h3>Find Your Dream Dog Today</h3>
        </header>
        <form class='signup-form'>
            <div>
              <label for="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label for="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </section>
    </main>
        </>
        )
    }
}

export default LandingPage;