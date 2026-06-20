import React from "react";
import styles from "../styles/Services.module.css";
import Meta from "@/comps/Meta";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <>

            <Meta
                title="CNC & Laser Machine Maintenance in Saudi Arabia | Professional Service & Technical Support – Sigma Machines"
                description="Professional CNC and laser machine maintenance in Saudi Arabia. Sigma Machines offers after-sales service, annual maintenance contracts, on-site repairs, and local support for Chinese CNC machines."
                keywords="
    CNC machine maintenance Saudi Arabia,
    Fiber laser machine maintenance,
    CNC router repair service,
    Laser welding machine maintenance,
    Industrial machine maintenance KSA,
    China CNC distributor service Saudi Arabia,
    On-site CNC repair,
    Preventive maintenance Saudi Arabia
  "
            />


            <div dir={language === "en" ? "ltr" : "rtl"}>
                <div className="mx-auto py-10 px-24 max-lg:px-10 space-y-10">

                    <h1 className="text-4xl font-bold">
                        {t("Privacy Policy")}
                    </h1>

                    <p>
                        {t("Last Updated")}
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("Information We Collect")}
                        </h2>
                        <p>
                            {t("Information We Collect Description")}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("How We Use Your Information")}
                        </h2>
                        <p>
                            {t("How We Use Your Information Description")}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("Cookies and Analytics")}
                        </h2>
                        <p>
                            {t("Cookies and Analytics Description")}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("Data Security")}
                        </h2>
                        <p>
                            {t("Data Security Description")}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("Third-Party Services")}
                        </h2>
                        <p>
                            {t("Third-Party Services Description")}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("International Privacy Rights")}
                        </h2>
                        <p>
                            {t("International Privacy Rights Description")}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("Updates to This Policy")}
                        </h2>
                        <p>
                            {t("Updates to This Policy Description")}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            {t("Contact Us")}
                        </h2>
                        <p>
                            {t("Contact Us Description")}
                        </p>

                        <ul className="mt-4 space-y-2">
                            <li>
                                <strong>Sigma Machines</strong>
                            </li>
                            <li>{t("Email")}: info@sigmamachines.net</li>
                            <li>{t("Website")}: www.sigmamachines.net</li>
                            <li>{t("Saudi Arabia")}</li>
                        </ul>
                    </section>

                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
