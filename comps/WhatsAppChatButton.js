const WhatsAppChatButton = () => {
  const phoneNumber = "+966569745955";
  const message = "Hello, I need more information!";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
        {/* <span className="ml-2 text-sm">Chat with us</span> */}
      </a>
    </div>
  );
};

export default WhatsAppChatButton;
