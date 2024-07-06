import React from 'react'
import './Sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
const Sidebar = ({handleChange,categories}) => {
//  console.log(handleChange);
  return (
    <div>
      <section className='sidebar'> 
      <div className='logo-container'>
      </div>
      <Category handleChange={handleChange} categories={categories}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>
      </section>
    </div>
  )
}

export default Sidebar
