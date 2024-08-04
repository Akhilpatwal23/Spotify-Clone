import React, { useContext } from 'react'
import { assets,  } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
const Player = () => {
  const {track ,seekBar,seekBg,playStatus,play,pause,time,previous ,seekSong, next} = useContext(PlayerContext)
  const togglePlayPause = () => {
    if (playStatus) {
      pause()
    } else {
      play()
    }
  }
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
           <div className='hidden lg:flex items-center gap-4'>
             <img className='w-12' src={track.image} alt="" />
              <div>
               <p>{track.name}</p>
              <p>{track.desc.slice(0,12)}</p>
              </div>
           </div>
            <div className='flex flex-col item-center gap-1 m-auto'>
                    <div className='flex gap-4 justify-center'>
                       
                        <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
                        <img 
            onClick={togglePlayPause}  
            className="w-4 cursor-pointer" 
            src={playStatus ? assets.pause_icon : assets.play_icon} 
            alt={playStatus ? "Pause" : "Play"} 
          />
                        <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
                       
                    </div>
                  <div className='flex items-center gap-5'>
                          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                          <div  ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full  cursor-pointer'>

                            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                          </div>
                          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                  </div>
           </div>
           <div className='hidden lg:flex items-center gap-2 opacity-75'>
               <img className='w-4' src={assets.plays_icon} alt="" />
               <img className='w-4' src={assets.mic_icon} alt="" />
               <img className='w-4' src={assets.queue_icon} alt="" />
               <img className='w-4' src={assets.speaker_icon} alt="" />
               <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-slate-50 h-1 rounded'>

                </div>
               <img className='w-4' src={assets.mini_player_icon} alt="" />
               <img className='w-4' src={assets.zoom_icon} alt="" />

           </div>
    </div>
  )
}

export default Player