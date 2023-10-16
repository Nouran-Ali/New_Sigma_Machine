import React from 'react'
import styles from "../styles/Resources.module.css";
import { Carousel } from 'antd';
import Image from 'next/image';
const contentStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Aerospace_area = () => {
    return (
        <div className='px-24 max-xl:px-10 mt-20 max-xl:mt-10 mb-24'>
            <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 max-xl:flex max-xl:flex-wrap-reverse'>
                <div className={styles.bg}>
                    <Carousel autoplay className='text-center'>
                        <div>
                            <Image src="/../resources/5.jpg" width={400} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>TS Model Tube Fiber Laser Cutting Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/6.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>HT Model Plate and Tube Integrated Fiber Laser Cutting Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/7.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>PT Model Plate and Tube Cutting Machine with Enclosure</h3>
                        </div>
                        <div>
                            <Image src="/../resources/8.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>P Model Fiber Laser Cutting Machine with Exchangeable and Enclosure</h3>
                        </div>
                        <div>
                            <Image src="/../resources/9.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>G Model Fiber Laser Cutting Machine with High Power</h3>
                        </div>
                        <div>
                            <Image src="/../resources/10.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>3015S Model Economic Fiber Laser Cutting Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/11.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>H Model Plate Fiber Laser Cutting Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/12.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>E Model Fiber Laser Cutting Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/13.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>1390A Model Co2 Laser Engraving & Cutting Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/14.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>1325P Model Metal/Non-Metal Mixed Laser Cutting  Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/15.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>Ruijie 1625 Model Cutting Machine for Non-metal Material</h3>
                        </div>
                        <div>
                            <Image src="/../resources/16.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>Laser Welding Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/17.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>Aluminum Bending Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/18.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>Handheld Laser Welding Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/8.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>Handheld Laser Welding Machine</h3>
                        </div>
                        <div>
                            <Image src="/../resources/8.jpg" width={436} height={200} className='rounded-xl mx-auto mt-8' />
                            <h3 className='mt-4'>4</h3>
                        </div>
                    </Carousel>
                </div>
                <div className='text-lg text-[#677289]'>
                    <h3 className='text-3xl text-[#212529]'>Aerospace Area</h3>
                    <p className='mt-4'>Laser processing technology in the application of aero-engine manufacturing, laser cutting accounted for more than 70% of the total laser processing output, which is a major laser technology.</p>
                    <p className='mt-4'>Laser cutting processing technology is a key manufacturing technology that promotes the development of high-speed, lightweight, long-life, short-cycle, low-cost, and other high-speed, high-speed, light-weight tools that are represented by aviation and space flight.</p>
                    <p className='mt-4'>Especially in the aviation industry, laser cutting and processing technologies greatly Promote the development of aviation manufacturing technology.</p>
                </div>
            </div>
        </div>
    )
}

export default Aerospace_area
