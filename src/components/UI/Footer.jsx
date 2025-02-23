import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-[#202020] text-white py-8"> {/* Reduced padding from py-12 to py-8 */}
            <div className="container mx-auto px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-24 gap-8">
                    {/* About Section */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">World Atlas</h3>
                        <p className="text-gray-400">
                            Explore the world with our comprehensive atlas. Discover countries, cultures, and landmarks.
                        </p>
                        {/* Location Section */}
                        <div className="mt-4 flex items-center space-x-2">
                            <FaLocationDot className="text-gray-400" />
                            <p className="text-gray-400">Karachi, Sindh</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                          <NavLink to="/country" > <li>Countries</li></NavLink> 
                          <NavLink to="/about" ><li>Maps</li></NavLink> 
                          <NavLink to="/about" ><li>About US</li></NavLink> 
                          <NavLink to="/contact" ><li>Contact</li></NavLink> 
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 cursor-pointer rounded-lg bg-[#171019] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-[#171019] cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-[#130c13] transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#494749] mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} World Atlas. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};