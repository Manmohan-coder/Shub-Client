import { RiHeartLine, RiShoppingCartLine } from '@remixicon/react';
import HeaderSlider from './Header';
import { useState } from 'react';

const products = [
  {
    id: 1,
    image: "https://i.postimg.cc/8PkwdTYd/image.png",
    name: "AIR ZOOM PEGASUS",
    beforePrice: "$990.00",
    nowPrice: "$749.00",
    bgColor: "bg-[#E3F8FF]",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/4dBHXR1Z/image.png",
    name: "AIR ZOOM PEGASUS",
    beforePrice: "$990.00",
    nowPrice: "$749.00",
    bgColor: "bg-[#DCFAFB]",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    name: "AIR ZOOM PEGASUS",
    beforePrice: "$990.00",
    nowPrice: "$749.00",
    bgColor: "bg-[#FFE8DF]",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    name: "AIR ZOOM PEGASUS",
    beforePrice: "$990.00",
    nowPrice: "$749.00",
    bgColor: "bg-[#DCFAFB]",
  },

];

export default function ProductGrid() {
  const [activeCard, setActiveCard] = useState(null)
  return (
    <>
      <HeaderSlider />
      <div className="max-w-7xl mx-auto py-12 bg-white text-[#161616] font-sans">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold ml-4 sm:ml-6 md:ml-10 relative inline-block after:content-[''] after:absolute after:top-1/2 after:left-full after:w-10 after:h-[2px] after:bg-[#161616] after:ml-2">
          Products
        </h1>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto mt-10">
          {products.map((product) => (
            <article
              key={product.id}
              onClick={() => setActiveCard(product.id === activeCard? null:product.id)}
              className={`group relative flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-xl overflow-hidden transition-shadow duration-300 sm:hover:shadow-lg ${product.bgColor}`}
            >
              {/* Product image */}
              <div className={`w-32 sm:w-36 md:w-40 py-6 sm:py-8 transition-transform duration-500 ${product.id===activeCard? 'rotate-[30deg] ml-6 sm:ml-0':''}`}>
                <img src={product.image} alt={product.name} className="w-full" />
              </div>

              {/* Vertical text bar */}
              <div className={`absolute ${product.id === activeCard ? 'left-0' : 'left-[-30%]'} top-0 w-10 sm:w-12 h-full bg-[#161616] text-white text-[10px] sm:text-xs md:text-sm font-bold flex items-center justify-center transition-all duration-500 sm:group-hover:left-0 [writing-mode:vertical-rl] rotate-180`}>
                <p>{product.name}</p>
              </div>

              {/* Price and icons */}
              <div className="flex justify-between items-end w-full px-2 mt-6 transition-all duration-500 sm:group-hover:ml-10">
                <a href="#" className="text-lg sm:text-xl text-[#161616] hover:text-[#FF5151]">
                  <RiHeartLine size={20} />
                </a>
                <div className="text-center">
                  <span className="block text-xs text-[#FF5151] mb-1 line-through">
                    {product.beforePrice}
                  </span>
                  <span className="text-sm font-bold">{product.nowPrice}</span>
                </div>
                <a href="#" className="text-lg sm:text-xl text-[#161616] hover:text-[#FF5151]">
                  <RiShoppingCartLine size={20} />
                </a>
              </div>
            </article>
          ))}
        </main>

      </div>
    </>
  );
}
