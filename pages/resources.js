import React, { useEffect } from 'react'
import styles from "../styles/Resources.module.css";
import { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import Fiber_resources from '@/comps/Fiber_resources';
import CO2_resources from '@/comps/CO2_resources';
import Laser_marking_resources from '@/comps/Laser_marking_resources';
import Cnc_resources from '@/comps/Cnc_resources';

const Resources = () => {

  const items = [
    {
      key: '1',
      label: "Fiber Laser ",
      children: <Fiber_resources />,
    },
    {
      key: '2',
      label: "CO2 Laser",
      children: <CO2_resources />,
    },
    {
      key: '3',
      label: "Cnc Router",
      children: <Cnc_resources />,
    },
    {
      key: '4',
      label: "Laser Marking",
      children: <Laser_marking_resources />,
    },


  ];

  const [tabPosition, setTabPosition] = useState('left');
  const [tabPositionAr, setTabPositionAr] = useState('right');
  const [tabPositionTop, setTabPositionTop] = useState('top');

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
    setTabPositionTop(e.target.value);
    setTabPositionAr(e.target.value);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1280px)');

    function handleMediaChange(event) {
      if (event.matches) {
        setTabPosition("top")
      } else {
        setTabPosition("left")
      }
    }

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  return (
    <>
      <div className={`${styles.bg_resources} mobile_d_none`}>
        <h1 className='text-white text-5xl text-center pt-24'>Applications</h1>
        <h1 className='text-[#bfbfbf] text-2xl text-center pt-5'>Resources</h1>
      </div>

      <div className='px-24 max-xl:px-10 mt-12 mb-12'>
        <Tabs
          tabPosition={tabPosition
            // language == "ar" ?
            //   mediaQuery.matches ? tabPositionTop : tabPositionAr
            //   : 
            // mediaQuery.matches ? tabPositionTop : tabPosition
          }
          items={items}
          defaultActiveKey="1"
          className="custom-tab-bar"
        />
      </div>
    </>
  )
}

export default Resources
