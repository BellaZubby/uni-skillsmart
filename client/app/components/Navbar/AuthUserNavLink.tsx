import { NavLinkProps } from '@/app/collections/types'
import Link from 'next/link'



const AuthUserNavLink = ({to, label}: NavLinkProps) => {
  return (
    <Link href={to} className="font-cabin text-[16px] text-primary-100 hover:text-primary-100/80 cursor-pointer transition-colors duration-200">{label}</Link>
  )
}

export default AuthUserNavLink