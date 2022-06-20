import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Dropdown from './Dropdown'
import Link from 'next/link'
import { client, createProfile } from '../api';
import { ethers } from "ethers";

export default function Navbar() {

    const [profile, setProfile] = useState();

    async function createProfile() {
        try {
          const response = await client.query(createProfile, ).toPromise();
          console.log({ response });
        } catch (error) {
          console.log({ error });
        }
      }

      async function connect() {
        const accounts = await window.ethereum.request({ 
          method: "eth_requestAccounts" 
        });
        console.log({ accounts });
      }

    return (
        <nav className='h-16 w-full shadow-md flex bg-white justify-between fixed z-10 px-[400px]'>
            <div className='flex h-full'>
                <Link href="/">
                    <a className='rounded-full'>
                        <img className='h-10 w-auto mt-3 mx-2  md:mx-10 rounded-full shadow-md' src='/lens.png' alt='The Spot Events' />
                    </a>
                </Link>
            </div>
            <div className='md:flex justify-start w-[35%] h-full text-sm hidden'>
                <div className='py-3 px-2' onClick={createProfile}>
                    <Dropdown title='Create Profile' chevron={false} />
                </div>
                <div className='py-3 px-2' onClick={connect}>
                    <Dropdown title='Connect' chevron={false} />
                </div>
            
            </div>
        </nav>
    )
}