import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from "../../styles/Product.module.css";
import { Image } from 'antd';
import { CaretRightOutlined, MailOutlined } from '@ant-design/icons';
import Product_comp from '@/comps/Product_comp';

const Product = () => {

    const [imageWidth, setImageWidth] = useState(750);
    const [imageHight, setImageHight] = useState(500);

    const [imageWidthTwo, setImageWidthTwo] = useState(1150);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1280px)');

        function handleMediaChange(event) {
            if (event.matches) {
                setImageWidth(400);
                setImageHight(300)

                setImageWidthTwo(400);
            } else {
                setImageWidth(750);
                setImageHight(500)

                setImageWidthTwo(1150);
            }
        }

        mediaQuery.addListener(handleMediaChange);

        return () => {
            mediaQuery.removeListener(handleMediaChange);
        };
    }, []);

    const router = useRouter();

    const { id } = router.query;

    const products = [
        { id: 1, name: 'User 1 details' },
        { id: 2, name: 'User 2 details' },
        { id: 3, name: 'User 3 details' },
    ]

    return (
        <>
            <div className={`${styles.bg_products} mobile_d_none`}>
                <p className='text-center text-3xl text-white font-semibold pt-40'>Sigma Machines Products</p>
                <p className='text-center text-lg text-[#a9a9a9] mt-3'>HIGH SPEED, HIGH ACCURACY, HIGH EFFICIENCY</p>
            </div>

            <div className='px-24 max-xl:px-10'>
                <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-7 mb-7'>
                    <div className='col-span-2'>
                        <Image src="/../products/6.png" width={imageWidth} height={imageHight} className='rounded-lg ' />
                    </div>
                    <div>
                        <Image src="/../products/7.png" width={400} height={300} className='rounded-lg ' />
                        <Image src="/../products/8.png" width={400} height={300} className='rounded-lg' />
                    </div>
                </div>
                <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-7 mb-7'>
                    <div>
                        <div className='bg-[#f2f5fb] p-12 rounded-3xl'>
                            <h3 className='text-[#7153d9] text-2xl tracking-widest'>3015S Model Economic Fiber Laser Cutting Machine</h3>

                            <h3 className='text-[#1c1c1c] text-xl mt-5'>Model</h3>
                            <p className='text-[#8d8e99] text-xl mt-2'>RJ-3015S</p>

                            <h3 className='text-[#1c1c1c] text-xl mt-5'>Working Area</h3>
                            <p className='text-[#8d8e99] text-xl mt-2'>1530*3050mm</p>

                            <h3 className='text-[#1c1c1c] text-xl mt-5'>Speed</h3>
                            <p className='text-[#8d8e99] text-xl mt-2'>50m/min</p>
                        </div>
                        <div className='flex bg-[#23b85e] text-white rounded-2xl mt-5 p-5 text-xl'>
                            <MailOutlined />
                            <p className='ml-4'>Email us</p>
                        </div>
                    </div>
                    <div className='col-span-2 ml-6'>
                        <h3 className='text-[#1c1c1c] text-3xl'>Product Parameters</h3>
                        <p className='mt-5 mb-5 text-lg text-[#54545f]'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odiko khono bhulho yeja ytumi opora dhnio najanina konod inbether prodi pzele.</p>
                        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-1'>
                            <h3 className='text-xl'>Model</h3>
                            <p className='text-lg text-[#54545f]'>3015S, 4015S, 6015S</p>
                        </div>
                        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3'>
                            <h3 className='text-xl'>Working Size</h3>
                            <p className='text-lg text-[#54545f] col-span-2'>3000×1500mm, 4000x1500mm, 6000x1500mm</p>
                        </div>
                        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3'>
                            <h3 className='text-xl'>Laser Power</h3>
                            <p className='text-lg text-[#54545f]'>1000-3000w</p>
                        </div>
                        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3'>
                            <h3 className='text-xl'>Linkage speed</h3>
                            <p className='text-lg text-[#54545f]'>100m/min</p>
                        </div>
                        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3'>
                            <h3 className='text-xl'>Positioning Accuracy</h3>
                            <p className='text-lg text-[#54545f]'>±0.05mm</p>
                        </div>
                        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3'>
                            <h3 className='text-xl'>Repeatability</h3>
                            <p className='text-lg text-[#54545f]'>±0.03mm</p>
                        </div>
                        <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3'>
                            <h3 className='text-xl'>Maximum Acceleration</h3>
                            <p className='text-lg text-[#54545f]'>1.0G</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-center text-4xl mt-9'>Features</h2>
                    <hr className={`${styles.line} mx-auto text-center mt-3`} />
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9'>
                        <div>
                            <h3 className='text-2xl mt-5 mb-5'>Machine Body--Welding Machine Body</h3>
                            <div className='flex items-center'>
                                <CaretRightOutlined />
                                <p className='ml-3 text-xl'>High strength, not easily deformed</p>
                            </div>
                            <p className='text-lg mt-2 text-[#54545f]'>The following features ensure that the bed will not be deformed for 20 years like high strength, good stability and strong tensile strength.</p>
                            <div className='flex items-center mt-5'>
                                <CaretRightOutlined />
                                <p className='ml-3 text-xl'>More stable</p>
                            </div>
                            <p className='text-lg mt-2 text-[#54545f]'>The rectangular tube has a wall thickness of 6 mm and the entire body weighs 3,000 kg.</p>
                        </div>
                        <div className='mx-auto'>
                            <Image src="/../products/9.png" width={400} height={300} className='rounded-lg mx-auto' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-[#f2f5fb] py-8'>
                <div className='px-24 max-xl:px-10'>
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9'>
                        <div className='mx-auto'>
                            <Image src="/../products/10.png" width={400} height={300} className='rounded-lg mx-auto' />
                        </div>

                        <div>
                            <h3 className='text-2xl mt-5 mb-5'>Laser Head--Swiss Laser Head--Raytools Brand</h3>
                            <div className='flex items-center text-[#54545f]'>
                                <CaretRightOutlined />
                                <p className='ml-3 text-xl'>Collimating Lens and Focal Lens Adopt Compound Lens,to Obtain the Obtimal Optical Quality and the Cutting Effect. </p>
                            </div>
                            <div className='flex items-center mt-5 text-[#54545f]'>
                                <CaretRightOutlined />
                                <p className='ml-3 text-xl'>Completely Sealed Internal Structure of Laser Head can Avoid Optical Part Polluted by Dust. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='px-24 max-xl:px-10'>
                <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9 mb-9'>
                    <div>
                        <h3 className='text-2xl mt-5 mb-5'>Aviation Aluminium Cross-Beam</h3>
                        <div className='flex items-center'>
                            <CaretRightOutlined />
                            <p className='ml-3 text-xl'>High toughness and ductility</p>
                        </div>
                        <p className='text-lg mt-2 text-[#54545f]'>The aerospace industry extrudes aluminum profiles and undergoes fine processing after extrusion molding and quenching heat aging to make the overall rigidity and surface quality of the beam very good.</p>

                        <div className='flex items-center mt-5'>
                            <CaretRightOutlined />
                            <p className='ml-3 text-xl'>High speed and precise cutting</p>
                        </div>
                        <p className='text-lg mt-2 text-[#54545f]'>The beam structure optimized by finite element analysis, based on the metal characteristics of aluminum alloy, is corrosion-resistant, lightweight, high rigidity, which guarantees the high-speed movement during laser processing, and high-speed cutting of various patterns can be achieved under the condition of satisfying accuracy.</p>

                        <div className='flex items-center mt-5'>
                            <CaretRightOutlined />
                            <p className='ml-3 text-xl'>More efficient</p>
                        </div>
                        <p className='text-lg mt-2 text-[#54545f]'>The aluminum profile beam of the aerospace industry allows the equipment to have efficient dynamic performance, greatly improving processing efficiency while ensuring processing quality.</p>
                    </div>
                    <div className='mx-auto'>
                        <Image src="/../products/11.png" width={400} height={300} className='rounded-lg mx-auto' />
                    </div>
                </div>
            </div>

            <div className='bg-[#f2f5fb] py-8'>
                <div className='px-24 max-xl:px-10'>
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9'>
                        <div className='mx-auto'>
                            <Image src="/../products/12.png" width={400} height={300} className='rounded-lg mx-auto' />
                        </div>

                        <div>
                            <h3 className='text-2xl mt-5 mb-5'>Water Cooling System–Hanli Brand</h3>
                            <div className='flex items-center text-[#54545f]'>
                                <CaretRightOutlined />
                                <p className='ml-3 text-xl'>Dual Cooling Function:Laser Source Cooling, Laser Head Cooling.</p>
                            </div>
                            <div className='flex items-center mt-5 text-[#54545f]'>
                                <CaretRightOutlined />
                                <p className='ml-3 text-xl'>Multiple Protection Functions,Passive Alarm Terminals and Remote Control Terminals.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='px-24 max-xl:px-10'>
                <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9 mb-9'>
                    <div>
                        <p className='text-lg mt-9 text-[#54545f]'>Ruijie fiber laser cutting machine adopts international famous brands, such as Taiwan HIWIN guide rail & YYC rack, Japanese YASKAWA servo motor motor & SHIMPO reducer, which guarantees high running speed, acceleration, accuracy and stability.</p>
                    </div>
                    <div className='mx-auto'>
                        <Image src="/../products/13.png" width={400} height={300} className='rounded-lg mx-auto' />
                    </div>
                </div>
            </div>

            <div className='bg-[#f2f5fb] py-8'>
                <div className='px-24 max-xl:px-10'>
                    <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9'>
                        <div className='mx-auto'>
                            <Image src="/../products/14.png" width={400} height={300} className='rounded-lg mx-auto' />
                        </div>

                        <div>
                            <h3 className='text-2xl mt-5 mb-5'>IPAD Designing Screen</h3>
                            <div className='flex items-center text-[#54545f]'>
                                <CaretRightOutlined />
                                <p className='ml-3 text-xl'>Use the high definition toughened glass screen, more exquisite and delicate, the operation is smoother.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='px-24 max-xl:px-10'>
                <h2 className='text-center text-4xl mt-9'>Applications</h2>
                <hr className={`${styles.line} mx-auto text-center mt-3`} />

                <p className='mt-5 text-center'>Widely used in advertising, high pressure / low voltage electrical cabinet production, textile machinery accessories, kitchen appliances, cars, machinery, elevators, electrical accessories, spring coil pieces, metro line parts and other industries. </p>
                <div className='grid grid-cols-3 max-xl:grid-cols-2 gap-4 mt-9'>
                    <div className='mx-auto'>
                        <Image src="/../products/15.jpg" width={imageWidthTwo} height={imageHight} className='rounded-lg mx-auto' />
                    </div>
                </div>
            </div>

            <div className='px-24 max-xl:px-10'>
                <h2 className='text-4xl mt-9'>You Also Might Like</h2>
                <hr className={`${styles.line} mt-3`} />

                <div className='grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9'>
                    <Product_comp
                        title="TS Model Tube Fiber Laser Cutting Machine"
                        href="/products/1"
                        background={styles.bgProjectOne}
                        method="Metal tube cutting"
                        model="RJ-TS62"
                        area="6000xφ220"
                        speed="50m/min" />

                    <Product_comp
                        title="TS Model Tube Fiber Laser Cutting Machine"
                        href="/products/1"
                        background={styles.bgProjectOne}
                        method="Metal tube cutting"
                        model="RJ-TS62"
                        area="6000xφ220"
                        speed="50m/min" />

                    <Product_comp
                        title="TS Model Tube Fiber Laser Cutting Machine"
                        href="/products/1"
                        background={styles.bgProjectOne}
                        method="Metal tube cutting"
                        model="RJ-TS62"
                        area="6000xφ220"
                        speed="50m/min" />
                </div>
            </div>

        </>

    )
}

export default Product
