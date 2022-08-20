const CurrencyCard = ({
  amt,
  type,
  onClick,
}: {
  amt: number
  type: string
  onClick: () => void
}) => {
  const colors = {
    platinum: "#E5E4E2",
    gold: "gold",
    silver: "#C0C0C0",
    copper: "#B87333",
  }
  return (
    <div
      className={`bg-light-bg-alt dark:bg-dark-bg-alt px-4 py-2
shadow-hard rounded-lg flex-1
`}
      onClick={onClick}
    >
      {amt} {type}
    </div>
  )
}
export default CurrencyCard
