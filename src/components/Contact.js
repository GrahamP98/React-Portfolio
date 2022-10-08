import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { checkEmail } from '../utils/helpers';

function Contact() {
    const [state, handleSubmit] = useForm('xdojzabb');

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    function refreshPage() {
        window.location.reload(false);
    }


    if (state.succeeded) {
        return (
            <div>
                <p>Your message has been sent!</p>
                <button className="button is-medium is-link is-half m-6" onClick={refreshPage}>Submit New Form</button>
            </div>
        );
    }


    const verifyChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = checkEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('invalid email');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <body className='layout'>
            <p className="content is-medium">Contact Me</p>
            <hr />
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field m-6">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input" type="text" name="name" placeholder='John Doe' defaultValue={name} onBlur={verifyChange} />
                </div>
                <div className="field m-6">
                    <label className="label" htmlFor="email">Email Address:</label>
                    <input className="input" type="email" name="email" placeholder='johndoe123@gmail.com' defaultValue={email} onBlur={verifyChange} />
                </div>
                <div className="field m-6">
                    <label className="label" htmlFor="message">Message:</label>
                    <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={verifyChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="is-danger">{errorMessage}</p>
                    </div>
                )}
                <button className="button is-dark is-large is-responsive is-underlined" data-testid="button" type="submit">Submit</button>
            </form>
        </body>
    );
}

export default Contact;