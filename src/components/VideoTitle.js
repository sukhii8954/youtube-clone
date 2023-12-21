import React from 'react'
import "./Video.css"
import { MoreVert,WatchLater,PlaylistAdd} from '@mui/icons-material'
function VideoTitle(props) {
  return (
    <div className="videoTitle">
        <div className="image_div">
        <div className="watchLater"><WatchLater className="videoIcon"/></div>
    <div className="playlistAdd"><PlaylistAdd className="videoIcon"/></div>
            <img className="thumbnail" src={props.thumbnail}/>
            <div className="duration">
                {props.duration}
            </div>


        </div>
        <div className="title_data">
        <div className="title_div">
            {props.Title}
        <MoreVert className="vertBtn"/>
        </div>
        <p className="views">{props.views} views &bull;  {props.time}</p>
        <div className="data">
            <img src={props.img}/>
            <p>{props.name}</p>
        </div>
        <p className="desc">{props.desc}</p>

        </div>
      
    </div>
  )
}

export default VideoTitle
