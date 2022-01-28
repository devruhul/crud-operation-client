import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    let { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    return (
        <div>
            <h2>update user name ::  {user.name}</h2>
        </div>
    );
};

export default UpdateUser;