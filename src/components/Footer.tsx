

import logo from "@/images/logo.png";
import Image from "next/image";
import  Container from "./Container";
import React from "react";
import Link from "next/link";


interface FooterListProps{
  children: React.ReactNode;
}
const FooterList: React.FC<FooterListProps> = ({
  children }) =>{
      return (
          <div 
          className="
          w-full
          sm:w-1/2
          md:w-1/4
          lg:w-1/6
          flex
          flex-col
          gap-2"
          >
              {children}
          </div>
      )
  }
const Footer = () => {
  return (
    
    <footer className="bg-slate-800 text-gray-300 text-sm mt-16">
      <div className="w-full bg-white w-full h-40 border border-gray-400 py-10">
      <div>
        <p className="py-0.5 text-gray-600 flex items-center justify-center">See personalized recommendations</p>
      </div>
      <div className="flex items-center justify-center">
        <button  className=" font-bold border border-yellow-600 flex items-center justify-center text-black bg-yellow-300 py-1.5 px-24 rounded ">
          Sign in
        </button>
      </div>
      <div className="flex items-center justify-center py-1">
        <p className="text-gray-600 px-2">New customer?</p>
        <a href="#"  className="text-green-700 hover:text-red-700">Stat here.</a>
      </div>
      </div>
      <div className="w-full bg-white w-full h-6"></div>
      <div className="bg-slate-600 hover:bg-gray-700 w-full h-12 text-white flex items-center justify-center">
        <a href="#">Back to top</a>
      </div>
    <Container>
      <div className="flex flex-col md:flex-row justify-between pt-8 pb-12">
        <FooterList>
          <h3 style={{ fontWeight: 'bold', fontSize: '15px' }} className="text-white">Get to know Us</h3>
          <Link href={"#"} className="hover:text-white hover:underline">Carees</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Blog</Link>
          <Link href={"#"} className="hover:text-white hover:underline">About Amazon</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Investor Relations</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Amazon Device</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Amazon Science</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Carees</Link>
        </FooterList>
        <FooterList>
          <h3 style={{ fontWeight: 'bold', fontSize: '15px' }} className="text-white">Make Money With Uas</h3>
          <Link href={"#"} className="hover:text-white hover:underline">Sell products on Amazon</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Sell on Amazon Business</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Sell apps on Amazon</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Become an Affiliate</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Advertise Your Products</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Self-Publish with Us</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Host an Amazon Hub</Link>
          <Link href={"#"} className="hover:text-white hover:underline">›See More Make Money with Us</Link>
        </FooterList>
        <FooterList>
          <h3 style={{ fontWeight: 'bold', fontSize: '15px' }} className="text-white">Amazon Payment Products</h3>
          <Link href={"#"} className="hover:text-white hover:underline">Amazon Business Card</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Shop with Points</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Reload Your Balance</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Amazon Currency Converter</Link>
        </FooterList>
        <FooterList>
          <h3 style={{ fontWeight: 'bold', fontSize: '15px' }} className="text-white">Let Us Help You</h3>
          <Link href={"#"} className="hover:text-white hover:underline">Amazon and COVID-19</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Your Account</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Your Orders</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Shipping Rates & Policies</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Returns & Replacements</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Manage Your Content and Devices</Link>
          <Link href={"#"} className="hover:text-white hover:underline">Help</Link>
        </FooterList>

       
      </div>
    </Container>


    <div className="bg-slate-900 w-full h-24 text-gray-300 flex items-center justify-center gap-4">
      <Image src={logo} alt="logo" className="w-24" />
      <p  className="text-sm -mt-4">
        All rights reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://reactbd.com"
          target="_blank"
        >
          @reactbd.com
        </a>
        <button  className="px-4 py-1 border rounded" >
        English
      </button>
      <button  className="px-4 py-1 border rounded " style={{margin: '10px'}} >
        $ USD -U.S Dollar
      </button>
      <button className="px-4 py-1 border rounded" >
        United State
      </button>
      </p>
    </div>
    </footer>
  );
};
export default Footer;
