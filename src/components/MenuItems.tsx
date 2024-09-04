import React from 'react'
import { MenuItem } from '../types'

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void

}

const MenuItems = ({item, addItem}:MenuItemProps) => {
  return (
    
    <>
    <button onClick={() => addItem(item)} className=' border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between'>

      <p className=' font-medium'>{item.name}</p>
      <p className=' font-bold'>{item.price}$</p>
    </button>
    </>
  )
}

export default MenuItems