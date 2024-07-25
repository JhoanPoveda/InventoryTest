export function InventoryCard({ inventory }) {
  return (
      <div>
        <h1>{inventory.serial_number}</h1>
        <h1>{inventory.product_type}</h1>
    </div>
  )
}
