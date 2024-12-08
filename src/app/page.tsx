import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";
import Listing2 from "@/components/Listing2";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Features/>
    <Listing/>
    <Listing2/>
    <SignUp/>
    <Footer/>
    
    </>
  );
}
