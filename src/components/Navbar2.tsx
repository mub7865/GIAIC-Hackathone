'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { IoSearch } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <header className="w-[390px] h-[69px] flex flex-col lg:items-center FFFFFF  lg:w-full lg:h-[132px] ">
                <div className="hidden   lg:h-1/2 lg:w-full lg:mx-auto lg:flex justify-between items-center">
                    <h1 className="lg:ml-10 text-[#22202E] text-2xl font-semibold">Avion</h1>
                    <div className='flex gap-[47px] lg:mr-10 '>
                        <ul className='hidden  lg:flex gap-[32px] '>
                            <li className='font-normal text-[16px]   leading-[21.6px]'>About</li>
                            <li className='font-normal text-[16px]   leading-[21.6px]'>Contact</li>
                            <li className='font-normal text-[16px]   leading-[21.6px]'>Blog</li>

                        </ul>
                        <div className="flex text-xl gap-3">
                            <IoSearch className="text-xl" />

                            <Link href="/cart"><MdOutlineShoppingCart /></Link>
                            <CgProfile />
                        </div>
                    </div>
                </div>

                <div className="lg:hidden  flex justify-between ">
                    <h1 className="text-[#22202E] text-2xl font-semibold ml-6 my-[19px]">Avion</h1>
                    <div className="flex gap-5 my-[26px] mr-5">
                        {/* Search */}
                        <IoSearch className="text-[16px] block" />
                        {/* menubar */}
                        <template className="block ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" onClick={() => { setIsOpen(!isOpen) }}>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 4H6m12 4H6m12 4H6" />
                            </svg>
                        </template>
                    </div>
                </div>

                {isOpen == true ? (
                    <nav className="absolute top-[124px] left-0 flex flex-col gap-2 w-[390px] lg:h-1/2 px-5 py-5 bg-[#2A254B] text-white">
                        <Link href="/" className="hover:text-[#444242]">About</Link>
                        <Link href="/" className="hover:text-[#444242]">Contact</Link>
                        <Link href="/" className="hover:text-[#444242]">blog</Link>
                        <Link href="/" className="hover:text-[#444242] ">Plant pots</Link>
                        <Link href="/" className="hover:text-[#444242]">Ceramics</Link>
                        <Link href="/" className="hover:text-[#444242]">Tables</Link>
                        <Link href="/" className="hover:text-[#444242]">Chairs</Link>
                        <Link href="/" className="hover:text-[#444242]">Crockery</Link>
                        <Link href="/" className="hover:text-[#444242]">Tableware</Link>
                        <Link href="/" className="hover:text-[#444242]">Cutlery</Link>

                    </nav>
                ) : (
                    <div className='lg:w-full  lg:h-1/2 bg-[#F9F9F9] flex justify-between items-center '>
                        <nav className="hidden lg:flex lg:w-[675px] lg:mx-auto justify-between items-center text-[#726E8D]">
                            <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Plant pots</Link>
                            <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Ceramics</Link>
                            <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tables</Link>
                            <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Chairs</Link>
                            <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Crockery</Link>
                            <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tableware</Link>
                            <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Cutlery</Link>
                        </nav>
                    </div>
                )}

            </header>
        </div>
    )
}

export default Navbar2
