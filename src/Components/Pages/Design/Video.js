import React, { useRef } from "react";
import { FormattedMessage } from "react-intl";
import "./styles/Video.scss"
import BurgerMenu from '../../../assets/Design/BurgerMenu.svg'
import Screen from '../../../assets/Design/Screen.svg'
import { useState,} from "react";

import Setting from "../../../assets/Design/Setting.svg"
import ReactPlayer from 'react-player/youtube'
import { AppBar,Container,Grid,IconButton,Toolbar,makeStyles,Slider, withStyles,styled,Tooltip } from "@mui/material";
import {BsPlayFill} from "react-icons/bs"
import {MdPlayCircleOutline} from "react-icons"
import {MdOutlinePauseCircle} from "react-icons"
import {MdScreenShare} from "react-icons/md"
import PlayingControls from "./PlayingControls";
import screenfull from "screenfull";

import {AiFillPlayCircle} from "react-icons/ai"
import {Player,ControlBar,PlayToogle} from 'video-react'
import Videoo from "../../../assets/Design/Videoo.mp4"
import {RiPlayCircleLine} from "react-icons/ri"
import {RiSettings4Fill} from "react-icons/ri"

import {RiFullscreenFill}  from "react-icons/ri"
import {AiOutlinePlayCircle,AiOutlinePauseCircle} from 'react-icons/ai'
import {BsFillPlayFill,BsFillPauseFill,BsFillVolumeUpFill,BsFillVolumeMuteFill} from 'react-icons/bs'


const format =(seconds) =>{
    if(isNaN(seconds)){
        return "0:00"
    }
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const  mm = date.getUTCMinutes() 
    const ss = date.getUTCSeconds().toString().padStart(2,"0")
    if(hh){
        return `${hh}:${mm.toString().padStart(2,"0")}:${ss}`
    }
    return `${mm}:${ss}`
}

  
const Video = ()=>{
    const playerRef = useRef (null);
   
    const [state,Setstate] = useState({
        playing: true,
        muted: true,
        volume:0.5,
        played : 0,
        seeking:false,
    })
    const {playing,muted,volume,played,seeking} = state
    
    const playerContainerRef = useRef(null);

    const handlePlayPause =() =>{
        Setstate({...state,playing: !state.playing});
    }
    const handleMute =()=>{
        Setstate({...state,muted:!state.muted});
    }
    const handleVolumeChange= (e,newValue)=>{
     Setstate({...state,volume:parseFloat(newValue/100),muted:newValue===0?true:false,});
    };
    const handleVolumeSeekUp =(e,newValue)=>{
    Setstate({...state,volume:parseFloat(newValue/100),muted:newValue===0?true:false,});}
    const toggleFullScreen  =() =>{
        screenfull.toggle(playerContainerRef.current)
    }

    const handleProgress =(changeState)=>{
        console.log(changeState);
        if(!state.seeking){
        Setstate({...state, ...changeState})
        }
    }
    const handleSeekChange =(e,newValue) =>{
        Setstate({...state,played:parseFloat(newValue / 100)})

    }
    const handleSeekMouseDown =(e) =>{
        Setstate({...state,seeking:true})

    }
    const handleSeekMouseUp =(e,newValue) =>{
        Setstate({...state, seeking:false})
        playerRef.current.seekTo(newValue / 100)
    }
    const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : "0:00"
    const duration = playerRef.current ? playerRef.current.getDuration(): "0:00"
    const elapsedTime = format(currentTime)
    const totalDuration =  format(duration)

  
    
    

    

  
    

    return(
    <div className="Video-Container" onClick={(e) => e.preventDefault()}>
        <div className="Desciption-Video">
            <div className="Title-Video">
                <h4><FormattedMessage id="Intro" defaultMessage="Introduction to UX Desing"/></h4>
            </div>
            <div className="icons-on-top-Video">
                <div className="Burger-Menu-Video"style={{content:`url(${BurgerMenu})`}}  ></div>
                <div className="Screen"style={{content:`url(${Screen})`}} ></div>
            </div>
            </div>
         <div ref={playerContainerRef} className="Video-AllContent">
           <ReactPlayer 
           ref={playerRef}
           url="https://www.youtube.com/watch?v=fIYr8hbos_4&t=1s"
           playIcon={RiPlayCircleLine}
            muted={muted}
            playing = {playing}
            volume={volume}
            onProgress={handleProgress}
            className = "React-Player"
           />
           <PlayingControls
           onPlayPause={handlePlayPause} 
           playing = {playing}
           muted ={muted}
           onMute = {handleMute}
           onVolumeChange = {handleVolumeChange}
           onVolumeSeekUp={handleVolumeSeekUp}
           volume ={volume}
           onToggleFullScreen = {toggleFullScreen}
           played ={played}
           onSeek={handleSeekChange}
           onSeekMouseDown={handleSeekMouseDown}
           onSeekMouseUp={handleSeekMouseUp}
           elapsedTime={elapsedTime}
           totalDuration = {totalDuration}
           
           
     
           />
         </div>
           
       
                    
                    
                   </div>
                  
             
        
         
                      
                    
              
            
            
       

   
    );
    
};

export default Video