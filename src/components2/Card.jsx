import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

import { BsFillBagHeartFill } from 'react-icons/bs'
import { assets } from '../assets/assets';

const Card = ({ img, title,star, reviews, prevPrice, newPrice }) => {
  const [itemCount,setItemCount]=useState(0);
  return (
    <div>
      <section className='card'>
          <img src={img} alt={title} className='card-img' height="170px"/>
          <div className='card-details'>
            <h3 className='card-title'>{title}</h3>
            <section className='card-reviews'>

              <span className='ratings-star'>{star}{star}{star}{star}</span>
              <span className="total-reviews">{reviews} </span>

            </section>
            <section className='card-price'>
              <div className='price'>
                <del className='prevP'>{prevPrice}</del>₹{newPrice}
              </div>
              
              <div className='bag'>
                {!itemCount

                ?<img className='bag-icon' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green}/>
                :<div className='cloth-item-counter'>
                  <img onClick={()=>setItemCount(prev=>prev-1)}src={assets.remove_icon_red}/>
                  <p>{itemCount}</p>
                  <img onClick={()=>setItemCount(prev=>prev+1)}src={assets.add_icon_green}/>

                  </div>
                }
              </div>
             
            </section>
          </div>
        </section>
    </div>
  )
}

export default Card
