import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
    {
        id: 1,
        image:
            'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Personalized Gift Boxes',
        subtitle: 'Make every occasion special',
        price: 'From $49.99',
        buttonText: 'Shop Now',
    },
    {
        id: 2,
        image:
            'https://images.unsplash.com/photo-1512909481869-0eaa1e9817ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Valentine Specials',
        subtitle: 'Express your love with a gift',
        price: 'From $39.99',
        buttonText: 'Explore',
    },
    {
        id: 3,
        image:
            'https://images.unsplash.com/photo-1610377507996-dcd4f0cfc125?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Birthday Surprises',
        subtitle: 'Celebrate with a big smile',
        price: 'From $29.99',
        buttonText: 'View Collection',
    },
    {
        id: 4,
        image:
            'https://images.unsplash.com/photo-1512909481869-0eaa1e9817ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Valentine Specials',
        subtitle: 'Express your love with a gift',
        price: 'From $39.99',
        buttonText: 'Explore',
    },
    {
        id: 5,
        image:
            'https://images.unsplash.com/photo-1610377507996-dcd4f0cfc125?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Birthday Surprises',
        subtitle: 'Celebrate with a big smile',
        price: 'From $29.99',
        buttonText: 'View Collection',
    },
    {
        id: 6,
        image:
            'https://images.unsplash.com/photo-1610377507996-dcd4f0cfc125?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Birthday Surprises',
        subtitle: 'Celebrate with a big smile',
        price: 'From $29.99',
        buttonText: 'View Collection',
    },
];

// Responsive height utility: 600px on desktop, 60vw on tablet, 50vw on mobile, min 220px, max 600px
const responsiveHeight =
    'h-[50vw] min-h-[220px] max-h-[600px] sm:h-[60vw] md:h-[500px] lg:h-[600px]';

const Header = () => {
    return (
        <div className="relative w-full rounded-lg overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                navigation={{
                    prevEl: '.custom-swiper-button-prev',
                    nextEl: '.custom-swiper-button-next',
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className={`w-full ${responsiveHeight}`}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="w-full h-full relative bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30">
                                <div className="container mx-auto px-4 h-full flex items-center">
                                    <div className="max-w-2xl text-white space-y-6 transform transition-all duration-500 hover:scale-105">
                                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
                                            {slide.title}
                                        </h2>
                                        <p className="text-base sm:text-xl md:text-2xl text-gray-200">
                                            {slide.subtitle}
                                        </p>
                                        <p className="text-lg sm:text-2xl font-semibold text-pink-400">
                                            {slide.price}
                                        </p>
                                        <button className="px-6 sm:px-8 py-2 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 flex items-center justify-center !text-white w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 cursor-pointer">
                <RiArrowLeftLine className="w-6 h-6" />
            </div>
            <div className="custom-swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 z-10 flex items-center justify-center !text-white w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 cursor-pointer">
                <RiArrowRightLine className="w-6 h-6" />
            </div>
        </div>
    );
};

export default Header;
