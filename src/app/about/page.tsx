import About2 from '@/components/About2';
import Features from '@/components/Features';
import Footer2 from '@/components/Footer2';
import Listing2 from '@/components/Listing2';
import Navbar2 from '@/components/Navbar2';
import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5';
import { TbTruckDelivery } from "react-icons/tb";

const About = () => {
    return (
        <>
            {/* header */}
            <header className='bg-[#2A254B] lg-w-full lg:w-[390] h-[41px] flex lg:justify-between px-[17px]'>
                <div className='flex gap-x-2 items-center lg:ml-[39.5%]'>
                    <TbTruckDelivery size={24} />
                    <p className='body-sm text-white'>Free delivery on all orders over £50 with code easter checkout</p>
                </div>
                <IoClose size={24} className='my-2' />
            </header>

            <Navbar2 />



            <main>
                <section className='max-sm:space-y-10 px-6 sm:px-[128px] py-8 sm:py-[88px] lg:flex justify-between'>
                    <h1 className=' lg:w-[704px] font-normal lg:text-[36px] lg:leading-[50.4px] text-[#2A254B] '>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
                    <button className=' h-[54px]  py-[16px] px-[100px] lg:px-8 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal  bg-[#F9F9F9] text-[#2A254B] '>
                        View collection
                    </button>
                </section>

                <Listing2 />
                <section className='sm:grid grid-cols-2'>
                    <Image src="/about-2.png" alt="failed" width={720} height={603} />

                    <div className='bg-[#F9F9F9] px-6 sm:pl-[84px] sm:pr-[100px] py-12 sm:pt-[72px] sm:pb-14 space-y-12 sm:space-y-[25px] flex flex-col justify-between'>
                        <div className='flex flex-col gap-[25px]'>
                            <h3 className='text-[#2A254B] text-[24px] lg:leading-[33.6px] '>Our service isn’t just personal, it’s actually hyper personally exquisite</h3>
                            <p className='text-[#505977] text-[18px] lg:leading-[21.6px]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
                            <p className='text-[#505977] text-[18px] lg:leading-[21.6px]'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>
                        <div>
                            <button className='h-[54px]  py-[16px] px-[100px] lg:px-8 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal  bg-white text-[#2A254B] '>Get in touch</button>
                        </div>
                    </div>
                </section>
                <Features />



                <About2 />



            </main>

            <Footer2 />
        </>

    )
}

export default About