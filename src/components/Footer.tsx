import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import Link from "next/link";



export const Footer = () => {
    return (
        <footer className="bg-[#2A254B] w-[390px] lg:w-full text-white pt-[40px] lg:pt-[58px] pb-6 px-6 sm:px-[82px]">
            <section className="grid grid-cols-2 gap-x-[96px] lg:flex sm:justify-between pb-12 border-b border-[#4E4D93]">

                <div className="space-y-3 sm:w-max">
                    <h5>Menu</h5>
                    <ul className="space-y-3">
                        <li>New arrivals</li>
                        <li>Best sellers</li>
                        <li>Recently viewed</li>
                        <li>Popular this week</li>
                        <li>All products</li>
                    </ul>
                </div>

                <div className="space-y-3 sm:-order-1">
                    <h5>Categories</h5>
                    <ul className="space-y-3">
                        <li>Crockery</li>
                        <li>Furniture</li>
                        <li>Homeware</li>
                        <li>Plant pots</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                    </ul>
                </div>

                <div className="space-y-3 sm:mt-10">
                    <h5>Our company</h5>

                    <ul className="space-y-3">
                    <Link href='/about'><li>About us</li></Link> 
                    <li>Vacancies</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                        <li>Returns policy</li>
                    </ul>
                </div>

                <div className="space-y-4 col-span-2 sm:mt-10">
                    <h5>Join our mailing list</h5>

                
                    <form className="lg:w-[627px] flex">
                        <input type="email" placeholder="your@email.com" className="py-4 px-6 h-[57px] lg:px-8 bg-[#ffffff26] grow" />
                        <button type="submit" className="bg-white text-[#2A254B] h-[57px] pl-4 px-7 ">Sign up</button>
                    </form>
                </div>
            </section>




            <section className="pt-6 flex lg:justify-between items-center justify-center">
                <p className="font-normal text-sm leading-[18.9px]">Copyright 2022 Avion LTD</p>

                <div className="flex gap-x-6 sm:hidden">
                    <FaLinkedin size={24}/>
                    <ImFacebook2 size={24}/>
                    <LuInstagram size={24} />
                    <FaSkype size={24}/> 
                    <FaTwitter size={24}/>
                    <FaPinterestSquare size={24}/>
                  
                </div>
            </section>
        </footer>
    )
}