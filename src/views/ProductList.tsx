"use client"
import React from 'react'
import P1 from "/public/belowhero3.webp"
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'
import Wrapper from '@/components/shared/Wrapper'
import AddToCart from '@/components/ui/AddToCart'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ImagesHover from '@/components/ImagesHover'


const ProductList = () => {
    const productChunks = Products.slice(0, 5);

    return (
        <Wrapper>
            <div className='flex flex-col items-center w-full'>
                <div className='mt-20 font-bold text-blue-600 flex justify-center text-sm'>PRODUCTS</div>
                <div className='text-center font-bold text-4xl flex justify-center mt-6'>Check What We Have</div>
                <div className='flex w-full justify-center mx-auto mt-10'>
                    <Swiper
                        spaceBetween={10}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1: {
                                slidesPerView: 1, // Show 1 slide per view on screens smaller than 640px
                            },
                            451: {
                                slidesPerView: 3, // Show 3 slides per view on screens larger than or equal to 640px
                            },
                        }}
                    >
                        {productChunks.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    className='flex flex-col items-center transition-transform transform-gpu hover:scale-110'
                                    img={product.image}
                                    title={product.name}
                                    price={product.price}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <ProductCard img={P1} title='First Image' price={105} />
            <ProductCard img={P1} title='Second Image' price={135} />
            <ProductCard img={P1} title='Third Image' price={157} /> */}
                </div>
            </div>
        </Wrapper>
    )
}

export default ProductList