export interface NavLinkProps {
    to: string;
    label: string;
    toggleMobileMenu?: () => void;
}

// export interface ProfileTypes {
    
// }
// to define role based display of navbar for logged in user
export type UserRole = "admin" | "client" | "provider";

export interface AuthUser {
    isAuthenticated: boolean;
    user: {
        role: UserRole;
        firstName: string;
        lastName: string;
        imageUrl: string;
    }
}