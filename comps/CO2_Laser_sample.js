import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const CO2_Laser_sample = () => {
    return (
        <div className='grid grid-cols-4 max-xl:grid-cols-2 gap-4 text-center mt-5'>
            <Link href="/">
                <Image src="/../home/co21.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>CO2 Laser1</p>
            </Link>
            <Link href="/">
                <Image src="/../home/co22.jpg" width={200} height={200} className='mx-auto mb-5 ' />
                <p className='text-[#54545f] text-lg'>CO2 Laser2</p>
            </Link>
            <Link href="/">
                <Image src="/../home/co23.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>CO2 Laser3</p>
            </Link>
            <Link href="/">
                <Image src="/../home/co24.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>CO2 Laser4</p>
            </Link>
        </div>
    )
}

export default CO2_Laser_sample
