import { useState } from 'react';
import {
    RiMenuFill,
    RiCloseLargeLine,
    RiSearchLine,
    RiShoppingCartFill,
    RiUserAddFill,
    RiLogoutCircleRLine,
} from '@remixicon/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Auth simulation

    const handleLoginLogout = () => {
        setIsLoggedIn((prev) => !prev);
    };

    return (
        <nav className="bg-[#FFCCEA] shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-pink-700">
                    🎁 ShubGift
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="text-gray-700 hover:text-pink-700 font-medium">Home</Link>
                    <Link to="/shop" className="text-gray-700 hover:text-pink-700 font-medium">Shop</Link>
                    <Link to="/about" className="text-gray-700 hover:text-pink-700 font-medium">About</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-pink-700 font-medium">Contact</Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {/* Search Box */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search gifts..."
                            className="px-3 py-1 rounded-full border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-pink-600">
                            <RiSearchLine />
                        </span>
                    </div>

                    {/* Cart Icon */}
                    <div className="relative">
                        <RiShoppingCartFill className="text-pink-600 cursor-pointer" size={22} />
                        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1">4</span>
                    </div>

                    {/* Auth Logic */}
                    {!isLoggedIn ? (
                        <Link to="/add-user" className="text-pink-600 flex items-center space-x-1 hover:underline" onClick={handleLoginLogout}>
                            <RiUserAddFill />
                            <span className="hidden md:inline"></span>
                        </Link>
                    ) : (
                        <Link onClick={handleLoginLogout} className="text-pink-600 hover:text-red-500">
                            <RiLogoutCircleRLine size={22} title="Logout" />
                        </Link>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <RiCloseLargeLine className="text-pink-600" /> : <RiMenuFill className="text-pink-600" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-3 space-y-2">
                    <Link to="#" className="block text-gray-700 hover:text-pink-700">Home</Link>
                    <Link to="/shop" className="block text-gray-700 hover:text-pink-700">Shop</Link>
                    <Link to="/about" className="block text-gray-700 hover:text-pink-700">About</Link>
                    <Link to="/contact" className="block text-gray-700 hover:text-pink-700">Contact</Link>

                    <div className="relative mt-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-1 rounded-full border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-pink-600">
                            <RiSearchLine />
                        </span>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
