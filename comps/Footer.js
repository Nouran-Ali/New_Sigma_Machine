import React from 'react'
import styles from "../styles/Footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.bg_footer}>
            <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-4 px-24 max-xl:px-10 text-[#cbd0e3] pt-24 pb-24'>
                <div className={`${styles.border} pr-6`}>
                    <div className='flex'>
                        <Image src="/../home/logo_white.svg" width={170} height={60} className='' />
                        {/* <h3 className='text-[#fff] mt-4 text-xl font-bold'>Sigma Machines</h3> */}
                    </div>
                    <p className='mt-6'>We are the best world Information Technology Company. Providing the highest quality in hardware, Software & Network solutions.</p>
                </div>
                <div className={`${styles.border} pl-6 max-xl:pl-0`}>
                    <h3 className='text-[#fff] mt-4 text-xl'>Quick Links</h3>
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-2 mt-6'>
                        <Link href="/">About us</Link>
                        <Link href="/">Services</Link>
                        <Link href="/">Products</Link>
                        <Link href="/">Resources</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
                <div className='pl-6 max-xl:pl-0'>
                    <h3 className='text-[#fff] mt-4 text-xl'>Contact Us</h3>
                    <div className='flex mt-6'>
                        <Image src="/../home/facebook.png" width={30} height={60} className='mr-3' />
                        <Image src="/../home/instagram.png" width={30} height={60} className='mr-3' />
                        <Image src="/../home/linkedin.png" width={30} height={60} className='mr-3' />
                        <Image src="/../home/search.png" width={30} height={60} />
                    </div>

                </div>
            </div>
            <div className={`${styles.border_top} px-24 max-xl:px-10 text-[#cbd0e3] pt-9`}>
                <p>Copyright © 2023 <Link href="https://www.linkedin.com/in/nouran-ali-227217240" className='text-[#7153d9]'>here.</Link> All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
