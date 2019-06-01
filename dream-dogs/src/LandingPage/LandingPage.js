import React from 'react';
import { Link } from 'react-router-dom';
import Spotlight from '../Spotlight/Spotlight';
import SignUpForm from '../LandingPageForm/SignUpForm';
import './LandingPage.css';

function LandingPage(props) {
        return (
            <>
            <main role="main">
                <header role="banner" className='landing-header'>
                    <h1 id="landing-title">Dream Dogs</h1>
                    <h2 id="phrase">Find Your Dream Dog.</h2>
                    <Link to='/posts'><button className='btn'>Demo App</button></Link>
                </header>
                <section>
                    <header>
                        <h3>How Dream Dogs works</h3>
                    </header>
                    <p>Dream dogs helps owners struggling to provide for their dogs to find a safe new home. Owners can create posts and also include a description of the dog, and the lifestyle needs of the dog.</p>
                </section>
                <Spotlight />
                <SignUpForm addUser={props.addUser}/>
            </main>
            </>
    )
}

export default LandingPage;