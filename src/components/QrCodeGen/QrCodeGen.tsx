import React, { useEffect, useState } from "react";
import "./index.css";
import { QRCodeSVG } from "qrcode.react";
import Input from "@/components/Input/Input";
import { useTranslation} from "react-i18next";
import { FaCircleDown } from "react-icons/fa6";
import { useQrCode } from "@/hooks/useQrCode";

const QrCodeGen: React.FC = () => {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState<string>("");
    const { qrCodeRef, downloadUrl, generateQrCodeUrl } = useQrCode();
    useEffect(() => {
        if (inputValue) {
            generateQrCodeUrl();
        }
    }, [inputValue, generateQrCodeUrl]);

    return (
        <div className="qrcd__gen">
            <div className="qrcd__gen--input__ctn">
                <Input
                    id="qrcd_input"
                    className="qrcd__gen--input"
                    autoComplete="off"
                    placeholder={t("homePage.main.input.placeholder")}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="qrcd__gen__ctn">
                <div className="qrcd__gen__ctn__image">
                    <QRCodeSVG
                        ref={qrCodeRef}
                        value={inputValue}
                        className="qrcd__gen__ctn__image--img"
                    />
                </div>
                <a
                    href={downloadUrl || "#"}
                    download={downloadUrl ? "qrcode.png" : undefined}
                    className="qrcd__gen__ctn__download--btn"
                    onClick={(e) => {
                        if (!downloadUrl) {
                            e.preventDefault();
                            generateQrCodeUrl();
                        }
                    }}
                >
                    {t("homePage.main.button.value")} <FaCircleDown />
                </a>
            </div>
        </div>
    );
};

export default QrCodeGen;
