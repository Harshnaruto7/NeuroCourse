"use client"
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import NavItems from './Navitems';

const Navbar = () => {
  return (
      <nav className='navbar'>
          <Link href="/">
              <div className='flex items-center gap-2.5 cursoer-pointer'>
                  <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={60}
                  height={60}
                  >
                      
                </Image>
                  
              </div>
          </Link>
          <div className='flex items-center gap-8'>
             <NavItems/>
              <p>Sign in</p>
        </div>


      </nav>
  )
}

export default Navbar;