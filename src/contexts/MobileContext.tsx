import { createContext, useContext, ReactNode } from "react";
import { useBtnNavMobile } from "@/hooks/useBtnNavMobile";

interface MobileContextType {
    isMenuOpened: boolean;
    changeMenuOpened: () => void;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

export const MobileProvider = ({ children }: { children: ReactNode }) => {
    const { isMenuOpened, changeMenuOpened } = useBtnNavMobile();

    return (
        <MobileContext.Provider value={{ isMenuOpened, changeMenuOpened }}>
            {children}
        </MobileContext.Provider>
    );
};

export const useMobile = (): MobileContextType => {
    const context = useContext(MobileContext);
    if (!context) {
        throw new Error("useMobile should be used in a MobileProvider!!!");
    }
    return context;
};
