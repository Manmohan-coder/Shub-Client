
import { RiHomeFill } from '@remixicon/react';

const categories = [
    { name: 'Birthday Gifts', icon: <RiHomeFill />, color: 'bg-pink-100' },
    { name: 'Anniversary Gifts', icon: <RiHomeFill />, color: 'bg-red-100' },
    { name: 'New Born', icon: <RiHomeFill/>, color: 'bg-blue-100' },
    { name: 'Personalized', icon: <RiHomeFill />, color: 'bg-yellow-100' },
    { name: 'Home Decor', icon: <RiHomeFill />, color: 'bg-green-100' },
];

const CategoryGrid = () => {
    return (
        <section className="py-12 bg-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Shop by Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-6 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ${category.color}`}
                        >
                            <div className="text-4xl text-pink-600 mb-3">{category.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 text-center">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
