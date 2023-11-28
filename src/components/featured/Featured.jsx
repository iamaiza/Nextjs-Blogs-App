import React from 'react'
import Image from 'next/image'
import classes from './featured.module.css'

const Featured = () => {
  return (
    <div className={`${classes.container}`}>
      <h1 className='text-4xl sm:text-5xl md:text-[64px] lg:text-7xl xl:text-[82px] 2xl:text-8xl'><b>Hey, lama dev here!</b> Discover my stories and creative ideas.</h1>
      <div className={`flex items-center ${classes.post}`}>
        <figure className='flex-1 h-[450px] 2xl:h-[500px] relative max-lg:hidden'>
          <Image className=' object-cover' src="/images/p1.jpeg" alt="" fill />
        </figure>
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className='text-2xl sm:text-4xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam!</h2>
          <p className='text-base sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore velit illo quod, recusandae voluptate, debitis alias atque possimus delectus, eos est sunt? Ad assumenda sunt fugiat, optio reprehenderit quibusdam ducimus.</p>
          <button className='cursor-pointer w-max py-4 px-5 bg-gray-100 rounded text-black'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured