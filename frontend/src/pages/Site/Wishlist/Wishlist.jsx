import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../../Context/Context'
import axios from 'axios'

const Wishlist = () => {
  const {wishlistItem,setWishlistItem}=useContext(MainContext)
useEffect(()=>{
  axios.get('http://localhost:8085/').then((res)=>{

  })
})
  return (
    <div>
      {
        wishlistItem.map((item,index)=>{
          return(
            <div key={index} className="card">
              <div className="card__img">
                <img
                  src="https://preview.colorlib.com/theme/manup/img/team-member/member-2.jpg"
                  alt=""
                />
              </div>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <p>{item.desc}</p>
            
            </div>
          )
        })
      }
    </div>
  )
}

export default Wishlist
