import { useMobile } from '@/contexts/MobileContext';
import './index.css'

const ButtonNavMobile: React.FC = () => {

    const { isMenuOpened, changeMenuOpened } = useMobile();

    return (
        <button id="btn_menu_mobile" onClick={changeMenuOpened} className={`navbar__menu-button ${isMenuOpened ? "active" : ""}`}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};

export default ButtonNavMobile;