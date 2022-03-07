import React from 'react'
import Image from "next/image";
import { SearchIcon, ShoppingCartIcon, } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/solid';
// import { session } from 'next-auth/client';
// import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
function Header() {
    //  const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)
    return (
        <header>
            {/* //top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-400 hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                    <SearchIcon className='h-12 p-4' />

                </div>

                {/* // right div */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6 white'>

                    <div
                        //  onClick={!session ? signIn : signOut}
                        className='link cursor-pointer'>
                        <p className="hover:underline">
                            {/* {session ? `Hello, ${session.user.name}` : "Sign In" } */}
                        </p>
                        <p className='font-extrabold md:text-sm'>Accounts & Lists</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& orders</p>
                    </div>
                    <div className='relative link flex items-center'
                        onClick={() => router.push('/checkout')}
                    >
                        <span className="absolute top-0 right-0
                                  md:right-10 h-4 w-10 bg-yellow-400 text-center
                                  rounded-full text-black font-bold">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className='h-10' />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>

            {/* // bottom nav */}
            <div className='flex items-center  space-x-3 justify-between pl-6 bg-amazon_blue text-white text-sm pb-2'>
                <p className='link items-center'>
                    <MenuIcon className='h-6  mr-1' /> All
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon bussiness</p>
                <p className='link'>Today`s Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex px-4'>Health & personal Care</p>
            </div>
        </header>
    )
}

export default Header
