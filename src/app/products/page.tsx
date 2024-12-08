import Footer2 from '@/components/Footer2'
import Navbar2 from '@/components/Navbar2'
import React from 'react'
import Image from 'next/image'
import Features from '@/components/Features'
import Listing from '@/components/Listing'
import About2 from '@/components/About2'
import Listing2 from '@/components/Listing2'

const Products = () => {
       
  return (
    
    <div>
        
      <Navbar2/>
      <main>
             <div className='w-[390px] lg:w-full '>
                <Image src={'/productListing.png'} alt='Image Not Found' width={721} height={759}></Image>
                <div className='lg:py-[51px] '>
                      <div></div>
                </div>
         
             </div>
      <Listing/>
       <Features/>
       <About2/>
      </main>
     

      <Footer2/>
    </div>
  )
}

export default Products
