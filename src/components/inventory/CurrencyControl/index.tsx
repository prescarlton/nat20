import { useState } from "react"
import Button from "../../common/Button"
import CurrencyCard from "./CurrencyCard"

const CurrencyControl = () => {
  const [showEdit, setShowEdit] = useState(false)

  const handleCurrencyClick = () => setShowEdit((prev) => !prev)
  return (
    <div className="flex flex-col w-full gap-2">
      <div
        className="flex items-center gap-2
w-full md:w-auto"
      >
        <CurrencyCard amt={1} type="P" onClick={handleCurrencyClick} />
        <CurrencyCard amt={18} type="E" onClick={handleCurrencyClick} />
        <CurrencyCard amt={12} type="G" onClick={handleCurrencyClick} />
        <CurrencyCard amt={32} type="S" onClick={handleCurrencyClick} />
        <CurrencyCard amt={39} type="C" onClick={handleCurrencyClick} />
      </div>
      {showEdit && (
        <div
          className="w-full flex bg-light-bg-alt dark:bg-dark-bg-alt px-4 py-2
        shadow-hard rounded-lg flex-1"
        >
          <Button>-</Button>
          <Button>+</Button>
        </div>
      )}
    </div>
  )
}
export default CurrencyControl
