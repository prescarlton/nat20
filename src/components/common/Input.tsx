import { ChangeEvent, HTMLInputTypeAttribute } from "react"

interface InputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
  type?: HTMLInputTypeAttribute
  label?: string
}

const Input = ({
  value,
  onChange,
  placeholder,
  className,
  type,
  label,
}: InputProps) => {
  return (
    <div className="flex flex-col items-start">
      <h2>{label}</h2>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`py-2 px-4 border-2 dark:border-white bg-transparent border-opacity-40 
            dark:text-white rounded-lg w-full ${className}`}
        type={type}
      />
    </div>
  )
}
export default Input
