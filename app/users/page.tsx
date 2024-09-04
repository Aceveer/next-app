import React from 'react'

interface User{
  id: number;
  name: string;
  email:string;
}

const UsersPage = async() => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // {cache: 'no-store'} //disables caching
    // {next: {revalidate:10}} //runs background job and gets fresh data every 10 seconds
  );
  const users:User[] = await res.json();
  return (
  <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table>
      <thead>
        <tr>
          <th>User Name</th>
          <th>User Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user =>
        <tr key={user.id}>
          <th>{user.name}</th>
          <th>{user.email}</th>
        </tr>
      )}
      </tbody>
    </table>
  </>
  )
}

export default UsersPage
