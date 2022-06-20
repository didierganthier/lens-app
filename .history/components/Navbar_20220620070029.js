import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Dropdown from './Dropdown'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='h-16 w-full shadow-md bg-[rgb(172,254,44)] flex justify-between fixed z-10'>
            <div className='flex w-[40%] h-full'>
                <Link href="/">
                    <a>
                        <img className='h-10 w-auto mt-3 mx-2  md:mx-10' src='/lens.png' alt='The Spot Events' />
                    </a>
                </Link>
                
            </div>
            <div className='md:flex justify-start w-[35%] h-full text-sm hidden'>
                <div className='py-3 px-2'>
                    <Dropdown title='Organize' items={['Why The Spot', 'Pricing', 'Resources']} />
                </div>
                <div className='py-3 px-2'>
                    <Dropdown title='Help' items={['Find your tickets', 'Contact an event organizer', 'Visit the help center']} />
                </div>
                <div className='py-3 px-2'>
                    <Dropdown title='Create an Event' chevron={false} />
                </div>
                <div className='py-3 px-2'>
                    <Dropdown title='Login' chevron={false} />
                </div>
                <div className='py-3 px-2'>
                    <Dropdown title='Sign Up' chevron={false} />
                </div>
            </div>
        </nav>
    )
}