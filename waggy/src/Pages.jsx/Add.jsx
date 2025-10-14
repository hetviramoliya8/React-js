import React, { useState } from 'react'
import Card from '../Components/Card'
import Food from '../Components/Food'
import { useNavigate } from 'react-router-dom'
import Nav2 from '../Components/Nav2'

export default function Add() {
 
   
    let Products =[
        {
            id : 1,
            img : "/img/1.jpeg",
            title : "Grey Hoodie",
            rate : "5.0",
            price : "$ 17.00"
        },
        {
            id : 2,
            img : "/img/item2.jpeg",
            title : "Blue Dangry",
            rate : "3.0",
            price : "$ 12.00"
        },
        {
            id : 3,
            img : "/img/item3.jpeg",
            title : "Pink and White",
            rate : "4.0",
            price : "$ 14.00"
        },
        {
            id : 4,
            img : "/img/item4.jpeg",
            title : "Black",
            rate : "5.0",
            price : "$ 18.00"
        },

    ]
    let products2 = [
      {
        id : 5,
        img : "/img/2.jpg",
        title : "Pulsitos",
        rate : "3.5",
        price: "$ 60"
      },
      {
        id : 6,
        img : "/img/3.jpg",
        title : "Jurior",
        rate : "4.3",
        price : "$ 70"
      },
      {
        id : 7,
        img : "/img/4.jpg",
        title : "Love Corn",
        rate : "3.4",
        price : "$ 100",
      },
      {
        id : 8,
        img : "/img/5.jpg",
        title : "Chikies",
        rate : "4.5",
        price : "$ 60",
      },
      {
        id : 9,
        img : "/img/6.jpg",
        title : "Chizzy boll",
        rate : "5.5",
        price : "$ 190"
      },
      {
        id : 10,
        img : "/img/7.jpg",
        title : "Sweet roll",
        rate : "2.5",
        price : "$ 90"
      },
      {
        id : 11,
        img : "/img/8.jpg",
        title : "Double-Brush",
        rate : "2.5",
        price : "$ 90"
      },
      {
        id : 12,
        img : "/img/9.jpg",
        title : "Sweet boll",
        rate : "3.5",
        price : "$ 160"
      },

    ]

    localStorage.setItem("products",JSON.stringify(Products))
  return (
    <>
    < div className='p-20'>
        <div className='flex justify-between m-10'>
          <h1 className='text-5xl'>Plat Clothing</h1>
          <button className='border-1 pl-10 pr-10 p-5 rounded-md text-xl'>Shop Now →</button>
        </div>
      <div className='w-full flex  justify-around'>
        {
          Products.map((e,i)=>{
            return <Card obj={e} key={i}/>
            
          })
        }
      </div>

      <div  className='flex justify-between mt-30 p-10'>
        <h1 className='text-5xl'>Pet Foodies </h1>
        <div>
          <ul>
          </ul>
        </div>
        <button className='border-1 pl-10 pr-10 p-5 rounded-md text-xl'>Shop Now →</button>
      </div>
      <div className='flex flex-wrap justify-between gap-y-23'>
        {
          products2.map((e,i)=>{
            return <Food obj={e} key={i} />
          })
        }
      </div>
    </div>
          </>
  )
}
