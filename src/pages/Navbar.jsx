import { useState, useEffect, useRef } from 'react';
import {
    RiMenuFill,
    RiCloseLargeLine,
    RiSearchLine,
    RiShoppingCartFill,
    RiUserAddFill,
    RiLogoutCircleRLine,
    RiUser3Fill,
    RiUserSettingsFill,
} from '@remixicon/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLogoutUser, checkAuthStatus } from '../stores/actions/userActions';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const profileRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const isLoggedIn = useSelector((state) => state.user?.isAuthenticated || false);
    const user = useSelector((state) => state.user?.user || null);

    useEffect(() => {
        // Check authentication status on component mount
        dispatch(checkAuthStatus());
    }, [dispatch]);

    useEffect(() => {
        // Handle click outside of profile menu
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await dispatch(asyncLogoutUser());
        setProfileMenuOpen(false);
        navigate('/add-user');
    };

    return (
        <nav className="bg-[#FFCCEA] shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-pink-700">
                    🎁 ShubGift
                </div>

                {/* Desktop NavLinks */}
                <div className="hidden md:flex space-x-6 items-center">
                    <NavLink to="/" className={({ isActive }) => `hover:text-pink-700 font-medium ${isActive ? 'text-pink-700' : ''}`}>Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => `hover:text-pink-700 font-medium ${isActive ? 'text-pink-700' : ''}`}>Category</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `hover:text-pink-700 font-medium ${isActive ? 'text-pink-700' : ''}`}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `hover:text-pink-700 font-medium ${isActive ? 'text-pink-700' : ''}`}>Contact</NavLink>
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
                    {isLoggedIn ? (
                        <div className="relative" ref={profileRef}>
                            <button 
                                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                                className="flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition-colors duration-200"
                            >
                                <RiUser3Fill size={22} />
                                <span className="hidden md:inline">{user?.name || 'Profile'}</span>
                            </button>
                            
                            {/* Profile Dropdown */}
                            {profileMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                                    <NavLink
                                        to="/profile"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 transition-colors duration-200"
                                        onClick={() => setProfileMenuOpen(false)}
                                    >
                                        <RiUserSettingsFill className="mr-2" />
                                        My Profile
                                    </NavLink>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-pink-50 transition-colors duration-200"
                                    >
                                        <RiLogoutCircleRLine className="mr-2" />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <NavLink 
                            to="/add-user" 
                            className="text-pink-600 flex items-center space-x-2 hover:text-pink-800 transition-colors duration-200"
                            title="Login/Register"
                        >
                            <RiUserAddFill size={22} />
                            <span className="hidden md:inline">Login</span>
                        </NavLink>
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
                    <NavLink to="/" className={({ isActive }) => `block hover:text-pink-700 ${isActive ? 'text-pink-700' : ''}`}>Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => `block hover:text-pink-700 ${isActive ? 'text-pink-700' : ''}`}>Shop</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `block hover:text-pink-700 ${isActive ? 'text-pink-700' : ''}`}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `block hover:text-pink-700 ${isActive ? 'text-pink-700' : ''}`}>Contact</NavLink>

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
