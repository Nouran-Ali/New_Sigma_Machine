import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Fiber_laser_sample = () => {
    return (
        <div className='grid grid-cols-4 max-xl:grid-cols-2 gap-4 text-center mt-5'>
            <Link href="/">
                <Image src="/../home/Aluminum_Cutting.png" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Aluminum Cutting</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Stainless_Steel.png" width={200} height={200} className='mx-auto mb-5 ' />
                <p className='text-[#54545f] text-lg'>Stainless Steel</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Carbon_Steel.png" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Carbon Steel</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Carbon_Steel2.png" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Carbon Steel</p>
            </Link>
        </div>
    )
}

export default Fiber_laser_sample
