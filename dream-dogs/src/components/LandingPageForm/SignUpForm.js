import React from 'react';
import './SignUpForm.css';

function SignUpForm(props) {
    return (
        <section>
        <header>
            <h3 className='signup-title'>Find Your Dream Dog Today</h3>
        </header>
        <form className='signup_form' id='signup_form' onSubmit={props.addUser}>
            <div>
              {props.error ? <p>{props.error}</p> : <></>}
            </div>
            <div>
              <label htmlFor="first_name">First name:</label>
              <input placeholder='First Name' type="text" name='first_name' id='first-name' required/>
            </div>
            <div>
              <label htmlFor="last_name">Last name:</label>
              <input type="text" name='last_name' id='last-name' placeholder='Last Name' required/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name='email' id='email'  required/>
            </div>
            <div>
              <label htmlFor='password'>Password (8 characters minimum):</label>
              <input type='password' name='password' id='password' minLength='8' required/>
            </div>
            <div>
              <label htmlFor='confirm'>Confirm Password:</label>
              <input type='password' name='confirm' id='confirm' minLength='8' required/>
            </div>
            <button className='sub-btn' type='submit'>Sign Up</button>
        </form>
      </section>   
    )
}

export default SignUpForm;