import React from 'react'
import { TuneOutlined } from '@mui/icons-material'
import "./App.css"
import ChannelTitle from './components/ChannelTitle'
import VideoTitle from './components/VideoTitle'
import thumbnail1 from "./asset/thumbnail1.webp"
import thumbnail2 from "./asset/thumbnail2.webp"
import thumbnail3 from "./asset/thumbnail3.webp"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="filter">
                <TuneOutlined className="filterIcon" />
                <h2 className="Filterheading">FILTERS</h2>
            </div>
            <ChannelTitle />
            <h4>Latest From Scout</h4>
            <VideoTitle
                thumbnail={thumbnail1}
                duration="50:24"
                Title="PS5 GIVEAWAY w Scout "
                views="100k "
                time="7 days ago"
                img="https://yt3.ggpht.com/0fYaLsgNVFculgN4hPCbGDHbWrMLWeJuwB6bJuRX-akCQ9d4JQbzHYC8f3LyJleLVBtY3a3WgQ=s176-c-k-c0x00ffffff-no-rj-mo"
                name="scOut"
                desc="Thankyou For Your Support ❤️
• Copyright © 2021 sc0ut - All Rights Reserved.
Note: If you use a copyrighted work without the appropriate permission, you may be violating --or infringing --the owner's right to that work. Infringing someone else's copyright may subject you to legal action."
            />

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
            />
            

        </div>
    )
}

export default SearchPage
