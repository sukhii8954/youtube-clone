import React from 'react'
import "./VideoCard.css";
import { MoreVert, PlaylistAdd, WatchLater } from '@mui/icons-material';
import { Avatar } from '@mui/material';


function VideoCard(props) {
  return (
    <div className="videoCard">
    <div className="watchLater"><WatchLater className="videoIcon"/></div>
    <div className="playlistAdd"><PlaylistAdd className="videoIcon"/></div>
      <img className="videoimg" src={props.thumbnail}/>
      <div className="duration">
      {props.duration}
      </div>
      <div className="VideoData">
    <Avatar src={props.channelLogo}/>
    <div className="channelDetails">
        <div className="title">
            
            <div className="subtitle">

        <h5>{props.title}</h5>
        <MoreVert className="moreIcon"/>
            </div>

        <p className="c_name">{props.channelName}</p>
        <p>{props.views} &bull; {props.time}</p>
        </div>
    </div>

      </div>
    </div>
  )
}

export default VideoCard
