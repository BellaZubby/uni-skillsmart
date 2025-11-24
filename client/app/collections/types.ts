export interface NavLinkProps {
    to: string;
    label: string;
    toggleMobileMenu?: () => void;
}

// export interface ProfileTypes {
    
// }
// to define role based display of navbar for logged in user
// export type UserRole = "admin" | "client" | "provider";
export type UserRole = "client" | "provider";

export interface User {
        role: "client" | "provider";
        firstName?: string;
        lastName?: string;
        imageUrl?: string;
        email: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user:  User | null;
}