import React from 'react';

function LoginForm(props) {
    return (
        <form className='login_form' onSubmit={props.loginUser}>
            <section>
                <div>
                    <label htmlFor='login_email'>Email:</label>
                    <input type='email' name='login_email' id='login_email' />
                </div>
                <div>
                    <label htmlFor='login_password'>Password:</label>
                    <input type='password' name='password' id='login_password' />
                </div>
                <button type='submit'>Log in</button>
            </section>   
        </form>
    )
}

export default LoginForm;