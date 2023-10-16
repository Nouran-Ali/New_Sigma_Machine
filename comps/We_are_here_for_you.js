import React from 'react'
import styles from "../styles/Services.module.css";
import Link from 'next/link';

const We_are_here_for_you = () => {
    return (
        <div className='bg-[#4d2eb8] text-white rounded-lg p-5 px-9 max-xl:px-5 relative -bottom-7'>
            <div className='grid grid-cols-3 max-xl:grid-cols-2 gap-6 mt-20 mb-16 mx-16 max-xl:mx-4'>
                <div className='col-span-2'>
                    <p className='text-xl max-xl:text-lg tracking-widest uppercase font-medium'>WE ARE HERE FOR YOU</p>
                    <h3 className='mt-4 text-5xl max-xl:text-3xl font-bold'>Let’s Get Back to Work</h3>
                    <p className='mt-4'>Gom ad minim veniam, quis nostrud exercitation ullamco labor is tetur adip isicing elit, sed do eiusmod</p>
                </div>
                <div className='mt-20 max-xl:mt-10 mx-auto'>
                    <Link href="/" className={`${styles.btn_more}`}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default We_are_here_for_you
