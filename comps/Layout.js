import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppChatButton from "./WhatsAppChatButton";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Link
        href="mailto:info@sigmamachines.net"
        className="fixed bottom-24 right-5 z-50 bg-[#3baec1] hover:bg-[#339aab] p-4 rounded-full"
      >
        <EmailIcon className="text-white"/>
      </Link>
      <WhatsAppChatButton message={`Hello, I need more information!`} />
      <Footer />
    </div>
  );
};
export default Layout;
