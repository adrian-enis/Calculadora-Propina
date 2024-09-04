import React from 'react'
import { MenuItem, OrderItem } from '../types'
import { formatCurrency } from '../helpers'
type OrderContentProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem["id"]) => void
}

const OrderContent = ({ order, removeItem }: OrderContentProps) => {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>
      <div className='space-y-3 mt-5'>
        {

          order.map(item => (
            <div key={item.id} className='flex justify-between items-center  border-t  py-5 last-of-type:border-b'>
              <div className=''>

                <p className='text-lg'>{item.name} - {formatCurrency(item.price)}</p>
                <p className=' font-bold'>cantidad: {item.quantity} {formatCurrency(item.price * item.quantity)}</p>
              </div>
              <button className=' bg-red-600 h-8 w-8 font-black  rounded-full text-white' onClick={() => removeItem(item.id)}>X</button>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default OrderContent