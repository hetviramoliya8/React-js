import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

export default function Cart() {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    let allData = JSON.parse(localStorage.getItem("cart")) || [];
    setRecord(allData);
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        {record.length > 0 ? (
          record.map((e, i) => {
            
            return (
              <Card
              key={e.id} 
                img = {e.img}
                title={e.title}
                description={e.description}
                price={e.price}
              />
            );
          })
        ) : (
          <div className="">
<h1 className="text-3xl font-semibold justify-center flex mt-40">Cart is Empty</h1>
<div>

<Link to={"/"}>
<button className="border-1 text-2xl p-3 justify-center flex mt-10 hover:bg-black rounded-xl hover:text-white cursor-pointer">Continue shoping</button>
</Link>
</div>
          </div>
         
        )}
      </div>
    </div>
  );
}