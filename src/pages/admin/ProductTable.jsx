export default function ProductTable() {
    const products = [
        { id: 1, name: 'Mug', price: '₹199' },
    ];

    return (
        <table className="w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-[#FF5151] text-white">
                <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map(prod => (
                    <tr key={prod.id} className="border-t">
                        <td className="p-3">{prod.name}</td>
                        <td className="p-3 text-center">{prod.price}</td>
                        <td className="p-3 text-center space-x-2">
                            <button className="text-blue-600 hover:underline">Edit</button>
                            <button className="text-red-600 hover:underline">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
