import React from 'react'
import './Category.css'
import Input from '../../Input'
function Category({handleChange,categories}) {
  return (
    <div>
       <h2 className='sidebar-title'>Category</h2>
      <div>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type="radio" value="" name="test"/>
        <span className="checkmark"></span>All
      </label>
      {categories.map((item,index) => (
      <Input key={index} handleChange={handleChange} value={item.toLowerCase() }title={item} name="test"/>
      ))}
      {/* <Input
      key={index}
          handleChange={handleChange}
          value={item}
          title={item}
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        /> */}
      </div>
      
    </div>

  )
}

export default Category
