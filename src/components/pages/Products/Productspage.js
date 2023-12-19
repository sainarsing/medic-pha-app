import React, { useEffect, useState } from 'react'
import Closednav from '../../Navbar/closednav'
import axios from 'axios'
import CardData from "./CardAligner.1"
import Footer from '../Footer/Footer'
function Productspage() {
  const[products1,setproducts]=useState([])
  useEffect(
    ()=>{
    axios.get("https://medic-data.onrender.com/api/products").then((res)=>setproducts(res.data))
  },[]
  )

  const products=products1.map((card)=>{
    return(
      {...card,quantity:1}
    )
  })
  // console.log(fever)
  return (
    <div>

      <Closednav ></Closednav>
      <CardData productdata={products}></CardData>
      <Footer></Footer>
    </div>
  )
}

export default Productspage
