import { Input } from "antd";
const { TextArea } = Input;
import Image from "next/image";
import styles from "../styles/contact.module.css";
import Link from "next/link";
import Head from "next/head";
import Meta from "@/comps/Meta";
import { TikTokOutlined } from "@ant-design/icons";

const Contact = () => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  return (
    <>
      <Meta
        title="Contact Us"
        description="Get in touch with Sigma Machines for inquiries, support, or custom industrial solutions – we're here to help via email, phone, or WhatsApp."
      />

      <div className="bg-[#d9d64038]">
        <div className="px-24 max-xl:px-10">
          <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 pt-9 max-xl:pt-1 pb-12">
            <div className="text-lg mt-9 max-xl:mt-3">
              <h3 className="text-[#1d214e] text-2xl font-semibold">
                Sigma Machines
              </h3>
              <p className="mt-8 text-[#d9d640]">Riyadh-Al-Sahafa</p>
              <p className="text-[#1d214e]">distrait-king</p>
              <p className="text-[#1d214e]">Abdulaziz Street</p>

              <Link
                href="mailto:info@sigmamachines.net"
                className="mt-8 text-[#d9d640]"
              >
                info@sigmamachines.net
              </Link>
              <h3>
                <Link
                  href="tel:+966569745955"
                  className="text-[#1d214e] text-2xl font-semibold"
                >
                  <span className="text-[#d9d640]">+966</span> 56 974 5955
                </Link>
              </h3>

              <p className="mt-4 text-[#858493]">
                Monday - Friday: 09:00 to 18:00 (GMT +8). Closed on Saturday
                Sunday.
              </p>

              <hr />

              <div className="flex mt-6">
                <Link href="https://www.facebook.com/share/177NhW552u/">
                  <img
                    src="../home/facebook.png"
                    width={30}
                    height={60}
                    className="mr-3"
                  />
                </Link>
                <Link href="https://www.instagram.com/sigma_machines?igsh=MWRlMmc4OTMyanJwZQ==">
                  <img
                    src="../home/instagram.png"
                    width={30}
                    height={60}
                    className="mr-3"
                  />
                </Link>

                <Link href="https://www.tiktok.com/@sigma.machines?_t=ZS-8zhbiPLCRDk&_r=1">
                  <TikTokOutlined className="text-3xl mr-3" />
                </Link>
                <Link href="https://www.linkedin.com/company/sigma-machines/">
                  <img
                    src="../home/linkedin.png"
                    width={30}
                    height={60}
                    className="mr-3"
                  />
                </Link>
              </div>
              <div className={`${styles.white_circle} mobile_d_none`}></div>
            </div>
            <div className="relative max-xl:mt-9">
              <div className="lg:w-80 lg:ml-auto max-lg:mx-auto">
                <div className={`${styles.half_circle} mobile_d_none`}></div>
                <div className="bg-white p-8 rounded-3xl ml-auto relative z-0">
                  <h3 className="text-[#1d214e] text-2xl font-semibold">
                    Write <span className="text-[#d9d640]"> A Message</span>
                  </h3>
                  <div className="mt-8 text-lg">
                    <p className="text-[#1d214e]">Full name</p>
                    <Input
                      placeholder="Enter your name"
                      size="large"
                      className="rounded-full bg-[#faf9fe] pl-4"
                    />

                    <p className="mt-4 text-[#1d214e]">Email*</p>
                    <Input
                      placeholder="Enter your email"
                      size="large"
                      className="rounded-full bg-[#faf9fe] pl-4"
                    />

                    <p className="mt-4 text-[#1d214e]">Phone</p>
                    <Input
                      placeholder="+20"
                      size="large"
                      className="rounded-full bg-[#faf9fe] pl-4"
                    />

                    <p className="mt-4 text-[#1d214e]">Message</p>
                    <TextArea
                      showCount
                      maxLength={100}
                      onChange={onChange}
                      placeholder="Write your message here"
                      style={{
                        height: 100,
                        resize: "none",
                        backgroundColor: "#faf9fe",
                        border: "1px solid #dddddd",
                        // boxShadow: "0 0 2px 1px #dddddd"
                      }}
                      // className="bg-[#faf9fe] pl-4 mb-7"
                      className="bg-[#faf9fe] custom-textarea pl-4 mb-7"
                    />

                    <Link
                      href="mailto:info@sigmamachines.net"
                      className={styles.btn_submit}
                    >
                      Submit Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <dotlottie-player
                                src="https://lottie.host/a015e608-4c14-4991-aa34-f3deec518440/eINotyliIX.json"
                                background="transparent"
                                speed="1"
                                style={{width: "300px", height: "300px"}}
                                loop
                                autoplay
                            >
                            </dotlottie-player> */}
              <img
                src="../contact/1.png"
                width={550}
                height={250}
                className="mt-20 ml-7 mobile_d_none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
