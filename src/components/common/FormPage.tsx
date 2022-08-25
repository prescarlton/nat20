import { ReactNode } from "react"
import { GiDiceTwentyFacesTwenty } from "react-icons/gi"

const FormPage = ({
  children,
  title,
  subtitle,
}: {
  children: ReactNode
  title: string
  subtitle?: string
}) => {
  return (
    <div
      className="h-full overflow-hidden flex flex-col bg-light-bg
            dark:bg-dark-bg md:p-8 items-center justify-center gradient-bg"
    >
      <div
        className="bg-light-bg-alt dark:bg-dark-bg-alt p-4
  shadow-hard rounded-lg flex flex-col h-full 
  w-full md:h-auto md:w-1/4 md:rounded-xl items-center
 gap-4 md:min-h-[450px]"
      >
        <div className="flex flex-col items-center">
          <GiDiceTwentyFacesTwenty className="dark:text-white text-8xl mb-2" />
          <h1 className="dark:text-white font-bold text-3xl text-center">
            {title}
          </h1>
          <h1 className="dark:text-white font-bold text-xl text-center opacity-40">
            {subtitle}
          </h1>
        </div>
        {children}
      </div>
    </div>
  )
}
export default FormPage
