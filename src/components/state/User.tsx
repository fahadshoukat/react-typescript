import React, { useState } from 'react'
type AuthUser = {
    name: string,
    email: string
}
const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Fahad',
            email: 'fahad@example.com'
        })
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <p>User Name is {user.name}</p>
        <p>User Email is {user.email}</p>
    </div>
  )
}

export default User