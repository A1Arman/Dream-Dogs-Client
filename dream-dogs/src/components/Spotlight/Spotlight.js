import React from 'react';
import { DreamDogsConsumer } from '../../DreamDogsContext';

function Spotlight() {
    return (
        <DreamDogsConsumer>
        {context => (
            <>
            <header>
                <h3>Dream Dog Spotlight</h3>
            </header>
            <h4>{context.posts[0].dog_name}</h4>
            <p>Owners Email: {context.posts[0].email}</p>
            <p>Birthdate: {context.posts[0].birthdate}</p>
            <p>Breed: {context.posts[0].breed}</p>
            <p>Lifestlye: {context.posts[0].lifestyle}</p>
            </>
        )}
        </DreamDogsConsumer>
    )
}

export default Spotlight;