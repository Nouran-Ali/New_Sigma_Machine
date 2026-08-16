import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Fiber_laser_sample = () => {
    return (
        <div className='grid grid-cols-4 max-xl:grid-cols-2 gap-4 text-center mt-5'>
            <Link href="/">
                <img src="../home/14.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#ffffff] text-lg'>Fiber Laser Machine</p>
            </Link>
            <Link href="/">
                <img src="../home/15.jpg" width={200} height={200} className='mx-auto mb-5 ' />
                <p className='text-[#ffffff] text-lg'>Fiber Laser Machine</p>
            </Link>
            <Link href="/">
                <img src="../home/16.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#ffffff] text-lg'>Fiber Laser Machine</p>
            </Link>
            <Link href="/">
                <img src="../home/17.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#ffffff] text-lg'>Fiber Laser Machine</p>
            </Link>
        </div>
    )
}

export default Fiber_laser_sample
