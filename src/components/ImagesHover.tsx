"use client"
import { Products } from '@/utils/mock';
import Image from 'next/image';
import React, { useState } from 'react'

const ImagesHover = () => {
    const [image, setImage] = useState("/belowhero1.webp");
    const images = ["/belowhero1.webp", "/belowhero2.webp", "/belowhero3.webp"];

    return (
        <div className='flex ml-0'>
            <div>
                {images.map((img) => {
                    return (
                        <div key={img} onMouseOver={() => { setImage(img) }}>
                            <Image src={img} alt="Image" className='w-20 h-20' width={100} height={100} />
                        </div>
                    );
                })}
            </div>
            <div className=''>
                <Image src={image} alt="Nouman" className='w-[35rem] h-[35rem]' width={400} height={400} />
            </div>
        </div>
    );
}
export default ImagesHover