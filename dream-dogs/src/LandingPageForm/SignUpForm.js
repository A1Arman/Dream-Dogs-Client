import React from 'react';

function SignUpForm() {
    return (
        <section>
        <header>
            <h3>Find Your Dream Dog Today</h3>
        </header>
        <form class='signup-form' id='signup'>
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
            <button type='submit'>Sign Up</button>
        </form>
      </section>   
    )
}

export default SignUpForm;