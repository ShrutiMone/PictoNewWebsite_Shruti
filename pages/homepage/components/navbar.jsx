// components/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#FFFFFF] p-4">
      <div className="container mx-auto flex items-center justify-between font-poppins font-[500] text-[15px]">
        <Link href="/" className="flex items-center">
            <Image src='/images/navrasLogo.png' alt="Logo" width={150} height={75} />
        </Link>
        <ul className="flex space-x-4 text-[#3a0622] ">
          <li>
            <Link href="/" className="text-[#d2b49a]">
              Home
            </Link>
          </li>
          <li>
            <a href="#events" className="hover:text-[#d2b49a]">Events</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-[#d2b49a]">Gallery</a>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-[#d2b49a]">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/ourteam" className="hover:text-[#d2b49a]">
              Our Team
            </Link>
          </li>
          <li className="navbar relative group">
            <button className="hover:text-[#d2b49a]">Magazines</button>
            <ul className="absolute left-[14px] top-[calc(100%_+_30px)] m-0 p-[10px_0] z-[99] opacity-0 invisible bg-white shadow-[0_0_30px_rgba(127,137,161,0.25)] transition duration-300">
              <li><a href="#magazine1" className="block px-4 py-2 min-w-[200px]">Volume 26</a></li>
              <li><a href="#magazine2" className="block px-4 py-2 min-w-[200px]">Volume 25</a></li>
              <li><a href="#magazine2" className="block px-4 py-2 min-w-[200px]">Volume 24</a></li>
              <li><a href="#magazine2" className="block px-4 py-2 min-w-[200px]">Volume 23</a></li>
              <li><a href="#magazine2" className="block px-4 py-2 min-w-[200px]">Volume 22</a></li>
              <li><a href="#magazine2" className="block px-4 py-2 min-w-[200px]">More...</a></li>
            </ul>
          </li>
          <li>
            <Link href="/contactus" className="hover:text-[#d2b49a]">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/contactus" className='bg-[#6f2143] px-6 py-2 ml-7 rounded font-normal text-white hover:bg-[rgba(58,6,34,1)] hover:scale-110 transition duration-300 ease-in-out'>
              Volume 26
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

//==========================================================================================
// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navbar flex items-center justify-between p-0 relative">
//       <ul className={`flex items-center space-x-8 ${isMobileMenuOpen ? "block" : "hidden"} md:flex`}>
//         <li><Link href="/"><a className="text-pink-800 font-medium hover:text-pink-600">Home</a></Link></li>
//         <li><Link href="#events"><a className="text-pink-800 font-medium hover:text-pink-600">Events</a></Link></li>
//         <li><Link href="#portfolio"><a className="text-pink-800 font-medium hover:text-pink-600">Gallery</a></Link></li>
//         <li><Link href="/PICTOBLOG/Main page/index.html"><a className="text-pink-800 font-medium hover:text-pink-600">Blogs</a></Link></li>
//         <li><Link href="/TeamMembers/OurTeam.html"><a className="text-pink-800 font-medium hover:text-pink-600">Our Team</a></Link></li>

//         <li className="relative">
//           <a href="#" className="text-pink-800 font-medium hover:text-pink-600 flex items-center">
//             Magazines <i className="bi bi-chevron-down ml-2 text-xs"></i>
//           </a>
//           <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
//             <li><Link href="/magazines/vol-26"><a className="block px-4 py-2 hover:bg-pink-100">Volume 26</a></Link></li>
//             <li><Link href="/magazines/vol-25"><a className="block px-4 py-2 hover:bg-pink-100">Volume 25</a></Link></li>
//             <li><Link href="/magazines/vol-24"><a className="block px-4 py-2 hover:bg-pink-100">Volume 24</a></Link></li>
//             <li><Link href="/magazines/vol-23"><a className="block px-4 py-2 hover:bg-pink-100">Volume 23</a></Link></li>
//             <li><Link href="/magazines/vol-22"><a className="block px-4 py-2 hover:bg-pink-100">Volume 22</a></Link></li>
//             <li><Link href="/magazines/index.html"><a className="block px-4 py-2 hover:bg-pink-100">More...</a></Link></li>
//           </ul>
//         </li>

//         <li><Link href="/contact"><a className="text-pink-800 font-medium hover:text-pink-600">Contact</a></Link></li>
//         <li><Link href="/magazines/vol-26"><a className="bg-purple-700 text-white py-2 px-6 rounded-lg hover:bg-purple-800">Volume 26</a></Link></li>
//       </ul>

//       <button className="bi bi-list text-pink-800 text-3xl md:hidden" onClick={toggleMobileMenu}></button>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="navbar-mobile fixed inset-0 bg-gray-800 bg-opacity-75 z-50 p-6">
//           <button className="bi bi-x text-white text-3xl absolute top-4 right-4" onClick={toggleMobileMenu}></button>
//           <ul className="space-y-6 text-center">
//             <li><Link href="/"><a className="text-white text-lg">Home</a></Link></li>
//             <li><Link href="#events"><a className="text-white text-lg">Events</a></Link></li>
//             <li><Link href="#portfolio"><a className="text-white text-lg">Gallery</a></Link></li>
//             <li><Link href="/PICTOBLOG/Main page/index.html"><a className="text-white text-lg">Blogs</a></Link></li>
//             <li><Link href="/TeamMembers/OurTeam.html"><a className="text-white text-lg">Our Team</a></Link></li>
//             <li><Link href="/magazines/vol-26"><a className="bg-purple-700 text-white py-2 px-6 rounded-lg">Volume 26</a></Link></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
