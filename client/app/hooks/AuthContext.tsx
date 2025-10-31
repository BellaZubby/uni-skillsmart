"use client"

// simulating a logged in user => using useContext
import { createContext, useContext } from "react"
import { AuthUser } from "../collections/types"

// export const AuthContext = createContext<AuthUser>({
//     isAuthenticated: true,
//     role: "client",
//     name: "Amabella",
//     imageUrl: ""
// });

export const AuthContext = createContext<AuthUser | null>(null);

// export const useAuth = () => useContext(AuthContext);
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within an AuthProvider");

    return context;
};