import React, {useEffect } from 'react'
import "./Tags.css"
import { NavigateNext } from '@mui/icons-material'
function Tags() 
{
    useEffect(()=>{
      if(typeof window!=="undefined"){
        const tags=document.querySelectorAll(".minitag");
      if(tags){
        tags?.forEach((tag) => {
          tag?.addEventListener("click",()=>{
            tags?.forEach((tag)=>tag.classList.remove("active"));
            if(tag){
              tag.classList.add("active");
            }
          });
        });
      }
      }
       

    },[window])

    return (

    <div className="tags">
        <div className="minitag">
          All
        </div>
        <div className="minitag">
         Music
        </div>
        <div className="minitag">
          Gaming
        </div>
        <div className="minitag">
          Battelgrounds Mobile India
        </div>
        <div className="minitag">
          Live
        </div>
        <div className="minitag">
           sketch comedy
        </div>
        <div className="minitag">
          Podcasts
        </div>
        <div className="minitag">
          react routers
        </div>
        <div className="minitag">
          Web Dev
        </div>
       
        <NavigateNext className="next"/>
    </div>
  )
}

export default Tags
