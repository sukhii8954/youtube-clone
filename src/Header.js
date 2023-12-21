import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MicIcon from '@mui/icons-material/Mic';
import ytlogo from './asset/yticon.gif';
import './Header.css';


// importing more icons 

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { History, OndemandVideo, WatchLater, ThumbUp, ExpandMoreOutlined, YouTube, Theaters, SportsEsports, Settings, Help, Feedback, Home, Flag } from '@mui/icons-material';
import SidebarRow from './components/SidebarRow';
import "./Sidebar.css"
import Subscription from './components/Subscription';
import {  Link, useNavigate } from 'react-router-dom';
import { API_KEY } from './config';


function Header() {

    const [searchval, setSearchVal] = useState("");
    const router=useNavigate();
    const togglesidebar = () => {
        const sidebar = document.querySelector(".sidebar");
        const Minisidebar = document.querySelector(".mini_sidebar");
        if (sidebar) {
            sidebar.classList.toggle('active');
        }
        if (Minisidebar) {
            Minisidebar.classList.toggle('active');
        }
    }
    
    const handle_click = async() =>{
        try{
            const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchval}&part=snippet%2Cid&maxResults=50&order=date `;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            }
            const response = await fetch(url, options);
            const result = await response.text();
            // console.log(result);
            localStorage.setItem("search_result" , result);
            router(`/search/${searchval}`);
        }catch(e){
            console.log("API error" , e);
        }
    }
   
    return (

        <div className="parent_header">
            <div className="Header">
                <div className="header_left">
                    <div onClick={togglesidebar}><MenuIcon /></div>
                    <img className="ytlogo" src={ytlogo}></img>
                </div>
                <div className="header_input">
                    <div className="header_middle">
                        <input className="SearchInput" placeholder="Search" type="text" onChange={(e) => setSearchVal(e.target.value)} value={searchval} />
                       
                          <div onClick={()=>{handle_click()}}>
                            <SearchIcon className="searchbtn"/>
                          </div>
                    </div>
                    <MicIcon className="header_icons" />
                </div>
                <div className="header_right">

                    <VideoCallIcon className="header_icons" />
                    <AppsIcon className="header_icons" />
                    <NotificationsNoneIcon className="header_icons" />
                    <AccountCircleIcon
                        src="https://yt3.ggpht.com/yti/AGOGRCqQZgqANY20vhamvCGMSNQ8efKK5wZAc74gpTY_4t8=s88-c-k-c0x00ffffff-no-rj" />

                </div>

            </div>
            <div className="sidebar active">
                <SidebarRow icon={Home} title="Home" />
                <SidebarRow icon={ExploreIcon} title="Explore" />
                <SidebarRow icon={SubscriptionsIcon} title="Subscription" />
                <SidebarRow icon={VideoLibraryIcon} title="Library" />
                <hr></hr>
                <SidebarRow icon={History} title="History" />
                <SidebarRow icon={OndemandVideo} title="Your Videos" />
                <SidebarRow icon={WatchLater} title="Watch later" />
                <SidebarRow icon={ThumbUp} title="Liked Videos" />
                <SidebarRow icon={ExpandMoreOutlined} title=" Show More" />
                <hr></hr>
                <h4 className="sidebar_heading">SUBSCRIPTIONS</h4>

                <Subscription img="https://yt3.googleusercontent.com/z7ld-8fd6O1_TWOwzngpxqnkNfdyyQfm-Gk0PwOSzep3LFCCtzbUWKsNGPL6Spk4hWqHZUgk=s176-c-k-c0x00ffffff-no-rj" name="tanmay Bhat" />
                <Subscription img="https://yt3.googleusercontent.com/EaHjbYWOY1j94LJoZfJYU9GTo2KOsCtKdZ9GLpUVOa1AWYFDFfT10LKX8yFaqnpyRzX9tYxzgQ=s176-c-k-c0x00ffffff-no-rj" name="Mortal" />
                <Subscription img="https://yt3.googleusercontent.com/S9xWprcFyvLqpr2YVxa8WhnEtu3BCBD0l-ZkeOdfxIUjMzy-JC5a2Uaq2QIkU1txrtFv7XurOLk=s176-c-k-c0x00ffffff-no-rj" name="SOUL Regaltos" />
                <Subscription img="https://yt3.googleusercontent.com/irsFSnwf9hghpBpbaq6AEMjpAsqZAN-chuYYc1xeI3ekAEWo9cI4HCg19VyFVTeIc4p49C_0zek=s176-c-k-c0x00ffffff-no-rj" name="Krafton Esports" />
                <Subscription img="https://yt3.googleusercontent.com/ytc/AIf8zZRIekluGoXbMY7YGI8vNa37HfTBEzyv7HABk5wU=s176-c-k-c0x00ffffff-no-rj" name="Gaurav Kapoor" />
                <Subscription img="https://yt3.googleusercontent.com/BFpcIRuDv2h57IFpqFyycMaYCZYxqASmEStrXH6ULreoLXfMHU1VGD2OiA_ERgKe6t3ccjn5LKM=s176-c-k-c0x00ffffff-no-rj" name="S8UL" />
                <Subscription img="https://yt3.googleusercontent.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s176-c-k-c0x00ffffff-no-rj" name="BB KI VINES" />
                <Subscription img="https://yt3.googleusercontent.com/0fYaLsgNVFculgN4hPCbGDHbWrMLWeJuwB6bJuRX-akCQ9d4JQbzHYC8f3LyJleLVBtY3a3WgQ=s176-c-k-c0x00ffffff-no-rj" name="ScOut" />
                <SidebarRow icon={ExpandMoreOutlined} title=" Show More" />
                <hr />
                <h4 className="sidebar_heading">MORE ON YOUTUBE</h4>
                <SidebarRow icon={YouTube} title="YTube premium" />
                <SidebarRow icon={Theaters} title="Movies" />
                <SidebarRow icon={SportsEsports} title="Gaming" />
                <hr />
                <SidebarRow icon={Settings} title="settings" />
                <SidebarRow icon={Flag} title="report" />
                <SidebarRow icon={Help} title="help" />
                <SidebarRow icon={Feedback} title="send Feedback" />
                <hr></hr>

                <div className="footer">
                    <p>About &nbsp; Press &nbsp; Copywright</p>
                    <p>Contact Us &nbsp; Creators</p>
                    <p>Advertise &nbsp; Developers</p>
                    <br />
                    <p>Terms &nbsp; Privacy &nbsp; Policy & safety</p>
                    <p>How youtube works</p>
                    <p> test new features</p>
                    <br />
                    <p style={{ color: "rgb(142,142,142" }}>&#169; 2023 Google LLC</p>
                </div>
            </div>
            <div className="mini_sidebar active ">
                <div className="miniDiv">
                    <Home />
                    <p>Home</p>
                </div>
                <div className="miniDiv">
                    <ExploreIcon />
                    <p>Explore</p>
                </div>
                <div className="miniDiv">
                    <SubscriptionsIcon />
                    <p>Subscription</p>
                </div>
                <div className="miniDiv">
                    <VideoLibraryIcon />
                    <p>Library</p>
                </div>
            </div>
        </div>

    )
}

export default Header
