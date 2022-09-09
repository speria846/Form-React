import React from "react";
const data=[
{
    "id": 1,
    "username": "Gumato",
    "country": "Kenya"
},
 {
    "id": 2,
    "username": "Sallo",
    "country": "Uganda"
},
  {
    "id": 3,
    "username": "Hunter",
    "country": "Kenya"
}
]
const User = ({email})=>{
    return (
        <div>
            {data.map(item =><div
             style={{
                display:"flex", flexDirection:"column",
                border:"1px solid black", margin:"2%"
            }}
            key={item.id}>
                <h4>{item.username}</h4>
               <p>{item.country}</p>
               </div>)}
        </div>
    )
}
export default User











