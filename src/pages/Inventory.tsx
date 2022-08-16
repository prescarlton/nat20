import PageTitle from "../components/common/PageTitle"
import InventoryItem from "../components/inventory/InventoryItem"
import Page from "../components/Page"
import { fakeItems } from "../fakeData/inventory"

const InventoryPage = () => {
  return (
    <Page>
      <PageTitle title="Inventory" />
      <div className="flex gap-4 flex-wrap mt-8">
        {fakeItems.map((item) => (
          <InventoryItem key={item.id} {...item} />
        ))}
      </div>
    </Page>
  )
}
export default InventoryPage
