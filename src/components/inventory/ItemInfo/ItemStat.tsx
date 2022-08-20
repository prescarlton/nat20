const ItemStat = ({ label, stat }: { label: string; stat: string }) => {
  return (
    <div className="flex gap-1 items-center">
      <h2 className="font-bold">{label}:</h2>
      <h2>{stat}</h2>
    </div>
  )
}
export default ItemStat
