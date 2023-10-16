import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Laser_marking_sample = () => {
    return (
        <div className='grid grid-cols-4 max-xl:grid-cols-2 gap-4 text-center mt-5'>
            <Link href="/">
                <Image src="/../home/Laser_Marking6.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Laser Marking6</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Laser_Marking5.jpg" width={200} height={200} className='mx-auto mb-5 ' />
                <p className='text-[#54545f] text-lg'>Laser Marking5</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Laser_Marking4.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Laser Marking4</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Laser_Marking3.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Laser Marking3</p>
            </Link>
        </div>
    )
}

export default Laser_marking_sample
