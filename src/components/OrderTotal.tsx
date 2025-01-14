import React, { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}

const OrderTotal = ({order, tip, placeOrder}: OrderTotalProps) => {

  const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmount = useMemo(() => subTotal * tip, [tip, order])
  const total = useMemo(() =>subTotal + tipAmount, [tip, order] )
  return (
    <>
      <div className='space-y-3'>
        <h2 className=' font-black text-2xl'>TotaLes y propinas:</h2>
        <p>Subtotales a pagar: {""}
          <span className=' font-bold'>{formatCurrency(subTotal)}</span>
        </p>

        <p>Propina: {""}
          <span className=' font-bold'>{formatCurrency(tipAmount)}</span>
        </p>

        <p>Total a pagar:{""}
          <span className=' font-bold'>{formatCurrency(total)}</span>
        </p>
      </div>
      <button className=' w-full bg-black p-3 rounded-sm text-white uppercase font-bold disabled:opacity-10' onClick={placeOrder} disabled={total === 0}>Guardar Orden</button>
    </>
  )
}

export default OrderTotal