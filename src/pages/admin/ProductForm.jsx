import { useState } from 'react';

export default function ProductForm() {
    const [form, setForm] = useState({
        name: '',
        price: '',
        image: '',
        description: '',
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("New product added:", form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
            <input
                name="name"
                placeholder="Product Name"
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                name="price"
                placeholder="Price"
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <input
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                className="w-full p-2 border rounded"
            />
            <button type="submit" className="bg-[#FF5151] text-white px-4 py-2 rounded">
                Add Product
            </button>
        </form>
    );
}
