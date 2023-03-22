import React from "react";
import { FormattedMessage } from "react-intl";
import "./styles/Video.scss"
import BurgerMenu from '../../../assets/Design/BurgerMenu.svg'
import Screen from '../../../assets/Design/Screen.svg'
import { useState } from "react";
import Setting from "../../../assets/Design/Setting.svg"
import ReactPlayer from "react-player";
import Videoo from "../../../assets/Design/Videoo.mp4"
import {MdOutlineScreenShare} from "react-icons/md"
import {RiFullscreenFill}  from "react-icons/ri"
import {AiOutlinePlayCircle,AiOutlinePauseCircle} from 'react-icons/ai'
import {BsFillPlayFill,BsFillPauseFill,BsFillVolumeUpFill,BsFillVolumeMuteFill} from 'react-icons/bs'

const Video =()=>{
    const [videoPlaying,setVideoPlaying] = useState(false);
    function changeState(){
        setVideoPlaying(!videoPlaying)
    }
    function pauseVideo(){
        setVideoPlaying(!videoPlaying)
    }
    return(
    <div className="Video-Container">
        <div className="Desciption-Video">
            <div className="Title-Video">
                <h4><FormattedMessage id="Intro" defaultMessage="Introduction to UX Desing"/></h4>
            </div>
            <div className="icons-on-top-Video">
                <div className="Burger-Menu-Video"style={{content:`url(${BurgerMenu})`}}  ></div>
                <div className="Screen"style={{content:`url(${Screen})`}} ></div>
            </div>
            <div className="Video-Contaiber">
                <ReactPlayer
                url= {Videoo}
                className="Controls-video"
                playing = {videoPlaying}
                controls
                />
                
                
      
            </div>
        </div>

    </div>
    )
}
export default Video