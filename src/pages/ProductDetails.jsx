import { useState } from "react";
import ProductReviews from "./Comments";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { products } from "./data";
import { useParams } from "react-router-dom";



export default function GiftProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const [selectedImage, setSelectedImage] = useState(product.image[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [customName, setCustomName] = useState("");
    const [customMessage, setCustomMessage] = useState("");

    return (
        <>
            <div className="overflow-x-hidden">
                    <div className="max-w-6xl mx-auto px-4 py-10 font-sans grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                        {/* Mobile Swiper */}
                        <div className="block md:hidden w-full overflow-hidden rounded-xl shadow-md">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                onSlideChange={(swiper) =>
                                    setSelectedImage(product.image[swiper.activeIndex])
                                }
                            >
                                {product.image.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img
                                            src={img}
                                            alt={`product-${idx}`}
                                            className="w-full h-max-h-screen sm:max-h-screen object-cover rounded-xl"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Desktop & Tablet View */}
                        <div className="hidden md:flex flex-col gap-4">
                            <img
                                src={selectedImage}
                                alt="Gift"
                                className="rounded-xl w-full max-h-screen object-cover shadow-md"
                            />
                            <div className="flex flex-wrap gap-3">
                                {product.image.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`thumb-${idx}`}
                                        className={`w-20 h-20 rounded-lg cursor-pointer border-2 object-cover ${selectedImage === img
                                            ? "border-[#FF5151]"
                                            : "border-gray-300"
                                            }`}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Details */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#161616] mb-1">
                                    {product.name}
                                </h2>
                                <strike className="text-xs sm:text-xl text-[#FF5151] font-semibold">{product.beforePrice}</strike>
                                <p className="text-lg sm:text-xl text-[#FF5151] font-semibold">{product.nowPrice}</p>
                                <p className="text-sm sm:text-base text-gray-600 mt-2">{product.description}</p>
                            </div>

                            {/* Meta Info */}
                            <div className="text-sm sm:text-base text-gray-700 space-y-1">
                                <p><span className="font-semibold">Type:</span> {product.type}</p>
                                <p><span className="font-semibold">Category:</span> {product.category}</p>
                                <p>
                                    <span className="font-semibold">Availability:</span>{" "}
                                    {product.inStock ? (
                                        <span className="text-green-600 font-medium">In Stock</span>
                                    ) : (
                                        <span className="text-red-500 font-medium">Out of Stock</span>
                                    )}
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={i < 4 ? "#facc15" : "none"}
                                        viewBox="0 0 24 24"
                                        stroke="#facc15"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.093 6.419a1 1 0 00.95.69h6.751c.969 0 1.371 1.24.588 1.81l-5.47 3.986a1 1 0 00-.364 1.118l2.093 6.419c.3.921-.755 1.688-1.54 1.118l-5.47-3.985a1 1 0 00-1.176 0l-5.47 3.985c-.784.57-1.838-.197-1.539-1.118l2.093-6.419a1 1 0 00-.364-1.118L2.098 11.846c-.783-.57-.38-1.81.588-1.81h6.75a1 1 0 00.951-.69l2.093-6.419z"
                                        />
                                    </svg>
                                ))}
                                <span className="text-sm text-gray-500 ml-2">(120 reviews)</span>
                            </div>

                            {/* Material */}
                            <p className="font-medium text-sm sm:text-base">
                                Material: <span className="text-gray-700">{product.material}</span>
                            </p>

                            {/* Size Selector */}
                            <div>
                                <label className="font-medium block mb-1 text-sm sm:text-base">Size:</label>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            className={`px-4 py-2 border rounded-lg text-sm sm:text-base ${selectedSize === size
                                                ? "bg-[#FF5151] text-white"
                                                : "border-gray-300 text-gray-700"
                                                }`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selector */}
                            <div>
                                <label className="font-medium block mb-1 text-sm sm:text-base">Color:</label>
                                <div className="flex gap-3 mt-2">
                                    {product.colors.map((color) => (
                                        <div
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color ? "border-[#FF5151]" : "border-gray-300"
                                                }`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Custom Name */}
                            <div>
                                <label className="font-medium block mb-1 text-sm sm:text-base">Custom Name:</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5151]"
                                    placeholder="Enter a name"
                                    value={customName}
                                    onChange={(e) => setCustomName(e.target.value)}
                                />
                            </div>

                            {/* Custom Message */}
                            <div>
                                <label className="font-medium block mb-1 text-sm sm:text-base">Custom Message:</label>
                                <textarea
                                    rows="3"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5151]"
                                    placeholder="Enter your message"
                                    value={customMessage}
                                    onChange={(e) => setCustomMessage(e.target.value)}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#FF5151] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e04343] transition">
                                    Add to Cart
                                </button>
                                <button className="border border-[#FF5151] text-[#FF5151] px-6 py-3 rounded-xl font-semibold hover:bg-[#FF5151] hover:text-white transition">
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>

                <ProductReviews />
            </div>
        </>
    );
}