import React, { useState } from "react";
import Card from "../Components/Card";

export default function Home() {

  const [search,setSearch] = useState("")
  const [cat,setCat]=useState("all")
  const [sort,setSort]=useState("")


const product =[
       
  { id: 1, title: "Classic T-Shirt", name: "H&M", "price": 499, img : "img/classic.avif"  , category : "Men's" },
  { "id": 2, "title": "Running Shoes", "name": "Nike", "price": 2499, img: "img/shoes.jpeg"  , category : "Women's"},
  { "id": 3, "title": "Leather Wallet", "name": "Woodland", "price": 899, img: "img/wallet.webp"  , category : "Men's "},
  { "id": 4, "title": "Analog Watch", "name": "Fossil", "price": 6999, img: "img/watch.jpeg"  , category : "Men's"},
  { "id": 5, "title": "Bluetooth Headphones", "name": "boAt", "price": 1999, img: "img/boat.jpeg"  , category : "Mobile Accessories"},
  { "id": 6, "title": "Sunglasses", "name": "Ray-Ban", "price": 3499, img: "img/sunglasses.webp"  , category : "Women's"},
  { "id": 7, "title": "Casual Shirt", "name": "Levis", "price": 1299, img: "img/shirt.jpeg"  , category : "Men's"},
  { "id": 8, "title": "Smartphone", "name": "Samsung", "price": 17999, img: "img/smartphone.jpeg"  , category : "Women's Men's"},
  { "id": 9, "title": "Laptop Backpack", "name": "Wildcraft", "price": 1599, img: "img/image.png" , category : "Mobile Accessories"},
  { "id": 10, "title": "Smart Watch", "name": "Noise", "price": 2499, img: "img/beg.jpeg"  , category : "Women's"},
  { "id": 11, "title": "Men's wear", "name": "Wrangler", "price": 1799, img: "img/men.jpeg"  , category : "Men's"},
  { "id": 12, "title": "Formal Shoes", "name": "Bata", "price": 2999, img: "img/formalshoes.jpg"  , category : "Men's"},
  { "id": 13, "title": "Perfume", "name": "Davidoff", "price": 2299, img: "img/perfume.jpeg"  , category : "Men's Women's"},
  { "id": 14, "title": "Wireless Mouse", "name": "Logitech", "price": 899, img: "img/mouse.jpeg"  , category : "Mobile Accessories"},
  { "id": 15, "title": "Gaming Keyboard", "name": "Redragon", "price": 1799, img: "img/keyboard.jpeg"  , category : "Mobile Accessories"},
  { "id": 16, "title": "Party wear", "name": "Philips", "price": 2099, img: "img/party.webp" , category : "Women's" },
  { "id": 17, "title": "Bluetooth Speaker", "name": "JBL", "price": 3499, img: "img/speaker.jpeg"  , category : "Mobile Accessories"},
  { "id": 18, "title": "Power Bank", "name": "Mi", "price": 1199, img: "img/powebank.jpeg"  , category : "Mobile Accessories"},
  { "id": 18, "title": "Earings", "name": "Mi", "price": 999, img: "img/eyarings.webp"  , category : "Women's"},
  { "id": 19, "title": "Women's Saree", "name": "women's", "price": 4999, img: "img/saree.webp"  , category : "Women's"},
  { "id": 19, "title": "Women's Kurta", "name": "women's", "price": 4999, img: "img/kurti.webp"  , category : "Women's"},
  { "id": 20, "title": "Women's footwear", "name": "", "price": 49999, img: "img/footwear.webp"  , category : "Women's"}
]


  localStorage.setItem("product",JSON.stringify(product))

  const searchedData = product.filter((item)=>{
     return item.title.toLowerCase().includes(search.toLowerCase());
  })

  const filteredData = [...searchedData].filter((item)=>{
    if(cat=="all"){
      return item
    }else{
      return item.category == cat;
    }
  })

  const sortedData = [...filteredData].sort((a,b)=>{
    if(sort=="asc"){
      return a.price - b.price
    }else{
      return b.price - a.price;
    }
  })

  return (
    <>
      <div className="flex justify-center items-center gap-10 m-5 ">
        <div className="flex gap-4 bg-gray-100 border-gray-300 p-2 rounded-xl border-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#414040" fillRule="evenodd" d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0" strokeWidth="0.5" stroke="#414040" />
</svg>
        <input
          type="email"
          id="email"
          className=""
          placeholder="name@flowbite.com"
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        </div>
        <button className="items-center flex bg-gray-100  border-gray-300 p-2 pr-4 rounded-xl border-1">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#000" d="M14.037 20.937a1 1 0 0 1-.518-.145l-3.334-2a2.55 2.55 0 0 1-1.233-2.176v-4.525a1.53 1.53 0 0 0-.284-.891L4.013 4.658a1.01 1.01 0 0 1 .822-1.6h14.33a1.009 1.009 0 0 1 .822 1.6L15.332 11.2a1.53 1.53 0 0 0-.285.891v7.834a1.013 1.013 0 0 1-1.01 1.012M4.835 4.063l4.647 6.557a2.5 2.5 0 0 1 .47 1.471v4.524a1.54 1.54 0 0 0 .747 1.318l3.334 2l.014-7.843a2.5 2.5 0 0 1 .471-1.471l4.654-6.542Z" strokeWidth="0.5" stroke="#000" />
</svg>
        <select 
          id="countries"
          onChange={(e) => setCat(e.target.value)}
          className="border-none"
        >
          
          <option hidden className="flex ">Filter</option>
          <option  value={"all"}>
            All
          </option>
          <option value={"Women's"} className="border-none">Women's </option>
          <option value={"Men's"} className="border-none">Men's </option>
          <option value={"Mobile Accessories"} className="border-none">Mobile Accessories</option>
        </select>
        </button>
        <select
          id="countries"
          onChange={(e) => setSort(e.target.value)}
          className="bg-gray-50 border-gray-300  p-2 rounded-xl border-1"
          >
          <option hidden>Select Sorting</option>
          <option value={"asc"}>Low to High</option>
          <option value={"desc"}>High to Low</option>
        </select>
      </div>
      <div className="flex justify-around flex-wrap m-15 gap-10">
        {sortedData.map((e, i) => {
          return (
            <Card
              key={i}
              id={e.id}
              img={e.img}
              title={e.title}
              description={e.description}
              price={e.price}
              category={e.category}
            />
          );
        })}
      </div>
    </>
  );
}