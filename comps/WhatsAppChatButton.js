import { useTranslation } from "react-i18next";

const WhatsAppChatButton = () => {
  const [t, i18n] = useTranslation();
  const { language } = i18n;

  const phoneNumber = "+966569745955";
  const message = "Hello, I need more information!";
  const messageAr = "مرحبا احتاج المزيد من المعلومات";
  const siteName = "Sigma Machines";
  const refCode = `[Ref: WEB-${Date.now().toString().slice(-4)}]`;
  const fullText = language === "en"
  ? `Hello, I need more information from your website (${siteName}).\n\n${refCode}`
  : `مرحباً، أود الحصول على المزيد من المعلومات من موقعكم الإلكتروني (${siteName}).\n\n${refCode}`;


  return (
    <div className={`fixed bottom-5 ${language === "en" ? "right-5" : "right-5"} z-50`}>
      <a
        // href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        //   language === "en" ? message : messageAr
        // )}`}
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 text-white p-3 max-lg:p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
        <span className="mx-2 text-sm">{t("Contact us")}</span>
      </a>
    </div>
  );
};

export default WhatsAppChatButton;
