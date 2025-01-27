import { LabelHTMLAttributes } from "react"

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ children, className = "", ...props }: LabelProps) => {
    return (
        <label className={`block text-white ${className}`} {...props}>
            {children}
        </label>
    )
}