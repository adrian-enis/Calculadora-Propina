import React from 'react'
import { Dispatch, SetStateAction } from 'react'




const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-15',
    value: .15,
    label: '15%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
]

type TipPorcentageFormProp = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}

const TipPorcentageForm = ({setTip,tip} : TipPorcentageFormProp) => {

 
  return (
    <div>

      <h3 className='font-black text-2xl'>Propina:{""}</h3>
      <form>
        {
          tipOptions.map((tipOpt) => (
            <div key={tipOpt.id} className='flex gap-2'>
             
              <label htmlFor={tipOpt.id}>{tipOpt.label}</label>
       
              <input type="radio" id={tipOpt.id} name='tip' value={tipOpt.value} onChange={e => setTip(+e.target.value)} checked={tipOpt.value === tip}/>

            </div>
          ))
        }
      </form>
    </div>
  )
}

export default TipPorcentageForm