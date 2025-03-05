import { useRef, useState } from "react";

export const useQrCode = () => {
    const qrCodeRef = useRef<SVGSVGElement | null>(null);
    const [downloadUrl, setDownloadUrl] = useState<string>("");

    const generateQrCodeUrl = () => {
        if (qrCodeRef.current) {
            const serializer = new XMLSerializer();
            const svgData = serializer.serializeToString(qrCodeRef.current);
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const img = new Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx?.drawImage(img, 0, 0);
                const pngUrl = canvas.toDataURL("image/png");
                setDownloadUrl(pngUrl);
            };

            img.src = "data:image/svg+xml;base64," + btoa(svgData);
        }
    };

    return { qrCodeRef, downloadUrl, generateQrCodeUrl };
};