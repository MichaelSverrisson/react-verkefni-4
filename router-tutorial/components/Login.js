import React, { useState } from 'react';
import ProTypes from 'prop-types';


async function loginUser(credentials){
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({ setToken }){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return(
        <div className='innskra-wrapper'>
            <h1>Innskráning</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Notandanafn</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>lykilorð</p>
                    <input type="password"  onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="innskra">Innskrá</button>
                </div>
            </form>
        </div>
    );
}

Login.ProTypes = {
    setToken: ProTypes.func.isRequired
}