import { FaSpinner } from "react-icons/fa"

const LoadingPage = () => {
  return (
    <div className="flex flex-col h-full w-full gap-2 items-center justify-center dark:text-white">
      <FaSpinner className="animate-spin text-5xl" />
      <h1 className="text-2xl">Loading</h1>
    </div>
  )
}
export default LoadingPage
