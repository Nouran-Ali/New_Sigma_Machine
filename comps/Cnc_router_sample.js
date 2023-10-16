import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Cnc_router_sample = () => {
    return (
        <div className='grid grid-cols-4 max-xl:grid-cols-2 gap-4 text-center mt-5'>
            <Link href="/">
                <Image src="/../home/Samples5.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Samples5</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Samples4.jpg" width={200} height={200} className='mx-auto mb-5 ' />
                <p className='text-[#54545f] text-lg'>Samples4</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Samples3.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Samples3</p>
            </Link>
            <Link href="/">
                <Image src="/../home/Samples2.jpg" width={200} height={200} className='mx-auto mb-5' />
                <p className='text-[#54545f] text-lg'>Samples2</p>
            </Link>
        </div>
    )
}

export default Cnc_router_sample
