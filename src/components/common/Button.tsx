import { ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "filled" | "outlined" | "text"
  size?: "small" | "large"
}

const Button = ({
  children,
  onClick,
  className,
  variant = "filled",
  size = "large",
}: ButtonProps) => {
  return (
    <button
      className={`
      rounded-lg text-white flex items-center gap-2
      ${variant == "filled" && "bg-sky-500"} 
      ${variant == "outlined" && "border-sky-500 border-2 text-sky-500"}
      ${variant == "text" && "text-sky-500"}
      ${size == "small" && "py-1 px-3 text-sm"}
      ${size == "large" && "py-2 px-4"}
      ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
