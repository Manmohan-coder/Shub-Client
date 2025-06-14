export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
            <h1 className="text-2xl font-bold mb-6 text-[#FF5151]">Admin Panel</h1>
            <ul className="space-y-4 text-gray-700">
                <li className="hover:text-[#FF5151] cursor-pointer">Users</li>
                <li className="hover:text-[#FF5151] cursor-pointer">Add Product</li>
                <li className="hover:text-[#FF5151] cursor-pointer">Product List</li>
                <li className="hover:text-[#FF5151] cursor-pointer">Cart</li>
            </ul>
        </aside>
    );
}
