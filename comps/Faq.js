import React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Collapse } from "antd";

const Faq = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    const items = [
        // {
        //     key: "1",
        //     label: t("What services does Sigma provide for CNC machines?"),
        //     children: <p className="text-lg text-[#54545f] ml-6">{t("We provide the supply and sale of CNC machines in various types and capacities, in addition to installation, training, maintenance, and after-sales services to ensure optimal machine performance.")}</p>,
        // },
        // {
        //     key: "2",
        //     label: t("Are the machines suitable for beginners or only for professionals?"),
        //     children: <p className="text-lg text-[#54545f] ml-6">{t("Sigma machines are suitable for both beginners and professionals. We provide full operational training along with continuous technical support.")}</p>,
        // },
        // {
        //     key: "3",
        //     label: t("Can the machine be customized to suit my project needs?"),
        //     children: <p className="text-lg text-[#54545f] ml-6">{t("Yes, we offer customized solutions based on the nature of your project and help you choose the appropriate specifications according to your workspace and production requirements.")}</p>,
        // },
        // {
        //     key: "4",
        //     label: t("Do you provide periodic maintenance services?"),
        //     children: <p className="text-lg text-[#54545f] ml-6">{t("Yes, we provide periodic maintenance to ensure machine efficiency, reduce breakdowns, and extend the machine’s lifespan.")}</p>,
        // },
        // {
        //     key: "5",
        //     label: t("What does after-sales service include?"),
        //     children: <p className="text-lg text-[#54545f] ml-6">{t("After-sales service includes technical support, consultations, maintenance, spare parts supply, and continuous follow-up to ensure credibility and customer satisfaction.")}</p>,
        // },
        // {
        //     key: "6",
        //     label: t("Do you offer machine shipping inside and outside the country?"),
        //     children: <p className="text-lg text-[#54545f] ml-6">{t("Yes, we provide safe shipping services both domestically and internationally, ensuring the machine’s safety during transportation.")}</p>,
        // },

        {
            key: "1",
            label: t("What is a CNC machine and what are its main uses?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("A CNC machine (Computer Numerical Control) is an automated manufacturing machine that uses computer-controlled instructions to cut, engrave, drill, shape, and fabricate materials with high precision. CNC machines are widely used in woodworking, metal fabrication, acrylic processing, furniture manufacturing, signage production, and industrial manufacturing applications.")}</p>,
        },
        {
            key: "2",
            label: t("How does a CNC machine work?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("A CNC machine operates using digital design files created through CAD/CAM software. The machine follows programmed instructions to automatically control movement, cutting tools, and machining operations, delivering accurate, repeatable, and efficient production results while minimizing human error.")}</p>,
        },
        {
            key: "3",
            label: t("What is the difference between a CNC Router and other CNC machines?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("A CNC Router is primarily designed for cutting and engraving wood, MDF, acrylic, plastics, and composite materials. Other CNC machines such as CNC milling machines, CNC lathes, and fiber laser cutting machines are optimized for metalworking, precision machining, and industrial manufacturing applications. Choosing the right machine depends on your material type, production goals, and project requirements.")}</p>,
        },
        {
            key: "4",
            label: t("What is the difference between 3-axis, 4-axis, and 5-axis CNC machines?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("A 3-axis CNC machine handles standard cutting and engraving tasks, while a 4-axis CNC machine adds rotational movement for more complex shapes. A 5-axis CNC machine offers advanced multi-directional machining capabilities, making it ideal for highly detailed industrial components, molds, and precision manufacturing projects.")}</p>,
        },
        {
            key: "5",
            label: t("How do I choose the right CNC machine for my project?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("Selecting the right CNC machine depends on several factors including material type, production volume, workpiece dimensions, required precision, and available budget. Sigma Machines helps customers identify the most suitable CNC solution based on their business needs, workspace requirements, and future production goals.")}</p>,
        },
        {
            key: "6",
            label: t("How much does a CNC machine cost?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("The price of a CNC machine varies depending on machine size, working area, number of axes, automation features, spindle power, and production capabilities. Entry-level CNC machines are typically more affordable, while industrial CNC machines with advanced specifications require a higher investment. Contact Sigma Machines for a customized quotation based on your specific requirements.")}</p>,
        },
        {
            key: "7",
            label: t("Does Sigma provide installation and training after purchasing a CNC machine?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("Yes. Sigma Machines provides professional machine installation, operator training, and technical guidance to ensure customers can safely and efficiently operate their CNC machines. Our team supports clients throughout the setup process and beyond.")}</p>,
        },
        {
            key: "8",
            label: t("Does Sigma provide CNC machine maintenance and spare parts?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("Yes. Sigma Machines offers preventive maintenance services, technical support, troubleshooting assistance, and genuine spare parts for CNC machines. Our maintenance solutions help maximize machine performance, reduce downtime, and extend equipment lifespan.")}</p>,
        },
        {
            key: "9",
            label: t("Can a CNC machine be upgraded after purchase?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("In many cases, CNC machines can be upgraded with additional features such as rotary axes, automation systems, software enhancements, improved spindles, and advanced control systems. Sigma Machines can evaluate upgrade possibilities based on your machine model and production requirements.")}</p>,
        },
        {
            key: "10",
            label: t("What services does Sigma Machines provide for CNC machines?"),
            children: <p className="text-lg text-[#54545f] ml-6">{t("Sigma Machines provides complete CNC solutions including machine supply, consultation, installation, operator training, maintenance services, technical support, spare parts, machine upgrades, and after-sales services. We help manufacturers improve productivity, precision, and operational efficiency through reliable CNC technology.")}</p>,
        },

    ];

    return (
        <div>
            <div className="bg-[#d9d64038] pt-64 pb-24 -mt-44">
                <div className="px-24 max-xl:px-10">
                    <div className="text-center">
                        <p className="text-[#d9d640] text-xl tracking-widest uppercase font-medium">
                            {t("Frequently Asked Questions")}
                        </p>
                        <h3 className="text-[#1c1c1c] mt-3 text-5xl font-bold mb-12">
                            {t("All that Need to Know")}
                        </h3>
                        {/* <p className="text-[#8d8e99] text-xl mt-5 mb-12">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p> */}
                    </div>

                    <Collapse
                        defaultActiveKey={["1"]}
                        ghost
                        // showArrow={false}
                        showArrow
                        items={items}
                        className="text-2xl"
                        expandIcon={({ isActive }) =>
                            isActive ? (
                                <MinusOutlined className="text-xl text-[#283D63] mt-4" />
                            ) : (
                                <PlusOutlined className="text-xl text-[#283D63] mt-4" />
                            )
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Faq
