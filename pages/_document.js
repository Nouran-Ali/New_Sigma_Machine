import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useTranslation } from "react-i18next";

export default function Document() {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  const position = language === "ar"
    ? "bottom-right"
    : "bottom-left";

  return (
    <Html lang="en">
      <Head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K82DBDTJ');
            `,
          }}
        />
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K82DBDTJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
        <script src="https://webchat-js.pages.dev/webchat.min.js"
          data-webchat
          data-deepseek-key="sk-YOUR_DEEPSEEK_KEY"
          data-groq-key="gsk_YOUR_GROQ_KEY"
          data-glm-key="YOUR_GLM_KEY"
          data-bot-name="My Assistant"
          data-primary-color="#4b4b4b"
          data-accent-color="#D4AF37"
          data-position="bottom-right"
          data-theme="auto"
          data-lazy-load="true"
          data-lazy-scrape="true"
          data-enable-popup="true"></script>
      </body>
    </Html>
  );
}
