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
        <nav className='h-16 w-full shadow-md flex bg-white justify-between fixed z-10 px-[300px]'>
            <div className='flex h-full'>
                <Link href="/">
                    <a className='rounded-full'>
                        <img className='h-10 w-auto mt-3 mx-2  md:mx-10 rounded-full shadow-md' src='/lens.png' alt='The Spot Events' />
                    </a>
                </Link>
                <div className="flex justify-center">
                    <div className="flex">
                        <div className="input-group flex md:w-[500px] mb-3 mt-2 md:shadow-md rounded-md">
                            <button className="px-6 py-2.5 bg-white md:bg-gray-200 text-white font-medium text-xs leading-tight uppercase rounded-tl-md rounded-bl-md transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="black" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                            <input type="search" className="form-control rounded-tr-md hidden rounded-br-md focus:outline-none relative md:block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-gray-200" placeholder="Search Users" aria-label="Search" aria-describedby="button-addon2" />
                        </div>
                    </div>
                </div>
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