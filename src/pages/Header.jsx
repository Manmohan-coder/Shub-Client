import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

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

const HeaderSlider = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto mt-10 rounded-xl overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                effect="fade"
                loop
                className="w-full h-[400px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-4">
                                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                    {slide.title}
                                </h2>
                                <p className="text-lg mb-2">{slide.subtitle}</p>
                                <p className="text-md font-semibold mb-4">{slide.price}</p>
                                <button className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-full text-white text-sm">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="custom-swiper-button-prev absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-black/40 hover:bg-emerald-400/60 p-3 rounded-full cursor-pointer">
                    <RiArrowLeftLine className="text-white w-5 h-5" />
                </div>
                <div className="custom-swiper-button-next absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-black/40 hover:bg-cyan-400/60 p-3 rounded-full cursor-pointer">
                    <RiArrowRightLine className="text-white w-5 h-5 " />
                </div>
            </Swiper>
        </div>
    );
};

export default HeaderSlider;