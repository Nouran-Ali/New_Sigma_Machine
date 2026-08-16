import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const CO2_Laser_sample = () => {
    return (
        <div className='grid grid-cols-4 max-xl:grid-cols-2 gap-4 text-center mt-5'>
            <Link href="/">
                <img src="../home/8.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#ffffff] text-lg'>CO2 Laser Machine</p>
            </Link>
            <Link href="/">
                <img src="../home/9.jpg" width={200} height={200} className='mx-auto mb-5 ' />
                <p className='text-[#ffffff] text-lg'>CO2 Laser Machine</p>
            </Link>
            <Link href="/">
                <img src="../home/10.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#ffffff] text-lg'>CO2 Laser Machine</p>
            </Link>
            <Link href="/">
                <img src="../home/11.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#ffffff] text-lg'>CO2 Laser Machine</p>
            </Link>
            <Link href="/">
                <img src="../home/12.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#ffffff] text-lg'>CO2 Laser Machine</p>
            </Link>
            <Link href="/">
                <img src="../home/13.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#ffffff] text-lg'>CO2 Laser Machine</p>
            </Link>
        </div>
    )
}

export default CO2_Laser_sample
