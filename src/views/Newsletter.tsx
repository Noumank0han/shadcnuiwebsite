import { Button } from '@/components/ui/button'
import React from 'react'

const Newsletter = () => {
    return (
        <div className='flex flex-col items-center my-40'>
            <h1 className='font-bold text-2xl'>Subscribe Our Newsletter</h1>
            <p className='my-10'>Get the latest information and promo offers directly</p>
            <div className='gap-2'>
                <input className='px-4 py-2 text-gray-400 rounded-md' type="text" placeholder="Enter email address" />
                <Button> Get Started </Button>
            </div>
        </div>
    )
}

export default Newsletter