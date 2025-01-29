import { NavLink } from "react-router"
import ImageWithText from "../pages/Image";
import Footer from "./Footer";


const Navbar = () => {
  return (
   <>

    <nav className=" bg-gray-900 text-white sticky w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
        
                <div className="flex items-center justify-between w-full">

                    <div>
                        <NavLink to="/" className="text-white text-4xl font-semibold"
                         style={{ fontFamily: "var(--logo-font)" }}
                        > <span className="text-pink-500 text-4xl">CODINg</span> <span className="text-4xl ml-2">Heroes</span></NavLink>
                    </div>

                    <div >
                    {['Home', 'About', 'Hackathon', 'Projects', 'Contact'].map((link) => {
    return (
        <NavLink 
            key={link} 
            to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} 
            className={({ isActive }) => `${isActive ? "bg-pink-500" : ""} px-4 py-2 rounded`}
        >
            {link}
        </NavLink>
    );
})}
                    </div>
        
                </div>

             
                <div className="md:hidden">
                    <button id="menuBtn" className="text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>


        <div id="mobileMenu" className="md:hidden hidden bg-white shadow-md">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Projects</a>
            <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Contacts</a>
              
        </div>
          
    </nav>
    

   </>

  )
}

export default Navbar