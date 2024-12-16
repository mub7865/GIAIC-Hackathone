import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
           <Header/>
            <main>
                <section className=" pt-9 lg:pt-16 pl-6 lg:pl-[188px] pr-6 lg:pr-[193px] bg-[#F9F9F9] text-[#2A254B]">
                    <h1 className="text-[24px] leading-[33.6px]   lg:text-[36px] lg:leading-[50.4px] ">Your shopping cart</h1>

                    <table className="mt-12 w-full lg:w-full">
                        <thead className='max-sm:hidden'>
                            <tr className="text-[#2A254B]">
                                <td className='text-sm leading-[19.6px]'>Product</td>
                                <td className='text-sm leading-[19.6px]'>Quantity</td>
                                <td className='text-sm leading-[19.6px]'>Total</td>
                            </tr>
                        </thead>

                        <div className="max-sm:hidden lg:mt-3 lg:w-[145%] h-[1px] bg-[#EBE8F4]"></div>

                        <tbody>
                            <tr >
                                <td>
                                    <div className= "lg:pt-5 flex gap-x-[21px] lg:items-center">
                                        <Image src="/cardImg1.png" alt="Failed to load" width={109} height={134}></Image>
                                        <div className=" lg:my-[20px] text-[#2A254B] space-y-2">
                                            <h4 className="text-[16px] leading-[20px]">Graystone vase</h4>
                                            <p className="text-sm w-[179px]">A timeless ceramic vase with
                                                a tri color grey glaze.</p>
                                            <p >£85</p>
                                            <div className="lg:hidden py-3 px-4  max-sm:visible flex items-center gap-x-8">
                                                <span className="text-[#EBE8F4]">+</span>
                                                <span>1</span>
                                                <span className="text-[#EBE8F4]">-</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="max-sm:hidden lg:flex lg:py-3 lg:px-4  items-center gap-8">
                                        <span className="text-[#EBE8F4]">+</span>
                                        <span>1</span>
                                        <span className="text-[#EBE8F4]">-</span>
                                    </div>
                                </td>

                                <td className="max-sm:hidden">£85</td>
                            </tr>

                            <tr className='mb-4'>
                                <td>
                                    <div className="mt-7  flex gap-x-[21px] sm:items-center">
                                    <Image src="/cardImg.png" alt="Failed to load" width={109} height={134}></Image>
                                    <div className="space-y-2 lg:mt-[17px]">
                                            <h4 className="text-[16px] leading-[20px]">Basic white vase</h4>
                                            <p className="text-sm w-[179px]">ABeautiful and simple this is
                                                one for the classics</p>
                                            <p >£85</p>
                                            <div className=" lg:hidden py-3 px-4  max-sm:visible flex items-center gap-x-8">
                                                <span className="text-[#EBE8F4]">+</span>
                                                <span>1</span>
                                                <span className="text-[#EBE8F4]">-</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="max-sm:hidden lg:flex lg:py-3 lg:px-4  items-center gap-8">
                                        <span className="text-[#EBE8F4]">+</span>
                                        <span>1</span>
                                        <span className="text-[#EBE8F4]">-</span>
                                    </div>
                                </td>

                                <td className="max-sm:hidden">£85</td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="mt-[33px] w-full h-[1px] bg-[#EBE8F4]"></div>

                    <div className="pt-7 pb-[55px] lg:pb-[48px] w-fit ml-auto">
                        <div className="space-y-3">
                            <div className="flex gap-x-4 items-center w-fit ml-auto">
                                <h4 className="text-[#4E4D93]">Subtotal</h4>
                                <h3 className=" text-[#2A254B]">£210</h3>
                            </div>
                            <p className="lg:whitespace-nowrap lg:w-fit text-right text-sm text-[#4E4D93]">Taxes and shipping are calculated at checkout</p>
                        </div>
                        <button type="submit" className="bg-[#2A254B] lg:w-full block w-fit ml-auto text-white py-4 mt-8 lg:mt-4 px-[117px] lg:px-[48px]">Go to checkout</button>
                    </div>
                </section>
            </main>
          <Footer/>
        </>
    )
}

export default page
