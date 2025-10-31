"use client";
import { AuthContext } from "./hooks/AuthContext";
import { AuthUser } from "./collections/types";


const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const simulatedUser: AuthUser = {
        isAuthenticated: true,
        user: {
            role: "provider",
            firstName: "Amabella",
            lastName: "Nwankwo",
            imageUrl: ""
        }
       
    };

    return <AuthContext.Provider value={simulatedUser}>{children}</AuthContext.Provider>;
}

export default AuthWrapper