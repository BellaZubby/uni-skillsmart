import { FaBriefcase, FaCalendarCheck, FaCircleCheck, FaClipboardCheck, FaFileContract, FaMagnifyingGlass, FaStar, FaUser } from "react-icons/fa6"
import { NavLinkProps, Steps } from "./types"

export const navList:NavLinkProps[] = [
    {
        to: "home",
        label: "Home"
    },
    {
        to: "how-it-works",
        label: "How It Works"
    },
    {
        to: "explore",
        label: "Explore Skills"
    },
    {
        to: "benefits",
        label: "Benefits"
    },
    {
        to: "testimonials",
        label: "Testimonials"
    },
    {
        to: "contact",
        label: "Contact"
    },
]

export const authList:NavLinkProps[] = [
    {
        to: "/dashboard",
        label: "Dashboard"
    },
]
export const providerNavList:NavLinkProps[] = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/dashboard",
        label: "Dashboard"
    },
    {
        to: "/profile",
        label: "profile"
    },
    {
        to: "/requests",
        label: "Requests"
    },
    {
        to: "/earnings",
        label: "Earnings"
    },
    // profile
]
export const clientNavList:NavLinkProps[] = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/profile",
        label: "Profile"
    },
    {
        to: "/explore",
        label: "Explore Skills"
    },
    {
        to: "/bookings",
        label: "Bookings"
    },
    {
        to: "/messages",
        label: "Messages"
    },
    // profile
]
export const userAvatarList:NavLinkProps[] = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/notifications",
        label: "Notifications"
    },
    {
        to: "/settings",
        label: "Settings"
    },
    {
        to: "/report",
        label: "Report"
    },
    // profile
]
export const mobileClienList:NavLinkProps[] = [
    {
        to: "/",
        label: "Home"
    },
    {
        to: "/notifications",
        label: "Notifications"
    },
    {
        to: "/settings",
        label: "Settings"
    },
    {
        to: "/report",
        label: "Report"
    },
     {
        to: "/explore",
        label: "Explore Skills"
    },
    {
        to: "/bookings",
        label: "Bookings"
    },
    {
        to: "/messages",
        label: "Messages"
    },
    // profile
]

export const clientSteps: Steps[] = [
    {
        title: "Sign Up", detail: "Create a client profile with limited access until verified.", icon: FaUser,
        stepNumber: 1
    },
    {
        title: "Verification", detail: "Upload student ID for admin approval.", icon: FaCircleCheck,
        stepNumber: 2
    },
    {
        title: "Explore & Connect", detail: "Browse skills and message providers.", icon: FaMagnifyingGlass,
        stepNumber: 3
    },
    {
        title: "Agree & Schedule", detail: "Upload service details for admin approval.", icon: FaFileContract,
        stepNumber: 4
    },
    {
        title: "Deliver & Rate", detail: "Complete service, pay in person, and rate providers.", icon: FaStar,
        stepNumber: 5
    },
]

export const providerSteps: Steps[] = [
    {
        title: "Sign Up", detail: "Create a provider profile with limited access until verified.", icon: FaUser,
        stepNumber: 1
    },
    {
        title: "Verification", detail: "Upload student ID for admin approval.", icon: FaCircleCheck,
        stepNumber: 2
    },
    {
        title: "Showcase Skills", detail: "Add and update skills in your profile.", icon: FaBriefcase,
        stepNumber: 3
    },
    {
        title: "Manage Bookings", detail: "Agreements approved by admin appear on your dashboard.", icon: FaCalendarCheck,
        stepNumber: 4
    },
    {
        title: "Deliver & Grow", detail: "Complete service, payment in person, and get rated.", icon: FaClipboardCheck,
        stepNumber: 5
    },

]