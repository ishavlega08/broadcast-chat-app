import { forwardRef, InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className = "", ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`w-full px-3 py-2 bg-zinc-800 text-white border border-zinc-700 rounded outline-none ${className}`}
            {...props}
        />
    )
})