import { createContext, useState } from "react"

export type UserAuth = {
    name: string
    email: string
}

type UserContextProviderProps = {
    children : React.ReactNode
}

type UserContextType = {
    user: UserAuth | null
    setUser: React.Dispatch<React.SetStateAction<UserAuth | null>>
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<UserAuth | null>(null);

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}