import React from 'react'
import classes from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={`mt-[50px] flex items-center justify-between py-5 max-md:flex-col max-md:gap-[50px] ${classes.footer}`}>
      <div className='flex-1 flex flex-col gap-3.5'>
        <div className='flex items-center gap-2.5'>
          <Image src='/images/logo.png' alt='logo' width={50} height={50} />
          <h2 className='font-bold text-2xl'>Lamablog</h2>
        </div>
        <p className='font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae obcaecati fugiat, repellendus minima corrupti dolorum perferendis assumenda saepe excepturi quasi magnam fugit non qui ullam et pariatur, nobis vel exercitationem!</p>
        <div className='mt-2.5 flex items-center gap-2.5'>
          <Image src='/images/facebook.png' alt='facebook' width={18} height={18} />
          <Image src='/images/instagram.png' alt='instagram' width={18} height={18} />
          <Image src='/images/tiktok.png' alt='tiktok' width={18} height={18} />
          <Image src='/images/youtube.png' alt='youtube' width={18} height={18} />
        </div>
      </div>
      <div className='flex-1 flex items-center justify-between max-md:w-full md:justify-end gap-5 sm:gap-[50px] lg:gap-[100px] max-sm:text-sm'>
        <div className='flex flex-col gap-2.5 font-light'>
          <span className='font-bold'>Links</span>
          <Link href='/'>Home</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className='flex flex-col gap-2.5 font-light'>
          <span className='font-bold'>Tags</span>
          <Link href='/'>Style</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className='flex flex-col gap-2.5 font-light'>
          <span className='font-bold'>Social</span>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Tiktok</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer