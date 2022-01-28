import React from 'react';
import { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleAddUser = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name, email }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Succesfully added user')
                    e.target.reset()
                }
                console.log(data)
            })

        e.preventDefault()
        // alternative to reset value form
        // nameRef.current.value = ''
        // emailRef.current.value = ''
    }

    return (
        <div>
            <h2>This is add user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder='type your name' />
                <input type="email" ref={emailRef} placeholder='type your email' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;