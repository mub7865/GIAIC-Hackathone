import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
           <Header/>
            <main>
                <section className=" pt-9 lg:pt-16 pl-6 lg:pl-[188px] pr-6 lg:pr-[193px] bg-[#F9F9F9] ">
                    <h1 className="lg:text-[24px]">Your shopping cart</h1>

                    <table className="mt-12 w-full">
                        <thead className="lg:hidden">
                            <tr className="border-b border-[#EBE8F4] pb-4 body-lg">
                                <td>Product</td>
                                <td>Quantity</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" lg:pt-5 ">
                                <td>
                                    <div className="flex gap-x-[21px] lg:items-center">
                                        <Image src={'/cardImg.png'} width={109} height={134} alt="Failed to load" ></Image>
                                        <div className="space-y-2 lg:mt-[19px]">
                                            <h4 className="text-[16px] leading-[20px]">Graystone vase</h4>
                                            <p className="text-lg w-[179px]">A timeless ceramic vase with
                                                a tri color grey glaze.</p>
                                            <p >£85</p>
                                            <div className="py-3 px-4  lg:visible flex items-center gap-x-8">
                                                <span className="text-[#EBE8F4]">+</span>
                                                <span>1</span>
                                                <span className="text-[#EBE8F4]">-</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="py-3 px-4 lg:hidden flex items-center gap-x-8">
                                        <span className="text-[#EBE8F4]">+</span>
                                        <span>1</span>
                                        <span className="text-[#EBE8F4]">-</span>
                                    </div>
                                </td>

                                <td className="lg:hidden">£85</td>
                            </tr>

                            <tr className=" lg:pt-5 border-b border-[#EBE8F4] pb-4 ">
                                <td className="">
                                    <div className="flex gap-x-[21px] lg:items-center">
                                        <Image src={'/cardImg1.png'}  width={109} height={134} alt="Failed to load"></Image>
                                        <div className="space-y-2 lg:mt-[17px]">
                                            <h4 className="text-[16px] leading-[20px]">Basic white vase</h4>
                                            <p className="text-lg w-[179px]">ABeautiful and simple this is
                                                one for the classics</p>
                                            <p >£85</p>
                                            <div className="py-3 px-4  lg:visible flex items-center gap-x-8">
                                                <span className="text-[#EBE8F4]">+</span>
                                                <span>1</span>
                                                <span className="text-[#EBE8F4]">-</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="py-3 px-4 lg:hidden flex items-center gap-x-8">
                                        <span className="text-[#EBE8F4]">+</span>
                                        <span>1</span>
                                        <span className="text-[#EBE8F4]">-</span>
                                    </div>
                                </td>

                                <td className="lg:hidden">£85</td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="pt-7 pb-[55px] lg:pb-[48px] w-fit ml-auto">
                        <div className="space-y-3">
                            <div className="flex gap-x-4 items-center w-fit ml-auto">
                                <h4 className="text-[#2A254B]"> Subtotal</h4>
                                <h3 className=" text-[#2A254By]">£210</h3>
                            </div>
                            <p className="lg:whitespace-nowrap lg:w-fit ml-auto text-lg text-[#2A254B]">Taxes and shipping are calculated at checkout</p>
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
