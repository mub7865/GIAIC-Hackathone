import React from 'react'
import { IoClose } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'

const Header2 = () => {
  return (
    <div>
        {/* header */}
        
        <header className='bg-[#2A254B] lg:w-full  w-[390px] h-[41px] flex lg:justify-between px-[17px]'>
                <div className='flex gap-x-2 items-center lg:ml-[39.5%]'>
                    <TbTruckDelivery size={24} />
                    <p className='text-sm leading-[18.9px] text-white'>Free delivery on all orders over £50 with code easter checkout</p>
                </div>
                <IoClose size={24} className='my-2' />
            </header>

    </div>
  )
}

export default Header2
