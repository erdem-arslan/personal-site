"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Skills} from '../../mocks/skills';

const breakpoints = {
    250: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 10,
    },
    
};

function index() {
  return (
        <div>
                <div className='mr-5 mb-10 bg-card-bg px-5 py-5 shadow-default rounded-3xl'>
                        <Swiper
                        spaceBetween={10}
                        centeredSlides={false}
                        slidesPerView={5}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={breakpoints}
                        autoplay={{delay: 2000 }}
                        slidesPerGroup={2}
                        grabCursor={true}>

                        {Skills.map((Skills) => (
                            <SwiperSlide key={Skills.id}>
                             <a href={Skills.url} target="_blank" rel='noopener noreferrer'> <img src={Skills.image}  alt={Skills.title} className='w-24 rounded' /></a> 
                            </SwiperSlide>
                        ))}                          
                    </Swiper>
                </div>
        </div>
    )
}

export default index