import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-100 flex my-40'>
            <div className='flex '>
                <Image alt="logo" src="/logo.png" width={150} height={150} />
                <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                <div>
                    Twitter, Facebook, Linkdin
                </div>
            </div>
            <div className='flex md:flex-col '>
                <div className='flex flex-col'>
                    <h1>Company</h1>
                    <p>About</p>
                </div>
            </div>
        </div>
    )
}

export default Footer