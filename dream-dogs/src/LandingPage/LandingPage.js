import React, {Component} from 'react';
import Spotlight from '../Spotlight/Spotlight';
import SignUpForm from '../LandingPageForm/SignUpForm';
import './LandingPage.css';

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
            <Spotlight />
            <SignUpForm />
        </main>
    </>
        )
    }
}

export default LandingPage;