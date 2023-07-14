import Image from 'next/image'
import React from 'react'
import JewelryImg from '/public/belowhero3.webp'
import { Button } from '@/components/ui/button'

const Jewelry = () => {
    return (
        <div>
            <h1 className='flex flex-col items-center text-7xl ml-96 mt-40 mb-20'>Unique and Authentic Vintage Designer Jewellery</h1>
            <div className='flex gap-20'>
                <div className='relative'>
                    <div className='absolute z-10 flex-1 w-1/2 flex flex-col gap-16'>
                        <div className='flex gap-20'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='font-bold text-xl'>Using Good Quality Materials</h2>
                                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='font-bold text-xl'>100% Handmade Products</h2>
                                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className='flex gap-20'>
                            <div className='flex flex-col gap-6'>
                                <h2 className='font-bold text-xl'>Modern Fashion Design</h2>
                                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h2 className='font-bold text-xl'>Discount for Bulk Orders</h2>
                                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>

                    <h1 className='text-5xl text-gray-400 font-bold'>Different from Others</h1>
                </div>
                <div className='flex-1 w-1/2 flex gap-8'>
                    <Image className='h-full w-auto object-cover' src={JewelryImg} alt="Jewelry" />
                    <div className='flex flex-col justify-center gap-6'>
                        <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Button >See All Products</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jewelry