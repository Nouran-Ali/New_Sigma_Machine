import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Fiber_resources = () => {
    return (
        <div className='grid grid-cols-4 max-xl:grid-cols-2 gap-4'>
            <Link href="/aerospace_area">
                <Image src="/../resources/1.png" width={236} height={200} className='rounded-xl'/>
                <p className='mt-3 text-center'>Aerospace Area</p>
            </Link>
            <Link href="/">
                <Image src="/../resources/2.png" width={236} height={200} className='rounded-xl'/>
                <p className='mt-3 text-center'>Oil Pipe</p>
            </Link>
            <Link href="/">
                <Image src="/../resources/3.png" width={236} height={200} className='rounded-xl'/>
                <p className='mt-3 text-center'>Machine Manufacturing</p>
            </Link>
            <Link href="/">
                <Image src="/../resources/4.png" width={236} height={200} className='rounded-xl'/>
                <p className='mt-3 text-center'>Automobile Making</p>
            </Link>

            <Link href="/" className='mt-6'>
                <Image src="/../resources/1.png" width={236} height={200} className='rounded-xl'/>
                <p className='mt-3 text-center'>Aerospace Area</p>
            </Link>
            <Link href="/" className='mt-6'>
                <Image src="/../resources/2.png" width={236} height={200} className='rounded-xl'/>
                <p className='mt-3 text-center'>Oil Pipe</p>
            </Link>
            <Link href="/" className='mt-6'>
                <Image src="/../resources/3.png" width={236} height={200} className='rounded-xl'/>
                <p className='mt-3 text-center'>Machine Manufacturing</p>
            </Link>
            <Link href="/" className='mt-6'>
                <Image src="/../resources/4.png" width={236} height={200} className='rounded-xl'/>
                <p className='mt-3 text-center'>Automobile Making</p>
            </Link>
        </div>
    )
}

export default Fiber_resources
