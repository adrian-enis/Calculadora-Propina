import MenuItems from "./components/MenuItems"
import OrderContent from "./components/OrderContent"
import OrderTotal from "./components/OrderTotal"
import TipPorcentageForm from "./components/TipPorcentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder"

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()
  return (
    <>
      <header className=' bg-teal-400 py-2 md:py-5'>
        <h1 className=' text-center text-2xl font-bold md:text-4xl md:font-extrabold'>Calculadora de Propinas y Consumos</h1>
      </header>
      <main className=" max-w-7xl mx-auto  my-10 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menu</h2>
          <div className=" space-y-3 mt-5">

            {
              menuItems.map((item) => (
                <MenuItems
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))
            }
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            order.length > 0 ? (
              <>
                <OrderContent order={order} removeItem={removeItem} />
                <TipPorcentageForm setTip={setTip} tip={tip} />
                <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />

              </>
            ) : (
              <p className=" text-center font-bold text-2xl">La order esta vacia</p>
            )

          }
        </div>

      </main>
    </>
  )
}

export default App
