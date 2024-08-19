import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Review from './Review';
const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews);


    return (
        <>
        <div className='text-center'>
            <h1 className='font-bold text-4xl'>What Our Patients Says</h1>
            <p className=' mb-16 mt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
            <Swiper

                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={100}
                pagination={{
                    type: 'fraction',
                }}
                breakpoints={{
                    
                    100: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >



                {
                    reviews.map(review => (<SwiperSlide> <Review
                        review={review}
                        key={review._id}
                    ></Review>   </SwiperSlide>)
                    )
                }







            </Swiper>


        </>
    );
};

export default Reviews;