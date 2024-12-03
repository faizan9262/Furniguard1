import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const DesignBannerRight = ({img_src,title}) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex flex-col sm:flex-row items-center mt-10 gap-8 mb-5'>
        <div className='flex flex-col gap-5 order-2 sm:order-1'>
            <h1 className='text-xl sm:text-4xl ord text-primary font-semibold '>{title}</h1>
            <p className='text-xl hidden sm:block text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maiores repellendus! Ipsa, cumque ducimus voluptate eos incidunt animi reprehenderit natus quas reiciendis eligendi doloribus quis deserunt fugiat laudantium error? Deserunt, voluptatibus hic libero iure reiciendis alias labore. Dolorem tempora hic eaque qui magni adipisci fuga!</p>
            <button onClick={() => {navigate('/rooms');window.scroll(0,0)}} className='flex items-center gap-2 justify-center rounded-full bg-primary py-3 text-white hover:scale-105 transition-all duration-300 hover:bg-secondary'>Explore More <FaArrowRight /></button>
        </div>
        <img src={img_src} className='shadow-2xl rounded-lg w-full sm:w-1/2 order-1 sm:order-2'/>
      </div>
    </div>
  )
}

export default DesignBannerRight
