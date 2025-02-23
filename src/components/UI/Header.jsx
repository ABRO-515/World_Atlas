import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom"
import { IoClose } from "react-icons/io5";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className="w-full h-full bg-[#202020]" >

                <div className=" border-b border-[#494749] " >
                    <div className="navbar md:mx-24 mx-8  items-center md:py-8 py-4   text-white flex justify-between  ">
                        <h1 className="md:text-3xl text-2xl " >WorldAtlas</h1>

                        {/* Hidden on Mobile Devices */}
                        <ul className="hidden lg:flex gap-4 text-xl" >
                            <NavLink to="/" ><li className="cursor-pointer" >Home</li></NavLink>
                            <NavLink to="/about" ><li className="cursor-pointer" >About</li></NavLink>
                            <NavLink to="/country" ><li className="cursor-pointer" >Country</li></NavLink>
                            <NavLink to="/contact" ><li className="cursor-pointer" >Contact</li></NavLink>
                        </ul>

                        <div className="lg:hidden text-2xl" onClick={toggleMenu} >
                            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
                        </div>

                    </div>
                </div>


                {/* Visible on Mobile Devices */}
                {isOpen && (
                    <div className="bg-[#202020] text-white flex flex-col" >
                        <ul className="items-center justify-center flex flex-col gap-2 text-xl py-2" onClick={toggleMenu} >
                            <NavLink to="/" ><li className="cursor-pointer " >Home</li></NavLink>
                            <NavLink to="/about" ><li className="cursor-pointer" >About</li></NavLink>
                            <NavLink to="/country" ><li className="cursor-pointer" >Country</li></NavLink>
                            <NavLink to="/contact" ><li className="cursor-pointer" >Contact</li></NavLink>
                        </ul>
               

                        <button className="text-xl bg-[#171019] hover:bg-[#130d14] w-fit mx-auto px-24  py-2 rounded-[10px]" >Sign In</button>
                        <button className="text-xl bg-[#171019] hover:bg-[#130d14] w-fit mx-auto  px-8 py-2  my-2 rounded-[10px]" >Create an account</button>
                      
                    </div>
                )}


            </header>
        </>
    )
}
