import Wrapper from '@/components/shared/Wrapper'
import { Button } from '@/components/ui/button'
import React from 'react'

const Newsletter = () => {
    return (
        <Wrapper>
            <div className='my-40 flex justify-center relative'>
                <div className='flex flex-col items-center absolute z-10'>
                    <h1 className='font-bold text-xl mobile:text-2xl'>Subscribe Our Newsletter</h1>
                    <p className='my-8 text-center'>Get the latest information and promo offers directly</p>
                    <div className='flex gap-1 mobile:gap-2 sm:gap-5'>
                        <input className='w-40 px-1 mobile:px-4 py-2 text-gray-400 outline outline-1' type="text" placeholder="Enter email address" />
                        <Button> Get Started </Button>
                    </div>
                </div>
                <h1 className='mt-10 sm:mt-5 font-extrabold text-7xl sm:text-8xl text-gray-200 overflow-hidden'>Newsletter</h1>
            </div>
        </Wrapper>
    )
}

export default Newsletter