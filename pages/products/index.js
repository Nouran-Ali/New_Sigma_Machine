import Product from '@/comps/Product_comp'
import React from 'react'
import styles from "../../styles/Product.module.css";
import { Select, Space } from 'antd';
const { Option } = Select;
import { Input } from 'antd';
import Link from 'next/link';
import { RightCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);


const Products = () => {
    return (
        <>
            <div className={`${styles.bg_products} mobile_d_none`}>
                <p className='text-center text-3xl text-white font-semibold pt-40'>Sigma Machines Products</p>
                <p className='text-center text-lg text-[#a9a9a9] mt-3'>HIGH SPEED, HIGH ACCURACY, HIGH EFFICIENCY</p>
            </div>
            <div className='px-24 max-xl:px-10'>

                <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-16 mb-7'>
                    <div className='col-span-2'>
                        <h1 className='text-3xl tracking-widest text-[#7180be] mb-7'>PRODUCT CENTER</h1>
                        <Image src="/../products/5.jpg" width={700} height={40} className='rounded-xl' />
                    </div>
                    <div>
                        <Search
                            placeholder="Search ..."
                            allowClear
                            onSearch={onSearch}
                            size="large"
                            style={{
                                width: 370,
                            }}
                            className='bg-[#fafafa]'
                        />
                        <div className={`${styles.box_categories} mt-7`}>
                            <h3 className='text-[#1c1c1c] text-2xl font-medium mb-4'>Categories</h3>
                            <div className={`flex items-center mb-3 ${styles.Category}`}>
                                <RightCircleOutlined className='text-[#7180be]' />
                                <Link href="#1" className={`text-[#1c1c1c] text-lg ml-3 ${styles.Link_Category}`}>Fiber laser cutting machine</Link>
                            </div>
                            <div className={`flex items-start mb-3 ${styles.Category}`}>
                                <RightCircleOutlined className='mt-2 text-[#7180be]' />
                                <Link href="#2" className={`text-[#1c1c1c] text-lg ml-3 ${styles.Link_Category}`}>CO2 laser cutting & engraving machine</Link>
                            </div>
                            <div className={`flex items-center mb-3 ${styles.Category}`}>
                                <RightCircleOutlined className='text-[#7180be]' />
                                <Link href="#3" className={`text-[#1c1c1c] text-lg ml-3 ${styles.Link_Category}`}>Cnc router</Link>
                            </div>
                            <div className={`flex items-center`}>
                                <RightCircleOutlined className='text-[#7180be]' />
                                <Link href="#4" className={`text-[#1c1c1c] text-lg ml-3 ${styles.Link_Category}`}>Bending / Welding machine</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='text-3xl mb-2' id="1">Fiber laser cutting machine</h1>
                <hr className={styles.line} />

                <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-7 mb-7'>
                    <Product
                        title="TS Model Tube Fiber Laser Cutting Machine"
                        href="/products/1"
                        background={styles.bgProjectOne}
                        method="Metal tube cutting"
                        model="RJ-TS62"
                        area="6000xφ220"
                        speed="50m/min" />

                    <Product
                        title="TS Model Tube Fiber Laser Cutting Machine"
                        href="/products/1"
                        background={styles.bgProjectOne}
                        method="Metal tube cutting"
                        model="RJ-TS62"
                        area="6000xφ220"
                        speed="50m/min" />

                    <Product
                        title="TS Model Tube Fiber Laser Cutting Machine"
                        href="/products/1"
                        background={styles.bgProjectOne}
                        method="Metal tube cutting"
                        model="RJ-TS62"
                        area="6000xφ220"
                        speed="50m/min" />
                </div>


                <div className='mt-16' id="2">
                    <h1 className='text-3xl mb-2'>CO2 laser cutting & engraving machine</h1>
                    <hr className={styles.line} />

                    <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-6 mb-6'>
                        <Product
                            title="TS Model Tube Fiber Laser Cutting Machine"
                            href="/products/1"
                            background={styles.bgProjectOne}
                            method="Metal tube cutting"
                            model="RJ-TS62"
                            area="6000xφ220"
                            speed="50m/min" />

                        <Product
                            title="TS Model Tube Fiber Laser Cutting Machine"
                            href="/products/1"
                            background={styles.bgProjectOne}
                            method="Metal tube cutting"
                            model="RJ-TS62"
                            area="6000xφ220"
                            speed="50m/min" />

                        <Product
                            title="TS Model Tube Fiber Laser Cutting Machine"
                            href="/products/1"
                            background={styles.bgProjectOne}
                            method="Metal tube cutting"
                            model="RJ-TS62"
                            area="6000xφ220"
                            speed="50m/min" />

                    </div>
                </div>

                <div className='mt-16' id="3">
                    <h1 className='text-3xl mb-2'>Cnc router</h1>
                    <hr className={styles.line} />
                    <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-6 mb-6'>
                        <Product
                            title="TS Model Tube Fiber Laser Cutting Machine"
                            href="/products/1"
                            background={styles.bgProjectOne}
                            method="Metal tube cutting"
                            model="RJ-TS62"
                            area="6000xφ220"
                            speed="50m/min" />

                        <Product
                            title="TS Model Tube Fiber Laser Cutting Machine"
                            href="/products/1"
                            background={styles.bgProjectOne}
                            method="Metal tube cutting"
                            model="RJ-TS62"
                            area="6000xφ220"
                            speed="50m/min" />

                    </div>
                </div>

                <div className='mt-16' id="4">
                    <h1 className='text-3xl mb-2'>Bending / Welding machine</h1>
                    <hr className={styles.line} />

                    <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-6 mb-6'>
                        <Product
                            title="TS Model Tube Fiber Laser Cutting Machine"
                            href="/products/1"
                            background={styles.bgProjectOne}
                            method="Metal tube cutting"
                            model="RJ-TS62"
                            area="6000xφ220"
                            speed="50m/min" />

                        <Product
                            title="TS Model Tube Fiber Laser Cutting Machine"
                            href="/products/1"
                            background={styles.bgProjectOne}
                            method="Metal tube cutting"
                            model="RJ-TS62"
                            area="6000xφ220"
                            speed="50m/min" />

                        <Product
                            title="TS Model Tube Fiber Laser Cutting Machine"
                            href="/products/1"
                            background={styles.bgProjectOne}
                            method="Metal tube cutting"
                            model="RJ-TS62"
                            area="6000xφ220"
                            speed="50m/min" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
