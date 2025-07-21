import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from "../../assets/img/aiAgent/modal3.png";
import img2 from "../../assets/img/aiAgent/modal4.png";
import img3 from "../../assets/img/aiAgent/modal5.png";
import img4 from "../../assets/img/aiAgent/modal6.png";

export default function ModalSlider({ onClick }) {
    const [isNextSlide, setIsNextSlide] = useState(false);
    const swiperRef = useRef(null);
    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            setIsNextSlide(swiperInstance.isEnd);
        }
    }, []);
    const nextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handleSlideChange = () => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            setIsNextSlide(swiperInstance.isEnd);
        }
    };
    const SliderItem = [
        {
            title: "Great work! Before setting it live, you can power Al Agent with more knowledge using Guidance",
            img: img2,
            des: "Write text-based instructions that explain your policies and processes so it can perform like a real agent.",
        },
        {
            title: "Connect 3rd party apps to automate requests with Actions",
            img: img1,
            des: "Use your ecommerce tools to resolve common and repetitive asks from your customers, like changing their shipping address.",
        },
        {
            title: "Assess Al Agent's knowledge in the test area, then set it live!",
            img: img3,
            des: "Simulate real interactions in test mode to build confidence in Al Agent's performance. Once you feel good about its responses, set it live!",
        },
        {
            title: "Assess Al Agent's knowledge in the test area, then set it live!",
            img: img4,
            des: "Simulate real interactions in test mode to build confidence in Al Agent's performance. Once you feel good about its responses, set it live!",
        },
    ];
    return (
        <div data-aos="fade-up" data-aos-offset="0">
            <Swiper
                className='testimonial-slider'
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
                centeredSlides={false}
                pagination={{ clickable: true }}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSlideChange={handleSlideChange}
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
            >
                {SliderItem.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='text-center'>
                            <h6 className='text-[#0A0D14] font-inter text-base md:text-lg lg:text-xl xl:text-2xl font-semibold !leading-[1.5] mb-4 lg:mb-5'>{item.title}</h6>
                            <img src={item.img} className='w-full md:h-[174px] mb-4 lg:mb-5' alt="" />
                            <div className='md:px-20'>
                                <p className='text-xs text-[#858585] !leading-[1.6] mb-4 lg:mb-5'>{item.des}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-nav flex items-center justify-center gap-3 lg:gap-4" data-aos="fade-up" data-aos-offset="0">
                <button className="btn !text-[#7856FF] hover:!text-white" title='previous' onClick={onClick}>
                    Cancel
                </button>
                <button className="btn !bg-[#7856FF] !text-white" title='next' onClick={nextSlide} disabled={isNextSlide}>
                    Next
                </button>
            </div>
        </div>
    );
}
