import { RiHeartLine, RiShoppingCartLine } from '@remixicon/react';
import HeaderSlider from './Header';
import { useNavigate } from 'react-router-dom';
import { products } from './data';
import { useEffect, useRef, useState } from 'react';
import useIsMobileOrTablet from '../components/useIsMobileOrTablet';

export default function ProductGrid() {
  const isMobile = useIsMobileOrTablet();
  const [activeCard, setActiveCard] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);

  const cardRefs = useRef([]);
  const navigate = useNavigate()
  const navigateHandler = (id) => {
    navigate(`/product/${id}`)
  }

  useEffect(() => {
    if (isMobile) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const visibleCardId = Number(entry.target.getAttribute('data-id'));
              setActiveCard(visibleCardId);
            } else {
              const cardId = Number(entry.target.getAttribute('data-id'));
              setActiveCard(prev => prev === cardId ? null : prev);
            }
          });
        },
        {
          threshold: 0.5,
        }
      ); const refs = cardRefs.current;
      refs.forEach(ref => {
        if (ref) observer.observe(ref);
      });

      return () => {
        refs.forEach(ref => {
          if (ref) observer.unobserve(ref);
        });
      };
    } else {
      // On desktop, no cards should be active by default
      setActiveCard(null);
    }
  }, [isMobile]);

  const handleCardInteraction = (product) => {
    if (isMobile) {
      setActiveCard(prev => prev === product.id ? null : product.id);
    } else {
      navigateHandler(product.id);
    }
  };

  const handleMouseEnter = (productId) => {
    if (!isMobile) {
      setHoverCard(productId);
      setActiveCard(null); // Clear any active state when hovering
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoverCard(null);
    }
  };

  return (
    <>
      <HeaderSlider />
      <div className="max-w-7xl mx-auto py-12 bg-white text-[#161616] font-sans">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold ml-4 sm:ml-6 md:ml-10 relative inline-block after:content-[''] after:absolute after:top-1/2 after:left-full after:w-10 after:h-[2px] after:bg-[#161616] after:ml-2">
          Products
        </h1>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto mt-10">
          {products.map((product, index) => {
            const isActive = activeCard === product.id;
            const isHovered = hoverCard === product.id;
            const showEffects = isActive || isHovered;

            return (
              <article
                onClick={() => handleCardInteraction(product)}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
                key={product.id}
                data-id={product.id}
                ref={el => (cardRefs.current[index] = el)}
                className={`group relative flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-xl overflow-hidden shadow-sm transition-all duration-500 ease-in-out will-change-transform ${product.bgColor} 
                  ${showEffects ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-lg active:scale-[0.98]'}
                  cursor-pointer select-none`}
              >
                {/* Product image */}
                <div className={`w-32 sm:w-36 md:w-40 py-6 sm:py-8 transition-all duration-500 ease-in-out will-change-transform
                  ${showEffects ? 'rotate-[30deg] ml-6 sm:ml-0 scale-105' : ''}`}>
                  <img src={product.image[0]} alt={product.name} className="w-full" />
                </div>

                {/* Vertical text bar */}
                <div className={`absolute left-[-30%] top-0 w-10 sm:w-12 h-full bg-[#161616] text-white text-[10px] sm:text-xs md:text-sm font-bold flex items-center justify-center transition-all duration-500 ease-in-out will-change-left [writing-mode:vertical-rl] rotate-180 
                  ${showEffects ? 'left-[0.1%]' : ''}`}>
                  <p>{product.name}</p>
                </div>

                {/* Stock Label */}
                <div className={`absolute ${product.inStock ? 'text-emerald-500' : 'text-red-500'} top-5 py-1 px-2 right-2 bg-black text-sm sm:text-xs md:text-sm font-medium text-center flex items-center justify-center rounded-lg transition-colors duration-300`}>
                  <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
                </div>

                {/* Price and icons */}
                <div className={`flex justify-between items-end w-full px-2 mt-6 transition-all duration-500 ${showEffects ? 'ml-10' : ''}`}>
                  <a href="#" className="text-lg sm:text-xl text-[#161616] hover:text-[#FF5151] active:text-[#FF5151] transition-colors duration-300">
                    <RiHeartLine size={20} />
                  </a>
                  <div className="text-center">
                    <span className="block text-xs text-[#FF5151] mb-1 line-through">
                      {product.beforePrice}
                    </span>
                    <span className="text-sm font-bold">{product.nowPrice}</span>
                  </div>
                  <a href="#" className="text-lg sm:text-xl text-[#161616] hover:text-[#FF5151] active:text-[#FF5151] transition-colors duration-300">
                    <RiShoppingCartLine size={20} />
                  </a>
                </div>
              </article>
            );
          })}
        </main>
      </div>
    </>
  );
}
