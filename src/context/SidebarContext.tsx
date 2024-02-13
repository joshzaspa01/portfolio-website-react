import { ReactNode, createContext, useContext } from "react";
import { sidebarOverlayAnimation } from "../utils/animationHelpers";
import { SpringValue } from "@react-spring/web";

interface SidebarContextProps {
    overlaySetter: () => void;
    overlaySpring: {
      opacity: SpringValue<number>;
      display: SpringValue<string>;
    };
}
  

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

interface SidebarProviderProps {
    children: ReactNode
}

export const SidebarProvider = (props: SidebarProviderProps) => {

    const { overlaySetter, overlaySpring } = sidebarOverlayAnimation();

    return (
        <SidebarContext.Provider value={{ overlaySetter, overlaySpring}}>
            {props.children}
        </SidebarContext.Provider>
    )
}


// Custom Hook to use SidebarContext
export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
      throw new Error('useSidebarContext must be used within a SidebarProvider');
    }
    return context;
};
