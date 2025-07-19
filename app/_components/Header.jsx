import React from 'react'
import Image from 'next/image';      
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <div className="p-5 flex justify-between items-center bg-gray-100 border-b shadow">
        <Image src={'/Logo.svg'}
            alt="Logo"
            width={50}
            height={50}
        />
        <Button>Get Started</Button>
    </div>
  )
}

export default Header