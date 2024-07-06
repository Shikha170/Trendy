import React from 'react'
import './ExploreCloth.css'
import { cloth_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const ExploreCloth = () => {
  const navigate = useNavigate();

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='cat'>Shop By Category</h1>
      <div className='explore-menu-list'>
      {cloth_list.map((item,index) => {
        return(
            <div key={index} className='explore-menu-list-item'onClick={() => navigate('/' + item.menu_name)}
            >
                <img src={item.menu_image} />
                <p>{item.menu_name}<br></br>{item.menu_dec}</p>
            </div>
        )
        })}
    </div>
    
    </div>
  )
}

export default ExploreCloth
