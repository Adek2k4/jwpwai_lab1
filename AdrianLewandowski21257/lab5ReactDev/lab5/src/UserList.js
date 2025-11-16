import React, { useState, useEffect } from 'react';
function UserList() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);
    
    const addNewUser = () => {
        const newUser = { name: 'Nowy Użytkownik'+Math.floor(Math.random()*100) };
        setUsers(prevUsers => [...prevUsers, newUser]); // spread do dodawania
    };
    
    return (
        <div>
            <button onClick={addNewUser}>Dodaj użytkownika</button>
            <ul>
            {users.map(user => (
                <li key={user.id}> {user.name} </li>
            ))}
            </ul>
        </div>
    );
}
export default UserList;