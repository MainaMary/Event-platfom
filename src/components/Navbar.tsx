import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'

const menuItems = [
  {
    label:'Search',
    path:'/'
  },{
    label:'Favorites',
    path:'/favorites'
  },{
    label:'My tickets',
    path:'/tickets'
  }
]
const Navbar = () => {
  return (
    <nav className='flex h-24 items-center justify-between px-12 shadow-md'>
      <h2>Raver</h2>
      <ul className='flex w-[30%] justify-between'>
        {menuItems.map(({label, path})=><Link key={label} to={path}>{label}</Link>)}
      </ul>
      <div>
     <CustomButton>Buy ticket</CustomButton>
      </div>
      
    </nav>
  )
}

export default Navbar