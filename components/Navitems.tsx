"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navItems = [
  {label:"Home",href:"/"},
  { label: "My Joureny", href: "/my-joureny" },
  { label: "Companions", href: "/companions" },
  { label: "Subscription", href: "/subscription" },

]




const NavItems = () => {

  const pathName = usePathname();

  return (
    <div className='flex items-center gap-4'>
      {
        navItems.map(({label,href})=>(
          <Link
            key={label}
            href={href}
          className={cn(pathName===href && "text-primary font-semibold")}
          >
            {label}
            </Link>
        ))
      }
    </div>
  )
}

export default NavItems