import React from 'react'

export default function Home() {
  
    let name = "sumit"
    console.log(name);

    let arr = ["apple","banana","graps"]

    let obj = {
        "name" : "sumit"
    }


    return(
        <div>
            <h1>{name}</h1>
            <h1>{arr[1]}</h1>
            <h1>{obj.name}</h1>

            {
                app.map((e,i)=>{
                    return <h1>{e}----{i}</h1>
                })
            }
        </div>
    )
    

}
