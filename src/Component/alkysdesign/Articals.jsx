import axios from "axios";
import React, { useEffect,useState } from "react";

const apiurl='https://untitled-twkmuar27a-uc.a.run.app/api';
const token='Token 97848e8babeb149f26a044838f1fcb6f52d60e7b'
function Articals(){
    const [Data,setData]=useState([]);
    useEffect(async ()=>{
      try{  
      await  axios.get(apiurl,{headers:{"Authorization":token}})
        .then(response => {setData(response.data) })
        .catch(err => console.log(err))
        
        
      }
      catch(e){
        console.log(err)
      }
    //   return (console.log(Data))
    })
    return (
         <div>
            {Data.map((data) => {
                const {id,content,image_url,prompt,short_description,title}=data;

                return (
                    <div key={id}>
                        <img src={image_url} alt={`img not ${id}`} />
                        <p className="bg-dark text-white fs-4">{prompt}</p>
                        <p className="text-white">{short_description}</p>
                        
                    </div>
                )
            })}
         </div>
    )
}
export default Articals