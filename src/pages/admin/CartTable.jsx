export default function CartTable() {
    const cartItems = [
        { id: 1, product: 'Teddy Bear', quantity: 2 },
    ];

    return (
        <table className="w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-[#FF5151] text-white">
                <tr>
                    <th className="p-3 text-left">Product</th>
                    <th className="p-3 text-center">Qty</th>
                    <th className="p-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(item => (
                    <tr key={item.id} className="border-t">
                        <td className="p-3">{item.product}</td>
                        <td className="p-3 text-center">{item.quantity}</td>
                        <td className="p-3 text-center">
                            <button className="text-red-600 hover:underline">Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
