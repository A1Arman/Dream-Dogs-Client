import React from 'react';

function Post(props){
        return (
            <main>
            <header>
                <h1>New Post</h1>
            </header>
            <section>
                <form id="record-dream" onSubmit={props.addPost}>
                    <div className="form-section">
                        <label htmlFor="dog_name">Dog Name</label>
                        <input type="text" name="dog_name" placeholder="Jax" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="owner_email">Email</label>
                        <input type="email" name="owner_email" placeholder="sallysomething@something.com" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" name="breed" placeholder="maltipoo" required />
                    </div>
                    <div className="hours-slept-container" className="form-section">
                        <label htmlFor="dog_bday">Birthdate</label>
                        <input type="date" name="dog_bday" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="lifestyle">Dog Lifestyle</label>
                        <textarea name="lifestyle"rows="15" placeholder="Please enter a description of your dogs needs and lifestyle"   required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
                </section>
            </main>
    )
}  

export default Post;