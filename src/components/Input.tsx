import { forwardRef } from "react";

interface props {
    type: "text" | "password"
    placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, props>(({ type, placeholder }, ref) => {
    return (
        <div className="p-1">
            <input ref={ref} type={type} placeholder={placeholder} className="border p-2 rounded-md " />
        </div>
    )
})