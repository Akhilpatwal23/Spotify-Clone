import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'


const Songitems = ({image,name,desc,id}) => {

   const { playWithId}=useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)}   className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='text-slate-200 text-sm'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default Songitems