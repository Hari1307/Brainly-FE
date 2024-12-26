import type { ReactElement } from "react";

interface ButtonProps {
    variant: "Primary" | "Secondary";
    text: String;
    icon?: ReactElement;
    normalButton?: boolean;
    onClick?: () => void;
}

const variantClasses = {
    "Primary": "bg-purple-600 text-white rounded-lg",
    "Secondary": "bg-purple-200 text-purple-400 rounded-lg"
}

const defaultStyles = "flex px-4 py-2 w-40 items-center justify-center";
const normalStyles = defaultStyles + " w-[12.5rem] bg-purple-600 text-white rounded-lg hover:shadow-md hover:shadow-purple-300 transition-all duration-500 ease-in-out";
const Button = ({ variant, text, icon, normalButton, onClick }: ButtonProps) => {
    return (
        <button className={(normalButton ? normalStyles : variantClasses[variant] + " " + defaultStyles)} onClick={onClick}>
            <div className={(!normalButton ? "pr-2" : "")}>
                {icon}
            </div>
            {text}
        </button >
    )
}

export default Button