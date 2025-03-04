import React from "react"
import { ReactSVG } from "react-svg"
import LogoImg from "@/assets/logo.svg"
import './index.css'

const Logo: React.FC = () => {
    return (
        <div className="header__logo">
            <ReactSVG beforeInjection={(svg) => { svg.classList.add('header__logo--img') }} src={LogoImg} />
            <div className="header__logo--text">
                <span>QRCODE</span>
                <span>Generator</span>
            </div>
        </div>
    )
}

export default Logo;