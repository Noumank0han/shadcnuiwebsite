import Wrapper from '@/components/shared/Wrapper'
import { Facebook } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <Wrapper>
            <div className='flex flex-col lg:flex-row my-40'>
                <div className='flex flex-col gap-8 mobile:w-1/2 lg:w-1/4'>
                    <Image alt="logo" src="/Logo.webp" width={150} height={150} />
                    <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className='flex gap-4'>
                        <div className="bg-gray-200 p-2 rounded-md">
                            <Twitter className="text-black fill-black w-5" />
                        </div>
                        <div className="bg-gray-200 p-2 rounded-md">
                            <Facebook className="text-black fill-black w-5" />
                        </div>
                        <div className="bg-gray-200 p-2 rounded-md">
                            <Linkedin className="text-black fill-black w-5" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-3 mt-5 lg:mt-0 w-full justify-around'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-lg my-3'>Company</h1>
                        <p>About</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>How it Works</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-lg my-3'>Support</h1>
                        <p>Support Carrer</p>
                        <p>24h Service</p>
                        <p>Quick Chat</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-lg my-3'>Contact</h1>
                        <p>Whatsapp</p>
                        <p>Support 24h</p>
                    </div>
                </div>
            </div>
            <hr className='w-full h-0 text-black bg-black' />
            <div className='flex flex-col md:flex-row gap-1 mobile:gap-5 justify-around py-8'>
                <div>Copyright @C 2023 Dine Market</div>
                <div>Designed by. <strong>Weird Design Studio</strong></div>
                <div>Code by. <strong>Nouman Khan on github</strong></div>
            </div>

        </Wrapper>
    )
}

export default Footer