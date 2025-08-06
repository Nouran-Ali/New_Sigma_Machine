import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppChatButton from "./WhatsAppChatButton";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sigma Machines | High Quality Industrial Machinery</title>
        <meta
          name="description"
          content="Sigma Machines is your trusted partner in industrial machinery – discover our top-quality machines for all your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        
        <meta
          property="og:title"
          content="Sigma Machines | High Quality Industrial Machinery"
        />
        <meta
          property="og:description"
          content="Sigma Machines offers reliable and efficient industrial machinery solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sigmamachines.net" />
        <meta property="og:image" content="/products/53.webp" />{" "}
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="">{children}</div>
      <Link
        href="mailto:info@sigmamachines.net"
        className="fixed bottom-24 right-5 z-50 bg-[#3baec1] hover:bg-[#339aab] p-4 max-lg:p-3 rounded-full"
      >
        <EmailIcon className="text-white" />
      </Link>
      <WhatsAppChatButton message={`Hello, I need more information!`} />
      <Footer />
    </>
  );
};
export default Layout;
