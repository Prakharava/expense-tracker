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
        <Button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-indigo-700 hover:border-indigo-700">Get Started</Button>
    </div>
  )
}

export default Header