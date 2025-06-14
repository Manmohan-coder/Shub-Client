import Sidebar from './Sidebar';
import UserTable from './UserTable';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import CartTable from './CartTable';
import { useState } from 'react';
import { RiUser6Line, RiAddFill, RiListView, RiShoppingBagFill, RiWallet3Fill } from "@remixicon/react";
export default function AdminDashboard() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Mobile Toggle */}
            <div className="md:hidden p-4 flex justify-between items-center bg-white shadow">
                <h1 className="text-xl font-bold text-[#FF5151]">Admin Panel</h1>
                <button
                    className="text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Sidebar for desktop */}
            <div className="hidden md:block w-64 h-screen bg-white shadow-md p-6">
                <ul className="space-y-4 text-gray-700">
                    <li className="hover:text-[#FF5151] cursor-pointer">Users</li>
                    <li className="hover:text-[#FF5151] cursor-pointer">Add Product</li>
                    <li className="hover:text-[#FF5151] cursor-pointer">Product List</li>
                    <li className="hover:text-[#FF5151] cursor-pointer">Cart</li>
                </ul>
            </div>

            {/* Bottom Navigation for mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center py-2 border-t border-gray-200 z-10">
                <div className="flex flex-col items-center text-gray-700 hover:text-[#FF5151] cursor-pointer">
                    <RiUser6Line />
                    <span className="text-xs">Users</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 hover:text-[#FF5151] cursor-pointer">
                    <RiAddFill />
                    <span className="text-xs">Add</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 hover:text-[#FF5151] cursor-pointer">
                    <RiListView />
                    <span className="text-xs">Products</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 hover:text-[#FF5151] cursor-pointer">
                    <RiShoppingBagFill />
                    <span className="text-xs">Cart</span>
                </div>
                <div className="flex flex-col items-center text-gray-700 hover:text-[#FF5151] cursor-pointer">
                    <RiWallet3Fill />
                    <span className="text-xs">Payment</span>
                </div>
            </div>

            

            {/* Main Content */}
            <main className="flex-1 p-4  pb-20 md:pb-6 space-y-10 overflow-auto">
                <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4">👤 User Management</h2>
                    <UserTable />
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4">📦 Add Product</h2>
                    <ProductForm />
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4">🛒 Product List</h2>
                    <ProductTable />
                </section>

                <section>
                    <h2 className="text-xl md:text-2xl font-bold mb-4">🧺 Cart Management</h2>
                    <CartTable />
                </section>
            </main>
        </div>
    );
}