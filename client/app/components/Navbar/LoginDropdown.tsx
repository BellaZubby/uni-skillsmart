"use client"
// Dropdown for login to display client and providers
import { motion } from "framer-motion";
import Link from "next/link";




const LoginDropdown = () => {
    
    return (
        <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:absolute md:left-[-70px] w-40 md:top-full mt-2 bg-white shadow-lg md:rounded-md z-50"
    >
      <ul className="flex flex-col p-2 space-y-2 text-sm text-gray-700">
        <li>
          <Link href="/login/client"> As Client</Link>
        </li>
        <li>
          <Link href="/login/provider">As Provider</Link>
        </li>
      </ul>
    </motion.div>

    )
}

export default LoginDropdown;