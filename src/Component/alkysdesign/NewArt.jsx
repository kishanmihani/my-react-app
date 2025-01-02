import axios from "axios";
import React, { useEffect,useState } from "react";

const apiurl='https://untitled-twkmuar27a-uc.a.run.app/api';
const token='Token 97848e8babeb149f26a044838f1fcb6f52d60e7b'
const initsigle={id: 2, title: 'First Article 2', created_at: '2024-04-17T02:53:36.217255Z', prompt: 'Photography', short_description: 'In a post-apocalyptic world, a lone survivor battl… hope and redemption in unexpected companionship.'}
function NewArt(){
    const [Data,setData]=useState([]);
    const [singledata,setsingledata]=useState(initsigle)
    const [Model,setModel]=useState(false)
    useEffect( ()=>{
      
          axios.get(apiurl,{headers:{"Authorization":token}})
          .then(response => {setData(response.data);console.log(Data) })
          .catch(err => console.log(err)) 
      },[])

      function handleClick(id){
        console.log(id);
        Data.filter((data)=>{
            if(data.id == id ){ setsingledata({image_url:data.image_url,id:data.id,title: data.title, created_at: data.created_at, prompt: data.prompt, short_description: data.short_description,content:data.content});console.log(data); setModel(true)};
        })
        console.log(singledata)

      }
    return (
        <div className="m-0 p-0">
            <div className="text-center">
                          <div>
                            <p className="fs-1 fw-bolder">alkye</p>
                        </div>
                        <div>
                            <p className="text-secondary fw-bolder">The easiest test you will ever do</p>
                        </div>
                        </div>
                   {(Model !==true) ?      
        <div className="d-flex llbnew  col-12 overflow-auto m-0 p-0">
             
            {Data.map((data) => {
                const {id,content,image_url,prompt,short_description,title}=data;

                return (
                    
                    <div key={id} className=" m-1 height-contian card p-0 rounded-5 text-start col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" onClick={()=>handleClick(id)} >
                        <div className="card-body card-body d-flex h-100 w-100 postion-relative p-0 ">
                        <img src={image_url} className="rounded-5 position-absolute h-100 w-100" alt={`img not ${id}`} />
                       <div className="position-absolute m-3 mt-4"> <p className=" btn btn-dark fs-5 rounded-5 p-2">{prompt}</p>
                        <p className="text-white fs-5">{short_description}</p>
                        </div>
                        </div>
                    </div>
                    
                )
            })} 
        </div>
: 
<div className="d-flex   col-12  m-0 p-0 text-start">
             <button type="button" onClick={()=>setModel(false)} className="position-absolute btn btn-danger">X</button>
            <div className="w-100 height-contian"> <p>{singledata.id}</p>
               <img src={singledata.image_url} alt={singledata.id} className="w-100 h-100"></img>
               <div className=" m-3 mt-2 card border-0">
                <div className="card-body"> <p className=" btn btn-dark fs-5 rounded-5 p-3 pb-2 pt-2 overflow-auto">{singledata.prompt}</p>
               <p className="fw-bolder fs-5 ">{singledata.short_description}</p>
                        <p className=" fs-5">{singledata.content}</p>
                        </div>
                        </div>
               </div>
                 </div>
}
        </div>
    )
}

export default NewArt