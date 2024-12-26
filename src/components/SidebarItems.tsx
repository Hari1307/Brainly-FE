import type { ReactElement } from "react";

interface props {
    text: string;
    icon: ReactElement;
}
const SidebarItems = ({ text, icon }: props) => {
    return (
        <div className="flex items-center gap-3 pt-2 ">
            <div className="flex items-center justify-center w-10 h-10">
                {icon}
            </div>
            <span className="text-lg">{text}</span>
        </div>
    )
}

export default SidebarItems