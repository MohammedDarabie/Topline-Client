// UserContext.js
import React, { useState, createContext, useContext } from 'react';

// Create Context
const UserContext = createContext(null);

// Create a Provider Component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    
    const updateUser = (userData) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};


const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { UserProvider, useUser };
