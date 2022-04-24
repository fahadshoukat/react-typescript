import React, { useState } from 'react'
type AuthUser = {
    name: string,
    email: string
}
const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Fahad',
            email: 'fahad@example.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>User Name is {user?.name}</p>
        <p>User Email is {user?.email}</p>
    </div>
  )
}

export default User