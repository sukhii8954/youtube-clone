import React from 'react'
import "./ChannelTile.css"
import { NotificationsActive } from '@mui/icons-material'




function ChannelTitle({data}) {
    console.log(data)
  return (
    <div className="channelTitle">
        <div className="title_left">
            <img className="channelImg" src={data?.items[0]?.snippet?.thumbnails?.high?.url}></img>
        </div>
      <div className="Title_middle">
        <p className="channelName">{data?.items[0]?.snippet?.title}</p>
        <p style={{fontSize:"13px" ,color:"#6060660",letterSpacing:"0.3px"}}> {data?.items[0]?.statistics?.subscriberCount} Subscirbers  &bull;  {data?.items[0]?.statistics?.videoCount} videos </p>
        </div> 
        <div className="Title_right">
            <button className="subscribe"> SUBSCRIBED</button>
            <NotificationsActive className="bellIcon"/>
            </div>     
    </div>
  )
}

export default ChannelTitle
