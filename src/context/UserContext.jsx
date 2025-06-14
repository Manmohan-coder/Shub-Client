import { useState, createContext } from 'react'

export const UserDataContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const userUpdate = (userData) => {
        setUser(userData)
    }
    const value = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
        userUpdate
    }
    return (
        <>
            <UserDataContext.Provider value={{ value, setUser }}>
                {children}
            </UserDataContext.Provider>
        </>
    )
}

export default UserContext
