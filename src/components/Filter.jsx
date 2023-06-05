import React from 'react'

const Filter = () => {
  return (
    <div className="mt-10">
    <ul className="flex items-center justify-end gap-x-10 mr-48 text-slate-500">
      <li className='hover:text-slate-800'><button>Delivery Time</button></li>
      <li className='hover:text-slate-800'><button>Rating</button></li>
      <li className='hover:text-slate-800'><button>Cost: Low to High</button></li>
      <li className='hover:text-slate-800'><button>Cost: High to Low</button></li>
      <li className='hover:text-orange-400 text-lg'>Filter</li>
    </ul>
  </div>
  )
}

export default Filter