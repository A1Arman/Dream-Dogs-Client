import React from 'react';

function SignUpForm(props) {
    return (
        <section>
        <header>
            <h3>Find Your Dream Dog Today</h3>
        </header>
        <form className='signup_form' id='signup_form' onSubmit={props.addUser}>
            <div>
              <label htmlFor="first_name">First name</label>
              <input placeholder='First Name' type="text" name='first_name' id='first-name' />
            </div>
            <div>
              <label htmlFor="last_name">Last name</label>
              <input type="text" name='last_name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' id='email' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
      </section>   
    )
}

export default SignUpForm;