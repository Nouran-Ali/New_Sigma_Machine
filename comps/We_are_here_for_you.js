import React from 'react'
import styles from "../styles/Services.module.css";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const We_are_here_for_you = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <div className='bg-[#2a2a2a] text-white rounded-lg p-5 px-9 max-xl:px-5 relative -bottom-7'>
            <div className='grid grid-cols-3 max-xl:grid-cols-2 gap-6 mt-20 mb-16 mx-16 max-xl:mx-4'>
                <div className='col-span-3 text-center'>
                    <p className='text-xl max-xl:text-lg tracking-widest uppercase font-medium'> {t("Sigma Machines — Your Trusted Service Partner in Saudi Arabia")}</p>
                    <h3 className='mt-4 text-5xl max-xl:text-3xl font-bold'>
                        {t("We don’t just sell machines.")}<br />
                        {t("We protect your investment, keep your production stable, and support you long-term.")}
                    </h3>
                    {/* <p className='mt-4'>We sincerely hope to go hand in hand with friends from all walks of life for common development.  </p> */}
                </div>
                {/* <div className='mt-20 max-xl:mt-10 mx-auto col-span-2'>
                    <Link href="/themaintenance" className={`${styles.btn_more}`}>Read More</Link>
                </div> */}
            </div>
        </div>
    )
}

export default We_are_here_for_you
