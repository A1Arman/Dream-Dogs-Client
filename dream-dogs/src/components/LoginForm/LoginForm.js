import React from 'react';
import './LoginForm.css';

function LoginForm(props) {
    return (
        <form className='login_form' onSubmit={props.loginUser}>
            <h3>Log In</h3>
            <section>
                <div>
                    <label htmlFor='login_email'>Email:</label>
                    <input type='email' name='login_email' id='login_email' />
                </div>
                <div>
                    <label htmlFor='login_password'>Password:</label>
                    <input type='password' name='password' id='login_password' />
                </div>
                <button type='submit' className='sub-btn'>Log in</button>
                {props.error ? <h4>Incorrect Email or Password</h4> : <></>}
            </section>   
        </form>
    )
}

export default LoginForm;