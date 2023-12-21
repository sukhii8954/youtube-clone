import React from 'react'
import live from "../asset/live.png"
import "./Subscription.css";

function Subscription(props) {
  return (
    <div className="subscriptionRow">
        <div className="left">
        <img className="channelLogo" src={props.img}/>
        <p className="channelName">{props.name}</p>
        </div>
        <div className="right">
            <img className="liveImg" src={live}/>
        </div>
      
    </div>
  )
}

export default Subscription
