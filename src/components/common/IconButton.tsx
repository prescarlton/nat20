import Button, { ButtonProps } from "./Button"

const IconButton = ({
  children,
  onClick,
  className,
  variant = "outlined",
}: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={`content-center w-8 h-8 px-2 ${className}`}
    >
      {children}
    </Button>
  )
}
export default IconButton
