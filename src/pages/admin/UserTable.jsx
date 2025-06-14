export default function UserTable() {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
    ];

    return (
        <table className="w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-[#FF5151] text-white">
                <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id} className="border-t">
                        <td className="p-3">{user.name}</td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3 text-center">
                            <button className="text-red-600 hover:underline">Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
