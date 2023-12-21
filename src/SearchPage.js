import React, { useEffect, useState } from 'react'
import { TuneOutlined } from '@mui/icons-material'
import "./App.css"
import ChannelTitle from './components/ChannelTitle'
import VideoTitle from './components/VideoTitle'
import thumbnail1 from "./asset/thumbnail1.webp"
import thumbnail2 from "./asset/thumbnail2.webp"
import thumbnail3 from "./asset/thumbnail3.webp"
import { useParams } from 'react-router-dom'
import { API_KEY } from './config'

function SearchPage() {
    function formatDateAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const timeDifference = now - date;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
      
        if (days > 0) {
          return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
          return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
          return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else {
          return 'Just now';
        }
      }
    const [data , setData] = useState([]);
    const [channel , setChannel] = useState([]);
    const searchParam = useParams();
    useEffect(()=>{
       if(data?.length === 0){
        const result = localStorage.getItem("search_result");
        setData(JSON.parse(result));
       } 
    },[searchParam?.searchterm]);

    useEffect(()=>{
        const fetchchannel = async ()=>{
            try{
                const url = `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${data?.items[0]?.snippet?.channelId}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': API_KEY,
                        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                    }
                }
                const response = await fetch(url, options);
                const result = await response.json();
                // console.log(result);
                setChannel(result);
                localStorage.setItem("channel_details" , JSON.stringify(result));
                // router(`/search/${searchval}`);
            }catch(e){
                console.log("API error" , e);
            }
        }
        if(data?.length > 0 || channel?.length === 0){
            fetchchannel();
        }
    },[data , searchParam?.searchterm])
    return (
        <div className="searchPage">
            <div className="filter">
                <TuneOutlined className="filterIcon" />
                <h2 className="Filterheading">FILTERS</h2>
            </div>
            {
                channel && channel.length !== 0 &&  <ChannelTitle  data={channel}/>
            }
            <h4>Latest From {searchParam?.searchterm}</h4>

            {
                data && data?.items?.map((video)=>{
                    return(
                        <VideoTitle
                thumbnail={video?.snippet?.thumbnails?.high?.url}
                duration="50:24"
                Title={video?.snippet?.title}
                views="100k "
                time={formatDateAgo(video?.snippet?.publishedAt)}
                img="https://yt3.ggpht.com/0fYaLsgNVFculgN4hPCbGDHbWrMLWeJuwB6bJuRX-akCQ9d4JQbzHYC8f3LyJleLVBtY3a3WgQ=s176-c-k-c0x00ffffff-no-rj-mo"
                name={video?.snippet?.channelTitle}
                desc={(!video?.snippet?.description || video?.snippet?.description === "")  ? "no description" : video?.snippet?.description}
            />
                    )
                })
            }
            {
                data?.length === 0 && 
                <div>no VIDEO avalable </div>
            }
            
{/* 
            <VideoTitle
                thumbnail={thumbnail2}
                duration="7:53"
                Title="SOLO 7 KILLS IN SCRIMS | EPIC 1v1 IN THE END "
                views=" 103k views"
                time="5 days ago"
                img="https://yt3.ggpht.com/0fYaLsgNVFculgN4hPCbGDHbWrMLWeJuwB6bJuRX-akCQ9d4JQbzHYC8f3LyJleLVBtY3a3WgQ=s176-c-k-c0x00ffffff-no-rj-mo"
                name="scOut"
                desc="Thankyou For Your Support ❤️
                    #bgmi #scout #gaming"
            />



            <VideoTitle
                thumbnail={thumbnail3}
                duration="7:08"
                Title="X-SUIT, RANVEER SINGH VOICE PACK & SCAR-L CRATE OPENING | *CRAZY*"
                views="313K views "
                time="2 weeks ago"
                img="https://yt3.ggpht.com/0fYaLsgNVFculgN4hPCbGDHbWrMLWeJuwB6bJuRX-akCQ9d4JQbzHYC8f3LyJleLVBtY3a3WgQ=s176-c-k-c0x00ffffff-no-rj-mo"
                name="scOut"
                desc="SCOUT opens the most hyped crate for Fiore X-Suit in BGMI...
                    Watch and Find out if he got it?

                    #scout #bgmi #gaming"
            /> */}


        </div>
    )
}

export default SearchPage
