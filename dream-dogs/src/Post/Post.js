import React from 'react';

function Post() {
    return (
        <>
        <header>
            <h1>New Post</h1>
        </header>
        <section>
            <form id="record-dream">
                <div class="form-section">
                    <label for="dog-name">Dog Name</label>
                    <input type="text" name="dog-name" placeholder="Jax" required />
                </div>
                <div class="form-section">
                    <label for="owner-email">Email</label>
                    <input type="email" name="owner-email" placeholder="sallysomething@something.com" required />
                </div>
                <div class="form-section">
                    <label for="breed">Breed</label>
                    <input type="text" name="breed" placeholder="maltipoo" required />
                </div>
                <div class="hours-slept-container" class="form-section">
                    <label for="dog-bday">Birthdate</label>
                    <input type="date" name="dog-bday" />
                </div>
                <div class="form-section">
                    <label for="dog-lifestyle">Dog Lifestyle</label>
                    <textarea name="dog-lifestyle"rows="15" placeholder="Please enter a description of your dogs needs and lifestyle"   required></textarea>
                </div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
            </section>
        </>
    )
}

export default Post;