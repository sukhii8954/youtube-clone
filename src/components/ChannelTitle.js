import React from 'react'
import "./ChannelTile.css"
import { NotificationsActive } from '@mui/icons-material'




function ChannelTitle() {
  return (
    <div className="channelTitle">
        <div className="title_left">
            <img className="channelImg" src="https://yt3.ggpht.com/0fYaLsgNVFculgN4hPCbGDHbWrMLWeJuwB6bJuRX-akCQ9d4JQbzHYC8f3LyJleLVBtY3a3WgQ=s176-c-k-c0x00ffffff-no-rj-mo"></img>
        </div>
      <div className="Title_middle">
        <p className="channelName">scOut</p>
        <p style={{fontSize:"13px" ,color:"#6060660",letterSpacing:"0.3px"}}>4.88M Subscirbers  &bull;  265 videos </p>
        </div> 
        <div className="Title_right">
            <button className="subscribe"> SUBSCRIBED</button>
            <NotificationsActive className="bellIcon"/>
            </div>     
    </div>
  )
}

export default ChannelTitle
