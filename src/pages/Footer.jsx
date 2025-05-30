import { RiFacebookLine, RiInstagramLine, RiMailFill, RiTwitterLine } from '@remixicon/react'

const Footer = () => {
    return (
        <footer className="bg-[#FFCCEA] text-gray-700 mb-0">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-pink-700">🎁 ShubGift</h2>
                    <p className="mt-2 text-sm">
                        Your one-stop shop for heartwarming gifts, surprises, and unforgettable memories.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-pink-600 mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-pink-700">Home</a></li>
                        <li><a href="#" className="hover:text-pink-700">Shop</a></li>
                        <li><a href="#" className="hover:text-pink-700">About</a></li>
                        <li><a href="#" className="hover:text-pink-700">Contact</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-pink-600 mb-2">Gift Categories</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-pink-700">Birthday Gifts</a></li>
                        <li><a href="#" className="hover:text-pink-700">Anniversary Gifts</a></li>
                        <li><a href="#" className="hover:text-pink-700">Personalized</a></li>
                        <li><a href="#" className="hover:text-pink-700">Corporate Gifts</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-pink-600 mb-2">Subscribe</h3>
                    <p className="text-sm mb-2">Get updates on offers & new arrivals:</p>
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-1 rounded-full border border-zinc-800 focus:ring-1 focus:ring-blue-400"
                        />
                        <RiMailFill className="text-pink-600" />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#EF88AD] text-center py-4 ">
                <div className="flex flex-col md:flex-row justify-around items-center max-w-7xl mx-auto px-6">
                    <p className="text-base">&copy; {new Date().getFullYear()} ShubGift. All rights reserved.</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="#"><RiFacebookLine className="text-pink-600 hover:text-pink-800" /></a>
                        <a href="#"><RiInstagramLine className="text-pink-600 hover:text-pink-800" /></a>
                        <a href="#"><RiTwitterLine className="text-pink-600 hover:text-pink-800" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
