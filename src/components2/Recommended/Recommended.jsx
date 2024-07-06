import React from 'react'
import './Recommended.css'
import Button from '../Button'
const Recommended = ({handleClick,companies}) => {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
      <Button onClickHandler={handleClick} value="" title="All Products" />
      {companies.map((item,index) => (
        <Button key={index}  onClickHandler={handleClick} value={item} title={item}/>
      ))}
      {/* {companies.map((company) => (
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" /> */}

      </div>
    </div>
  )
}

export default Recommended
