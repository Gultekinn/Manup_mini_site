import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id}=useParams()
  const [item,setData]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8085/${id}`).then((res)=>{
      setData(res.data)
    })
  })
  return (
    <div className="card">
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
}

export default Detail
