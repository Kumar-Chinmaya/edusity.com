import React, { useRef } from 'react'
import './VideoPlayer.css'
import college_meet from '../../assets/college-meet.mp4'

const VideoPlayer = ({playState,setPlayState}) => {

    const player = useRef(null);
    const closePLayer =(e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }


  return (
    <div className={`video-player ${playState ? '':'hide'}`} ref={player} onClick={closePLayer}>
        <video src={college_meet} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer