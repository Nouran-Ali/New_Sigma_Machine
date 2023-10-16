import React from 'react'
import styles from "../styles/Services.module.css";
import Image from 'next/image';
import We_are_here_for_you from '@/comps/We_are_here_for_you';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'Why Sigma machines are so popular amonth others?',
    children: <p className='text-lg text-[#54545f]'>{text}</p>,
  },
  {
    key: '2',
    label: 'What is the best way to get best from Sigma machines?',
    children: <p className='text-lg text-[#54545f]'>{text}</p>,
  },
  {
    key: '3',
    label: 'What makes Sigma the best lasermachine company?',
    children: <p className='text-lg text-[#54545f]'>{text}</p>,
  },
  {
    key: '4',
    label: 'What is the future plan for Sigma?',
    children: <p className='text-lg text-[#54545f]'>{text}</p>,
  },
];

const Services = () => {
  return (
    <>
      <div className={`${styles.bg_services} mobile_d_none`}>
        <p className='text-center text-3xl text-white font-semibold pt-40'>Sigma Machines Services</p>
      </div>
      <div className='px-24 max-xl:px-10'>
        <div className='grid grid-cols-2 max-xl:grid-cols-1 gap-6 mt-20 max-xl:mt-10 mb-20'>
          <div>
            <p className='text-[#7153d9] text-lg tracking-widest uppercase font-medium'>Services</p>
            <h1 className='text-[#1c1c1c] mt-4 text-4xl font-bold'>We Offer a Wide Variety of Technical Services</h1>
            <p className='text-[#54545f] text-xl mt-4'>Ut enim ad minim veniam, quis nostrud exercitation ullamco labor is tetur adipisicing elit, sed do eiusmod</p>
            <Image src="/../services/1.jpg" width={600} height={150} className='mx-auto mt-9 rounded-lg' />
          </div>
          <div className='grid grid-cols-2 max-xl:grid-cols-2 gap-6 mt-4'>
            <div>
              <div className='bg-[#7153d938] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block'>
                <p>1</p>
              </div>
              <h3 className='text-[#1c1c1c] mt-3 text-xl font-bold'>Selling all types of laser machines</h3>
              <p className='text-[#54545f] text-lg mt-4'>Design and propose product improvements through periodical and accurate testing</p>
            </div>
            <div>
              <div className='bg-[#7153d938] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block'>2</div>
              <h3 className='text-[#1c1c1c] mt-3 text-xl font-bold'>Maintenance of the machines</h3>
              <p className='text-[#54545f] text-lg mt-4'>Design and propose product improvements through periodical and accurate testing</p>
            </div>
            <div>
              <div className='bg-[#7153d938] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block'>3</div>
              <h3 className='text-[#1c1c1c] mt-3 text-xl font-bold'>Spare parts for the machines</h3>
              <p className='text-[#54545f] text-lg mt-4'>Design and propose product improvements through periodical and accurate testing</p>
            </div>
          </div>
        </div>

        <We_are_here_for_you />
      </div>
      <div className='bg-[#e9edf4] pt-64 pb-24 -mt-44'>
        <div className='px-24 max-xl:px-10'>
          <div className='text-center'>
            <p className='text-[#7153d9] text-xl tracking-widest uppercase font-medium'>Frequently Asked Questions</p>
            <h3 className='text-[#1c1c1c] mt-3 text-5xl font-bold'>All that Need to Know</h3>
            <p className='text-[#8d8e99] text-xl mt-5 mb-12'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <Collapse defaultActiveKey={['1']} ghost showArrow={false} items={items} className='text-2xl' />
        </div>
      </div>

    </>
  )
}

export default Services
