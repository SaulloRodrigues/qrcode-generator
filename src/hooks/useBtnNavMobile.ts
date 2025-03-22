import { useState } from "react"

export const useBtnNavMobile = () => {
    const [isMenuOpened, setMenuOpened] = useState<boolean>(false);

    const changeMenuOpened = (): void => {
        setMenuOpened(!isMenuOpened);
    }

    return { isMenuOpened, changeMenuOpened }
}