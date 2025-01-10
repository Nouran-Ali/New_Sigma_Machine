import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Product.module.css";
import { Image } from "antd";
import { CaretRightOutlined, MailOutlined } from "@ant-design/icons";
import Product_comp from "@/comps/Product_comp";
import Head from "next/head";

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(750);
  const [imageHight, setImageHight] = useState(550);

  const [imageWidthTwo, setImageWidthTwo] = useState(1150);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1280px)");

    function handleMediaChange(event) {
      if (event.matches) {
        setImageWidth(400);
        setImageHight(300);

        setImageWidthTwo(400);
      } else {
        setImageWidth(750);
        setImageHight(500);

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
    {
      id: 1,
      name: "ATC CNC Router",
      image: "/../products/20.png",
      title: "Production Process Of ATC CNC Router",
      desc: "The ATC CNC router is designed for complex woodworking processes by utilizing automatic tool changes. With options like linear and carousel tool magazines, it supports efficient cutting, carving, engraving, and drilling for materials such as wood, MDF, acrylic, plastic, and even soft metals. Ideal for precision and time-saving operations, it can be customized with additional axes for more advanced functionalities.",
    },
    {
      id: 2,
      name: "4 Axis CNC Router Machine",
      image: "/../products/21.png",
      title: "Production Process Of 4 Axis CNC Router Machine",
      desc: "The 4-axis CNC router introduces a rotating spindle that enhances its ability to perform 3D machining, such as arc milling and cutting. It is perfect for intricate designs on cylindrical or curved surfaces and excels in producing detailed carvings and reliefs. Its versatility makes it suitable for various industries requiring precision and efficiency.",
    },
    {
      id: 3,
      name: "CNC Aluminum Milling Machine",
      image: "/../products/22.png",
      title: "Production Process Of CNC Aluminum Milling Machine",
      desc: "Specialized for aluminum, the CNC aluminum milling machine delivers high precision and durability for applications in the automotive, aerospace, and marine industries. With advanced mechanisms like ball screw transmission and servo motors, this machine ensures accurate cutting, carving, and engraving for lightweight yet robust designs.",
    },
    {
      id: 4,
      name: "CNC Wood Router",
      image: "/../products/23.png",
      title: "Production Process Of CNC Wood Router",
      desc: "The CNC wood router is a versatile tool for creating intricate designs and precise cuts on materials like wood, MDF, plastics, and acrylic. It is commonly used in woodworking projects such as furniture making, sign creation, and decorative carving. Customization options ensure it meets various processing requirements efficiently.",
    },
    {
      id: 5,
      name: "5 Axis CNC Router Machine",
      image: "/../products/24.png",
      title: "Production Process Of 5 Axis CNC Router Machine",
      desc: "The 5-axis CNC router offers unmatched flexibility by enabling simultaneous movement along five axes. This allows it to handle complex geometries and reduce project time by machining multiple surfaces in one setup. It is ideal for high-precision tasks in industries like aerospace and advanced manufacturing.",
    },
    {
      id: 6,
      name: "Fiber Laser Cutting Machine",
      image: "/../products/25.png",
      title: "Production Details Of Fiber Laser Cutting Machine",
      desc: "The fiber laser cutting machine provides a powerful solution for cutting metals with precision and speed. Its high energy efficiency and ability to handle intricate designs make it a go-to choice for industries like automotive, shipbuilding, and aerospace. Cleaner cuts and minimal thermal deformation are its key advantages.",
    },
    {
      id: 7,
      name: "Co2 Laser Cutting Machine",
      image: "/../products/26.png",
      title: "Production Process Of Co2 Laser Cutting Machine",
      desc: "The CO2 laser cutter is a versatile machine ideal for engraving and cutting materials like wood, acrylic, leather, and thin metals. Popular for both industrial and small business applications, it delivers high-quality results with precision and ease of use, making it a reliable choice for detailed projects.",
    },
    {
      id: 8,
      name: "Fiber Laser Marking Machine",
      image: "/../products/27.png",
      title: "Production Process Of Fiber Laser Marking Machine",
      desc: "The fiber laser marking machine offers high-precision engraving for metals, plastics, and other surfaces. With its ability to create permanent and detailed marks, it is widely used in industries like manufacturing, jewelry, and education. Advanced options like rotary attachments enable versatile applications, including cylindrical engraving.",
    },
    {
      id: 9,
      name: "UV Laser Marking Machine",
      image: "/../products/27.png",
      title: "Production Process Of UV Laser Marking Machine",
      desc: "The UV laser marking machine specializes in ultra-fine engraving and marking, making it ideal for sensitive materials. With minimal thermal impact, it is perfect for applications like food packaging, electronics, and glassware. Its precision and adaptability cater to high-end processing needs.",
    },
    {
      id: 10,
      name: "Laser Welding Machine",
      image: "",
      title: "Laser Welding Machine",
      desc: "The laser welding machine provides advanced solutions for joining various metals like stainless steel, aluminum, and titanium. With high precision and speed, it is widely used in industries such as electronics, medical equipment, and automotive manufacturing. Customizable options ensure it meets diverse welding requirements.",
    },
    {
      id: 11,
      name: "CNC Plasma Cutting Machine",
      image: "",
      title: "CNC Plasma Cutting Machine",
      desc: "The CNC plasma cutting machine is designed for cutting conductive metals like steel, aluminum, and copper. With its high-speed performance and precision, it is perfect for sheet metal fabrication and industrial projects. Its energy-efficient design ensures consistent and cost-effective results.",
    },
    {
      id: 12,
      name: "2024 Ultra-Portable 500W air cooled handheld welding Machine",
      image: "/../products/28.png",
      title: "Previous Next Ultra portable 500w air cooled welding",
      desc: "1. Compact & Portable Design The 2024 handheld welding tool is ultra-portable, weighing in at just a few kilograms, allowing for easy handling and operation. Its small size makes it perfect for working in tight spaces and for those who need to move quickly between tasks without sacrificing power. 2. 500W Air Cooled Welding System Equipped with a 500W power output and an air-cooling system, this tool offers consistent and reliable performance, even during extended use. The efficient cooling mechanism prevents overheating, extending the life of the equipment and ensuring that you can work for longer periods without interruptions. 3. Versatile Welding Applications Ultra-Portable 500W air cooled handheld welding，Whether it’s flat welding, lap welding, or right-angle welding, this tool excels at a variety of applications, making it an all-in-one solution for many welding needs. It also supports welding thicknesses up to 3mm, providing the flexibility to work on a range of materials and thicknesses. 4. 500W User-Friendly Operation One of the standout features of Ultra-Portable air cooled handheld welding is its simple operation. Even beginners can quickly adapt to the intuitive controls, reducing training time and improving productivity. With one-time welding, you can achieve clean, solid joints in a single pass, eliminating the need for rework. 5. Increased Production Efficiency By streamlining the welding process, the Ultra-Portable 500W Air-Cooled Handheld Welding Tool helps businesses increase production capacity. Once the weld is completed, subsequent processes are quick and straightforward, contributing to faster overall workflow and reduced downtime. 6. High-Quality Welding The high precision of the welding process ensures strong, durable joints with minimal post-weld clean-up. Whether you are dealing with metals, alloys, or other materials, you can count on the Ultra-Portable 500W Air-Cooled Handheld Welding to deliver reliable, high-quality results every time.",
    },
    {
      id: 13,
      name: "2024 Best Portable Water cooled laser welding machine 4 in1",
      image: "/../products/29.png",
      title: "Portable water cooled laser welding machine",
      desc: "1.JNTECH handheld laser welding machine adopts the latest generation of fiber laser source and adds weldseam cleaning technology. 2.Handheld laser welding machines have significant advantages over other welding machines in welding metal and are easy to operate. 3.Ordinary people can easily master the high security in half an hour. There is no direct radiation, low radiation, no harm to the body, and only protective glasses are needed to filter the strong light. 4.Handheld all-in-one laser welding machine model is easy to move, beautiful appearance can carry a maximum of 2000W power laser and chiller, fully realise the handheld all-in-one",
    },
    {
      id: 14,
      name: "Affordable Price Five-axis platform laser welding machine",
      image: "/../products/30.png",
      title: "Platform Laser Welding Machine",
      desc: "1) High degree of automation,simple welding process. 2)The non-contact operation method can meet the requirements of clean and environmental protection. 3)Improve work efficiency,the finished workpiece appearance is beautiful,the weld is small,the welding depth is large,the welding quality is high.",
    },
    {
      id: 15,
      name: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine",
      image: "/../products/31.png",
      title: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine",
      desc: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine  is an eco-friendly power welding tool with handheld laser welding gun, CNC controller, or single-arm robot to join pieces of metals or thermoplastics. Laser beam provides a concentrated heat source, which is used for spot welding, butt joint, lap joint, lap edge, lap, T butt, seam welding, narrow welds, deep welds, and kissing weld with high welding rates Handheld laser welding,cleaning,cutting machine features 1000W, 1500W, or 2000W fiber laser beam for welding joints of butt, edge, corner, tee, and lap. The handheld manual laser welder is used for welding carbon steel, stainless steel, aluminum, brass, copper, iron, silver, gold, and more tube & sheet metals. The portable handheld fiber laser welding machine will take over the traditional argon arc welding, MIG & TIG welding, and electric welding for metal joints.",
    },
    {
      id: 16,
      name: "1kw-3kw Handheld Fiber Laser Welding Machine",
      image: "/../products/32.png",
      title: "Handheld Fiber Laser Welding Machine",
      desc: "JNW1000W JNW2000w JNW3000w Fiber Laser welding machine is an eco-friendly power welding tool with handheld laser welding gun, CNC controller, or single-arm robot to join pieces of metals or thermoplastics. Laser beam provides a concentrated heat source, which is used for spot welding, butt joint, lap joint, lap edge, lap, T butt, seam welding, narrow welds, deep welds, and kissing weld with high welding rates Handheld laser welding machine features 1000W, 1500W, or laser Welding 2000W fiber laser beam for welding joints of butt, edge, corner, tee, and lap. The handheld manual laser welder is used for welding carbon steel, stainless steel, aluminum, brass, copper, iron, silver, gold, and more tube & sheet metals. The portable handheld fiber laser welding machine will take over the traditional argon arc welding, MIG & TIG welding, and electric welding for metal joints. JNW",
    },
    {
      id: 17,
      name: "2023 Top Affordable JNP1530 CNC Plasma Cutting Table for Sale",
      image: "/../products/33.png",
      title: "JNP1530 CNC Plasma Cutting Machine",
      desc: "JNP1530 CNC plasma cutting table is an automatic power tool with CNC plasma cutting system,CNC plasma table is mainly used for full sheet metal cutting in home shop, small shop, school education, or industrial manufacturing, suitable for sheet metal cutting, kitchenware, components, decorations industry, ship building, construction equipment, transport equipment, transport equipment, bridge building, wind power, structural steel, agriculture machinery, environmental protection equipment, etc.",
    },
    {
      id: 18,
      name: "JNP1530R Sheet Metal & Tube Plasma Cutter on Sale",
      image: "/../products/34.png",
      title: "JNP1530R Sheet Metal&Tube Plasma Machine",
      desc: "JNP1530R CNC plasma cutting machine can do All kinds of metal sheet and tube materials such as steel, copper,aluminum and stainless steel can be processed.Applies to iron plate, aluminum plate galvanized sheet, White Steel plate, Titanium plates, and so on like the sheet metal. Ship Building, Construction Equipment, Transport Equipment, Aerospace Industry, Bridge Building, military industrial, wind power,Structural Steel, Boiler containers, Agriculture Machinery, Chassis electrical cabinets, Elevator manufacturers, Textile Machinery, Environmental protection equipment,ect.",
    },
    {
      id: 19,
      name: "JNP2040 CNC Plasma Cutting Machine Gantry Model",
      image: "/../products/35.jpg",
      title: "CNC Plasma Cutting Machine Gantry",
      desc: "All kinds of metal materials such as steel, copper,aluminum and stainless steel can be processed.Applies to iron plate, aluminum plate galvanized sheet, White Steel plate, Titanium plates, and so on like the sheet metal. Ship Building, Construction Equipment, Transport Equipment, Aerospace Industry, Bridge Building, military industrial, wind power,Structural Steel, Boiler containers, Agriculture Machinery, Chassis electrical cabinets, Elevator manufacturers, Textile Machinery, Environmental protection equipment,ect.",
    },
    {
      id: 20,
      name: "Press Brake",
      image: "/../products/40.png",
      title: "Press Brake",
      desc: "Steel plate welded structure, hydraulic transmission, accumulator return, holistic",
    },
    {
      id: 21,
      name: "Shearing machine",
      image: "/../products/41.png",
      title: "Shearing machine",
      desc: "Back gauge controlling, General motors control, Intelligent positioning",
    },
    {
      id: 22,
      name: "DA53T 4+1Axis CNC Press Brake Machine",
      image: "/../products/42.png",
      title: "DA53T 4+1Axis CNC Press Brake Machine",
      desc: "1. Steel plate welded structure, hydraulic transmission, accumulator return, holistic processed, vibrating toeliminate stress, high strength and good rigidity.2. Mechanical torque system makes sure the synchronization of cylinders. 3. The stroke of slider and back gauge is adjusted automatically by double servo motors or transducer, and showed on CNC Mechanical torque or NC control panel. 4. Slanting wedges can be chosen to install on the top dies which can be adjusted by hands or automatically. Hydraulic compensation system is installed under the worktable.",
    },
    {
      id: 23,
      name: "WC67K E310 200T6000mm Heavy Duty Sheet Metal CNC Press",
      image: "/../products/43.jpg",
      title: "WC67K E310 200T6000mm Heavy Duty Sheet Metal CNC Press Brake",
      desc: "1. Steel plate welded structure, hydraulic transmission, accumulator return, holistic processed, vibrating toeliminate stress, high strength and good rigidity. 2. Mechanical torque system makes sure the synchronization of cylinders. 3. The stroke of slider and back gauge is adjusted automatically by double servo motors or transducer, and showed on CNC Mechanical torque or NC control panel. 4. Slanting wedges can be chosen to install on the top dies which can be adjusted by hands or automatically. Hydraulic compensation system is installed under the worktable.",
    },
    {
      id: 24,
      name: "2 Axis NC E21 Hydraulic Press Brake Machine",
      image: "/../products/45.png",
      title: "2 Axis NC Press Brake",
      desc: "Model Type :WC67K",
    },
    {
      id: 25,
      name: "DA53T 300T3200mm 4+1 Axis CNC Hydraulic Press Brake",
      image: "/../products/47.jpg",
      title: "DA53T 300T3200mm 4+1 Axis CNC Hydraulic Press Brake",
      desc: "1. Steel plate welded structure, hydraulic transmission, accumulator return, holistic processed, vibrating toeliminate stress, high strength and good rigidity. 2. Mechanical torque system makes sure the synchronization of cylinders. 3. The stroke of slider and back gauge is adjusted automatically by double servo motors or transducer, and showed on CNC Mechanical torque or NC control panel. 4. Slanting wedges can be chosen to install on the top dies which can be adjusted by hands or automatically. Hydraulic compensation system is installed under the worktable.",
    },
    {
      id: 26,
      name: "DA66T 6+1 Axis CNC Press Brake With Feeder Brand :Rbqlty",
      image: "/../products/46.jpg",
      title: "DA66T 6+1 Axis CNC Press Brake With Feeder",
      desc: "Model Type :WE67K",
    },
    {
      id: 27,
      name: "Panel Bending Machine",
      image: "/../products/48.png",
      title: "Panel Bending Machine",
      desc: "No description added",
    },
  ];

  const productsWelding = [
    {
      id: 12,
      name: "2024 Ultra-Portable 500W air cooled handheld welding Machine",
      image: "/../products/28.png",
      title: "Previous Next Ultra portable 500w air cooled welding",
      desc: "1. Compact & Portable Design The 2024 handheld welding tool is ultra-portable, weighing in at just a few kilograms, allowing for easy handling and operation. Its small size makes it perfect for working in tight spaces and for those who need to move quickly between tasks without sacrificing power. 2. 500W Air Cooled Welding System Equipped with a 500W power output and an air-cooling system, this tool offers consistent and reliable performance, even during extended use. The efficient cooling mechanism prevents overheating, extending the life of the equipment and ensuring that you can work for longer periods without interruptions. 3. Versatile Welding Applications Ultra-Portable 500W air cooled handheld welding，Whether it’s flat welding, lap welding, or right-angle welding, this tool excels at a variety of applications, making it an all-in-one solution for many welding needs. It also supports welding thicknesses up to 3mm, providing the flexibility to work on a range of materials and thicknesses. 4. 500W User-Friendly Operation One of the standout features of Ultra-Portable air cooled handheld welding is its simple operation. Even beginners can quickly adapt to the intuitive controls, reducing training time and improving productivity. With one-time welding, you can achieve clean, solid joints in a single pass, eliminating the need for rework. 5. Increased Production Efficiency By streamlining the welding process, the Ultra-Portable 500W Air-Cooled Handheld Welding Tool helps businesses increase production capacity. Once the weld is completed, subsequent processes are quick and straightforward, contributing to faster overall workflow and reduced downtime. 6. High-Quality Welding The high precision of the welding process ensures strong, durable joints with minimal post-weld clean-up. Whether you are dealing with metals, alloys, or other materials, you can count on the Ultra-Portable 500W Air-Cooled Handheld Welding to deliver reliable, high-quality results every time.",
    },
    {
      id: 13,
      name: "2024 Best Portable Water cooled laser welding machine 4 in1",
      image: "/../products/29.png",
      title: "Portable water cooled laser welding machine",
      desc: "1.JNTECH handheld laser welding machine adopts the latest generation of fiber laser source and adds weldseam cleaning technology. 2.Handheld laser welding machines have significant advantages over other welding machines in welding metal and are easy to operate. 3.Ordinary people can easily master the high security in half an hour. There is no direct radiation, low radiation, no harm to the body, and only protective glasses are needed to filter the strong light. 4.Handheld all-in-one laser welding machine model is easy to move, beautiful appearance can carry a maximum of 2000W power laser and chiller, fully realise the handheld all-in-one",
    },
    {
      id: 14,
      name: "Affordable Price Five-axis platform laser welding machine",
      image: "/../products/30.png",
      title: "Platform Laser Welding Machine",
      desc: "1) High degree of automation,simple welding process. 2)The non-contact operation method can meet the requirements of clean and environmental protection. 3)Improve work efficiency,the finished workpiece appearance is beautiful,the weld is small,the welding depth is large,the welding quality is high.",
    },
    {
      id: 15,
      name: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine",
      image: "/../products/31.png",
      title: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine",
      desc: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine  is an eco-friendly power welding tool with handheld laser welding gun, CNC controller, or single-arm robot to join pieces of metals or thermoplastics. Laser beam provides a concentrated heat source, which is used for spot welding, butt joint, lap joint, lap edge, lap, T butt, seam welding, narrow welds, deep welds, and kissing weld with high welding rates Handheld laser welding,cleaning,cutting machine features 1000W, 1500W, or 2000W fiber laser beam for welding joints of butt, edge, corner, tee, and lap. The handheld manual laser welder is used for welding carbon steel, stainless steel, aluminum, brass, copper, iron, silver, gold, and more tube & sheet metals. The portable handheld fiber laser welding machine will take over the traditional argon arc welding, MIG & TIG welding, and electric welding for metal joints.",
    },
    {
      id: 16,
      name: "1kw-3kw Handheld Fiber Laser Welding Machine",
      image: "/../products/32.png",
      title: "Handheld Fiber Laser Welding Machine",
      desc: "JNW1000W JNW2000w JNW3000w Fiber Laser welding machine is an eco-friendly power welding tool with handheld laser welding gun, CNC controller, or single-arm robot to join pieces of metals or thermoplastics. Laser beam provides a concentrated heat source, which is used for spot welding, butt joint, lap joint, lap edge, lap, T butt, seam welding, narrow welds, deep welds, and kissing weld with high welding rates Handheld laser welding machine features 1000W, 1500W, or laser Welding 2000W fiber laser beam for welding joints of butt, edge, corner, tee, and lap. The handheld manual laser welder is used for welding carbon steel, stainless steel, aluminum, brass, copper, iron, silver, gold, and more tube & sheet metals. The portable handheld fiber laser welding machine will take over the traditional argon arc welding, MIG & TIG welding, and electric welding for metal joints. JNW",
    },
  ];

  const productsPlasma = [
    {
      id: 17,
      name: "2023 Top Affordable JNP1530 CNC Plasma Cutting Table for Sale",
      image: "/../products/33.png",
      title: "JNP1530 CNC Plasma Cutting Machine",
      desc: "JNP1530 CNC plasma cutting table is an automatic power tool with CNC plasma cutting system,CNC plasma table is mainly used for full sheet metal cutting in home shop, small shop, school education, or industrial manufacturing, suitable for sheet metal cutting, kitchenware, components, decorations industry, ship building, construction equipment, transport equipment, transport equipment, bridge building, wind power, structural steel, agriculture machinery, environmental protection equipment, etc.",
    },
    {
      id: 18,
      name: "JNP1530R Sheet Metal & Tube Plasma Cutter on Sale",
      image: "/../products/34.png",
      title: "JNP1530R Sheet Metal&Tube Plasma Machine",
      desc: "JNP1530R CNC plasma cutting machine can do All kinds of metal sheet and tube materials such as steel, copper,aluminum and stainless steel can be processed.Applies to iron plate, aluminum plate galvanized sheet, White Steel plate, Titanium plates, and so on like the sheet metal. Ship Building, Construction Equipment, Transport Equipment, Aerospace Industry, Bridge Building, military industrial, wind power,Structural Steel, Boiler containers, Agriculture Machinery, Chassis electrical cabinets, Elevator manufacturers, Textile Machinery, Environmental protection equipment,ect.",
    },
    {
      id: 19,
      name: "JNP2040 CNC Plasma Cutting Machine Gantry Model",
      image: "/../products/35.jpg",
      title: "CNC Plasma Cutting Machine Gantry",
      desc: "All kinds of metal materials such as steel, copper,aluminum and stainless steel can be processed.Applies to iron plate, aluminum plate galvanized sheet, White Steel plate, Titanium plates, and so on like the sheet metal. Ship Building, Construction Equipment, Transport Equipment, Aerospace Industry, Bridge Building, military industrial, wind power,Structural Steel, Boiler containers, Agriculture Machinery, Chassis electrical cabinets, Elevator manufacturers, Textile Machinery, Environmental protection equipment,ect.",
    },
  ];

  const productsPress = [
    {
      id: 22,
      name: "DA53T 4+1Axis CNC Press Brake Machine",
      image: "/../products/42.png",
      title: "DA53T 4+1Axis CNC Press Brake Machine",
      desc: "1. Steel plate welded structure, hydraulic transmission, accumulator return, holistic processed, vibrating toeliminate stress, high strength and good rigidity.2. Mechanical torque system makes sure the synchronization of cylinders. 3. The stroke of slider and back gauge is adjusted automatically by double servo motors or transducer, and showed on CNC Mechanical torque or NC control panel. 4. Slanting wedges can be chosen to install on the top dies which can be adjusted by hands or automatically. Hydraulic compensation system is installed under the worktable.",
    },
    {
      id: 23,
      name: "WC67K E310 200T6000mm Heavy Duty Sheet Metal CNC Press",
      image: "/../products/43.jpg",
      title: "WC67K E310 200T6000mm Heavy Duty Sheet Metal CNC Press Brake",
      desc: "1. Steel plate welded structure, hydraulic transmission, accumulator return, holistic processed, vibrating toeliminate stress, high strength and good rigidity. 2. Mechanical torque system makes sure the synchronization of cylinders. 3. The stroke of slider and back gauge is adjusted automatically by double servo motors or transducer, and showed on CNC Mechanical torque or NC control panel. 4. Slanting wedges can be chosen to install on the top dies which can be adjusted by hands or automatically. Hydraulic compensation system is installed under the worktable.",
    },
    {
      id: 24,
      name: "2 Axis NC E21 Hydraulic Press Brake Machine",
      image: "/../products/45.png",
      title: "2 Axis NC Press Brake",
      desc: "Model Type :WC67K",
    },
    {
      id: 25,
      name: "DA53T 300T3200mm 4+1 Axis CNC Hydraulic Press Brake",
      image: "/../products/47.jpg",
      title: "DA53T 300T3200mm 4+1 Axis CNC Hydraulic Press Brake",
      desc: "1. Steel plate welded structure, hydraulic transmission, accumulator return, holistic processed, vibrating toeliminate stress, high strength and good rigidity. 2. Mechanical torque system makes sure the synchronization of cylinders. 3. The stroke of slider and back gauge is adjusted automatically by double servo motors or transducer, and showed on CNC Mechanical torque or NC control panel. 4. Slanting wedges can be chosen to install on the top dies which can be adjusted by hands or automatically. Hydraulic compensation system is installed under the worktable.",
    },
    {
      id: 26,
      name: "DA66T 6+1 Axis CNC Press Brake With Feeder Brand :Rbqlty",
      image: "/../products/46.jpg",
      title: "DA66T 6+1 Axis CNC Press Brake With Feeder",
      desc: "Model Type :WE67K",
    },
    {
      id: 27,
      name: "Panel Bending Machine",
      image: "/../products/48.png",
      title: "Panel Bending Machine",
      desc: "No description added",
    },
  ];

  const productsShearing = [
    {
      id: 28,
      name: "QC11K E21S 8x6000mm Hydraulic Guillotine Shearing Machine",
      image: "/../products/48.jpg",
      title: "QC11K E21S 8x6000mm Hydraulic Guillotine Shearing Machine",
      desc: "Optional Numeric Control System Nanjing Estun E21S E200PS Back gauge controlling, General motors control, Intelligent positioning, Two programmable digital output; Work piece counting 40 program memory 25 steps for each program; Unilateral positioning, Concession function One key to parameter backup and recovery, Metric system, Chinese/English.",
    },
    {
      id: 29,
      name: "Swing beam shears",
      image: "/../products/49.png",
      title: "Swing Beam shearing Machine",
      desc: "1.rack,knife,vibration to eliminate stress, welding machine, durable. 2.advanced integrated hydraulic system, good reliiability. 3.three-point support rolling guide to eliminate the bearing clearance, to ensure the quality of shear. 4.electric blade gap adjustment, quick and accurate. 5.on the full used of the blade edge on all sides,the increased use of time. 6.shear angle can be electrically adjusted,reducing the amout of shear deformation plate. 7.after the block, rv reducer electric adjudtment, electronic digital display, accurate ang reliable.",
    },
    {
      id: 30,
      name: "QC11K DAC360 16x3200 Servo Guillotine Shearing Machine",
      image: "/../products/50.png",
      title: "QC11K DAC360 16x3200 Servo Guillotine Shearing Machine",
      desc: "Optional Numeric Control System Nanjing Estun E21S E200PS Back gauge controlling, General motors control, Intelligent positioning, Two programmable digital output; Work piece counting 40 program memory 25 steps for each program; Unilateral positioning; Concession function One key to parameter backup and recovery, Metric system, Chinese/English.",
    },
    {
      id: 31,
      name: "DAC360 CNC Hydraulic Shearing",
      image: "/../products/51.jpg",
      title: "DAC360 CNC Hydraulic Shearing",
      desc: "No description",
    },
    {
      id: 32,
      name: "Large Heavy Duty Guillotine Shears",
      image: "/../products/52.jpg",
      title: "Large Heavy Duty Guillotine Shears",
      desc: "Optional Numeric Control System Nanjing Estun E21S E200PS Back gauge controlling, General motors control, Intelligent positioning, Two programmable digital output, Work piece counting 40 program memory 25 steps for each program, Unilateral positioning, Concession function One key to parameter backup and recovery, Metric system, Chinese/English.",
    },
  ];

  const product = products.find((item) => item.id === Number(id));

  const visibleProducts = products.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= products.length ? 0 : prevIndex + 3
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [products.length]);

  const truncatedDesc =
    product?.desc.length > 100
      ? product?.desc.substring(0, 100) + "..."
      : product?.desc;

  const mailtoLink = `mailto:info@sigmamachines.net?subject=Inquiry about ${product?.name}`;

  return (
    <>
      <Head>
        <title>Sigma Machines / Products</title>
        <link rel="icon" href="../logo.png" />
      </Head>

      <div className="relative">
        <div className={`${styles.bg_products} mobile_d_none`}>
          <p className="text-center text-3xl text-white font-semibold pt-36 relative z-10">
            Sigma Machines Products ( {product?.name} )
          </p>
          <p className="text-center text-lg text-[#a9a9a9] mt-3 relative z-10">
            HIGH SPEED, HIGH ACCURACY, HIGH EFFICIENCY
          </p>
        </div>

        <div className="bg-[#00000085] h-[350px] w-full absolute top-0 z-0"></div>
      </div>

      <div className="px-24 max-xl:px-10">
        {product?.id == "10" ||
        product?.id == "11" ||
        product?.id == "20" ||
        product?.id == "21" ? (
          <p className="mt-5 mb-5 text-lg text-[#54545f]">{product?.desc}</p>
        ) : (
          ""
        )}

        {product?.id == "10" ||
        product?.id == "11" ||
        product?.id == "20" ||
        product?.id == "21" ? (
          <>
            {product?.id == "10" ? (
              <>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
                  {productsWelding.map((product) => (
                    <div>
                      <Product_comp
                        key={product.id}
                        title={product.name}
                        href={`/products/${product.id}`}
                        background={{
                          backgroundImage: `url(${product.image})`,
                        }}
                        method={product.title}
                        description={truncatedDesc}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : product?.id == "11" ? (
              <>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
                  {productsPlasma.map((product) => (
                    <div>
                      <Product_comp
                        key={product.id}
                        title={product.name}
                        href={`/products/${product.id}`}
                        background={{
                          backgroundImage: `url(${product.image})`,
                        }}
                        method={product.title}
                        description={truncatedDesc}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : product?.id == "20" ? (
              <>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
                  {productsPress.map((product) => (
                    <div>
                      <Product_comp
                        key={product.id}
                        title={product.name}
                        href={`/products/${product.id}`}
                        background={{
                          backgroundImage: `url(${product.image})`,
                        }}
                        method={product.title}
                        description={truncatedDesc}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : product?.id == "21" ? (
              <>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
                  {productsShearing.map((product) => (
                    <div>
                      <Product_comp
                        key={product.id}
                        title={product.name}
                        href={`/products/${product.id}`}
                        background={{
                          backgroundImage: `url(${product.image})`,
                        }}
                        method={product.title}
                        description={truncatedDesc}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-7 mb-7">
              <div className="col-span-2">
                <Image
                  src={product?.image}
                  width={imageWidth}
                  height={imageHight}
                  className="rounded-lg "
                />
              </div>
              <div>
                <div>
                  <div className="bg-[#f7f4f775] p-12 rounded-3xl">
                    <h3 className="text-[#d9d640] text-2xl tracking-widest">
                      3015S Model Economic {product?.name}
                    </h3>

                    <h3 className="text-[#1c1c1c] text-xl mt-5">Model</h3>
                    <p className="text-[#8d8e99] text-xl mt-2">RJ-3015S</p>

                    <h3 className="text-[#1c1c1c] text-xl mt-5">
                      Working Area
                    </h3>
                    <p className="text-[#8d8e99] text-xl mt-2">1530*3050mm</p>

                    <h3 className="text-[#1c1c1c] text-xl mt-5">Speed</h3>
                    <p className="text-[#8d8e99] text-xl mt-2">50m/min</p>
                  </div>
                  <div className="flex bg-[#23b85e] text-white rounded-2xl mt-5 p-5 text-xl">
                    <a href={mailtoLink} className="flex items-center">
                      <MailOutlined />
                      <p className="ml-4">Email us</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-7 mb-7">
              <div className="col-span-2 ml-6">
                <h3 className="text-[#1c1c1c] text-3xl">Product Parameters</h3>
                <p className="mt-5 mb-5 text-lg text-[#54545f]">
                  {product?.desc}
                </p>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1">
                  <h3 className="text-xl">Model</h3>
                  <p className="text-lg text-[#54545f]">3015S, 4015S, 6015S</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Working Size</h3>
                  <p className="text-lg text-[#54545f] col-span-2">
                    3000×1500mm, 4000x1500mm, 6000x1500mm
                  </p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Laser Power</h3>
                  <p className="text-lg text-[#54545f]">1000-3000w</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Linkage speed</h3>
                  <p className="text-lg text-[#54545f]">100m/min</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Positioning Accuracy</h3>
                  <p className="text-lg text-[#54545f]">±0.05mm</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Repeatability</h3>
                  <p className="text-lg text-[#54545f]">±0.03mm</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Maximum Acceleration</h3>
                  <p className="text-lg text-[#54545f]">1.0G</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* <div>
          <h2 className="text-center text-4xl mt-9">Features</h2>
          <hr className={`${styles.line} mx-auto text-center mt-3`} />
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9">
            <div>
              <h3 className="text-2xl mt-5 mb-5">
                Machine Body--Welding Machine Body
              </h3>
              <div className="flex items-center">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  High strength, not easily deformed
                </p>
              </div>
              <p className="text-lg mt-2 text-[#54545f]">
                The following features ensure that the bed will not be deformed
                for 20 years like high strength, good stability and strong
                tensile strength.
              </p>
              <div className="flex items-center mt-5">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">More stable</p>
              </div>
              <p className="text-lg mt-2 text-[#54545f]">
                The rectangular tube has a wall thickness of 6 mm and the entire
                body weighs 3,000 kg.
              </p>
            </div>
            <div className="mx-auto">
              <Image
                src="/../products/9.png"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="bg-[#f2f5fb] py-8">
        <div className="px-24 max-xl:px-10">
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9">
            <div className="mx-auto">
              <Image
                src="/../products/10.png"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>

            <div>
              <h3 className="text-2xl mt-5 mb-5">
                Laser Head--Swiss Laser Head--Raytools Brand
              </h3>
              <div className="flex items-center text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Collimating Lens and Focal Lens Adopt Compound Lens,to Obtain
                  the Obtimal Optical Quality and the Cutting Effect.{" "}
                </p>
              </div>
              <div className="flex items-center mt-5 text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Completely Sealed Internal Structure of Laser Head can Avoid
                  Optical Part Polluted by Dust.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24 max-xl:px-10">
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9 mb-9">
          <div>
            <h3 className="text-2xl mt-5 mb-5">
              Aviation Aluminium Cross-Beam
            </h3>
            <div className="flex items-center">
              <CaretRightOutlined />
              <p className="ml-3 text-xl">High toughness and ductility</p>
            </div>
            <p className="text-lg mt-2 text-[#54545f]">
              The aerospace industry extrudes aluminum profiles and undergoes
              fine processing after extrusion molding and quenching heat aging
              to make the overall rigidity and surface quality of the beam very
              good.
            </p>

            <div className="flex items-center mt-5">
              <CaretRightOutlined />
              <p className="ml-3 text-xl">High speed and precise cutting</p>
            </div>
            <p className="text-lg mt-2 text-[#54545f]">
              The beam structure optimized by finite element analysis, based on
              the metal characteristics of aluminum alloy, is
              corrosion-resistant, lightweight, high rigidity, which guarantees
              the high-speed movement during laser processing, and high-speed
              cutting of various patterns can be achieved under the condition of
              satisfying accuracy.
            </p>

            <div className="flex items-center mt-5">
              <CaretRightOutlined />
              <p className="ml-3 text-xl">More efficient</p>
            </div>
            <p className="text-lg mt-2 text-[#54545f]">
              The aluminum profile beam of the aerospace industry allows the
              equipment to have efficient dynamic performance, greatly improving
              processing efficiency while ensuring processing quality.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/../products/11.png"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f2f5fb] py-8">
        <div className="px-24 max-xl:px-10">
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9">
            <div className="mx-auto">
              <Image
                src="/../products/12.png"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>

            <div>
              <h3 className="text-2xl mt-5 mb-5">
                Water Cooling System–Hanli Brand
              </h3>
              <div className="flex items-center text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Dual Cooling Function:Laser Source Cooling, Laser Head
                  Cooling.
                </p>
              </div>
              <div className="flex items-center mt-5 text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Multiple Protection Functions,Passive Alarm Terminals and
                  Remote Control Terminals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24 max-xl:px-10">
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9 mb-9">
          <div>
            <p className="text-lg mt-9 text-[#54545f]">
              Ruijie fiber laser cutting machine adopts international famous
              brands, such as Taiwan HIWIN guide rail & YYC rack, Japanese
              YASKAWA servo motor motor & SHIMPO reducer, which guarantees high
              running speed, acceleration, accuracy and stability.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/../products/13.png"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f2f5fb] py-8">
        <div className="px-24 max-xl:px-10">
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9">
            <div className="mx-auto">
              <Image
                src="/../products/14.png"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>

            <div>
              <h3 className="text-2xl mt-5 mb-5">IPAD Designing Screen</h3>
              <div className="flex items-center text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Use the high definition toughened glass screen, more exquisite
                  and delicate, the operation is smoother.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="px-24 max-xl:px-10">
        <h2 className="text-center text-4xl mt-9">Applications</h2>
        <hr className={`${styles.line} mx-auto text-center mt-3`} />

        <p className="mt-5 text-center">
          Widely used in advertising, high pressure / low voltage electrical
          cabinet production, textile machinery accessories, kitchen appliances,
          cars, machinery, elevators, electrical accessories, spring coil
          pieces, metro line parts and other industries.{" "}
        </p>
        <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-4 mt-9">
          <div className="mx-auto">
            <Image
              src="/../products/15.jpg"
              width={imageWidthTwo}
              height={imageHight}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>   */}

      <div className="px-24 max-xl:px-10">
        <h2 className="text-4xl mt-9">You Also Might Like</h2>
        <hr className={`${styles.line} mt-3`} />

        <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
          {visibleProducts.map((product) => (
            <div>
              <Product_comp
                key={product.id}
                title={product.name}
                href={`/products/${product.id}`}
                background={{ backgroundImage: `url(${product.image})` }}
                method={product.title}
                description={truncatedDesc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
