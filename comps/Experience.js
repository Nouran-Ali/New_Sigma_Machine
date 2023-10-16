import React, { useEffect, useState } from 'react'
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import CountUp from 'react-countup';

export const Experience = () => {

    return (
        <div className={styles.bg_experience}>
            <div className='flex justify-evenly items-center text-white text-center pt-40'>
                <div>
                    <Image src="/../home/diamond.png" width={50} height={50} className='mx-auto mb-3' />
                    <CountUp duration={5} end={20} />
                    <p className='mt-3'>Years Of Experience</p>
                </div>
                <div>
                    <Image src="/../home/group.png" width={50} height={50} className='mx-auto mb-3' />
                    <CountUp duration={5} end={300} />
                    <p className='mt-3'>Experts</p>
                </div>
                <div>
                    <Image src="/../home/earth.png" width={50} height={50} className='mx-auto mb-3' />
                    <CountUp duration={5} end={120} />
                    <p className='mt-3'>Countries</p>
                </div>
            </div>
        </div>
    )
}
