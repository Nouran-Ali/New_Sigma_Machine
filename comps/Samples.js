import React from 'react'
import { Tabs } from 'antd';
import Fiber_laser_sample from './Fiber_laser_sample';
import CO2_Laser_sample from './CO2_Laser_sample';
import Cnc_router_sample from './Cnc_router_sample';
import Laser_marking_sample from './Laser_marking_sample';

const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'Fiber Laser',
        children: <Fiber_laser_sample />,
    },
    {
        key: '2',
        label: 'CO2 Laser',
        children: <CO2_Laser_sample />,
    },
    {
        key: '3',
        label: 'Cnc Router',
        children: <Cnc_router_sample />,
    },
    {
        key: '4',
        label: 'Laser Marking',
        children: <Laser_marking_sample />,
    },
];

const Samples = () => {

    return (
        <div className='mt-12 mb-12 px-24 max-xl:px-10 Samples'>
            {/* <h1 className='text-xl tracking-widest uppercase text-center'>Samples</h1> */}
            <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                indicatorSize={(origin) => origin - 16}
                centered={true}
                className='mt-5'
            />
        </div>
    )
}

export default Samples
