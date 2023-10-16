import React from 'react'
import Product from './Product_comp'
import styles from "../styles/Product.module.css";
import Link from 'next/link';
import { RightOutlined } from "@ant-design/icons";
import { Carousel } from 'antd';
import Image from 'next/image';

const Our_products = () => {
    return (
        <div className='bg-[#f9f9f9] pt-14 pb-9 relative'>
            <div className='px-24 max-xl:px-10'>
                <div className=''>
                    <div className='relative'>
                        <div className='bg-[#7053d921] p-6 rounded-full absolute -left-3 -top-3'></div>
                        <p className='text-[#7153d9] text-lg tracking-widest uppercase font-medium'>OUR PRODUCTS</p>
                    </div>
                    <h1 className='text-[#1c1c1c] text-xl mt-4'>We offer a suitable laser machine for virtually any application. The range includes laser engravers, laser cutters, large-format laser cutting machines, and industrial marking lasers.</h1>
                </div>
                <Carousel autoplay>
                    <div>
                        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10'>
                            <Product
                                title="TS Model Tube Fiber Laser Cutting Machine"
                                href="/"
                                background={styles.bgProjectOne}
                                method="Metal tube cutting"
                                model="RJ-TS62"
                                area="6000xφ220"
                                speed="50m/min"
                            />
                            <Product
                                title="HT Model Plate And Tube Integrated Fiber Laser Cutting Machine"
                                href="/"
                                background={styles.bgProjectTwo}
                                method="Laser cutting automation devices"
                                model="RJ-3015HT"
                                area="1530*3050mm"
                                speed="70m/min"
                            />
                            <Product
                                title="PT Model Plate And Tube Cutting Machine With Enclosure"
                                href="/"
                                background={styles.bgProjectThree}
                                method="High power laser cutting machines"
                                model="RJ-3015PT"
                                area="1530*3050mm"
                                speed="80m/min"
                            />
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10'>
                            <Product
                                title="TS Model Tube Fiber Laser Cutting Machine"
                                href="/"
                                background={styles.bgProjectOne}
                                method="Metal tube cutting"
                                model="RJ-TS62"
                                area="6000xφ220"
                                speed="50m/min"
                            />
                            <Product
                                title="HT Model Plate And Tube Integrated Fiber Laser Cutting Machine"
                                href="/"
                                background={styles.bgProjectTwo}
                                method="Laser cutting automation devices"
                                model="RJ-3015HT"
                                area="1530*3050mm"
                                speed="70m/min"
                            />
                            <Product
                                title="PT Model Plate And Tube Cutting Machine With Enclosure"
                                href="/"
                                background={styles.bgProjectThree}
                                method="High power laser cutting machines"
                                model="RJ-3015PT"
                                area="1530*3050mm"
                                speed="80m/min"
                            />
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10'>
                            <Product
                                title="TS Model Tube Fiber Laser Cutting Machine"
                                href="/"
                                background={styles.bgProjectOne}
                                method="Metal tube cutting"
                                model="RJ-TS62"
                                area="6000xφ220"
                                speed="50m/min"
                            />
                            <Product
                                title="HT Model Plate And Tube Integrated Fiber Laser Cutting Machine"
                                href="/"
                                background={styles.bgProjectTwo}
                                method="Laser cutting automation devices"
                                model="RJ-3015HT"
                                area="1530*3050mm"
                                speed="70m/min"
                            />
                            <Product
                                title="PT Model Plate And Tube Cutting Machine With Enclosure"
                                href="/"
                                background={styles.bgProjectThree}
                                method="High power laser cutting machines"
                                model="RJ-3015PT"
                                area="1530*3050mm"
                                speed="80m/min"
                            />
                        </div>
                    </div>
                </Carousel>
                <div className='mx-auto flex justify-center mt-14'>
                    <Link href="/" className={`${styles.btn_more} flex items-center`}>
                        More
                        <RightOutlined className={`ml-5 ${styles.arrow}`} />
                    </Link>
                </div>
            </div>

            <Image src="/../home/abstract_shape.png" width={130} height={130} className='absolute right-1 bottom-1' />

        </div>
    )
}

export default Our_products
