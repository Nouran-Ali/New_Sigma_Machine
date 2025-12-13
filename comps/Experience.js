import React, { useEffect, useState } from 'react'
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

export const Experience = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <div className={styles.bg_experience}>
            <div className='flex justify-evenly items-center text-white text-center lg:pt-32 max-lg:pt-32'>
                <div>
                    <img src="../home/diamond.png" width="50" height="50" className='mx-auto mb-3 max-lg:w-[30px] max-lg:h-[30px]' />
                    <CountUp duration={1} end={8} />
                    <p className='mt-3'>{t("Years Of Experience")}</p>
                </div>
                <div>
                    <img src="../home/group.png" width="50" height="50" className='mx-auto mb-3 max-lg:w-[30px] max-lg:h-[30px]' />
                    <CountUp duration={5} end={300} />
                    <p className='mt-3'>Experts</p>
                </div>
                <div>
                    <img src="../home/earth.png" width="50" height="50" className='mx-auto mb-3 max-lg:w-[30px] max-lg:h-[30px]' />
                    <CountUp duration={5} end={120} />
                    <p className='mt-3'>Countries</p>
                </div>
            </div>
        </div>
    )
}
