"use client"

import Image from 'next/image'
import classes from './login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const LoginPage = () => {
    const { data: session, status } = useSession()
    const router = useRouter()
    console.log(session, status);

    if(status === 'loading') {
        return <div className='mt-[50px] text-center font-bold text-2xl'>Loading...</div>
    }

    if(status === 'authenticated') {
        router.push('/')
    }

    return (
        <div className="flex items-center justify-center mt-[60px]">
            <div className={`max-[500px]:px-[20px] max-[500px]:py-[25px] p-[30px] max-[500px]:w-full sm:py-[50px] md:py-[150px] sm:px-[70px] md:px-[200px] ${classes.wrapper_bg} flex flex-col gap-6 rounded-[10px]`}>

                <div className='py-3 px-2.5 sm:p-5 rounded-[5px] sm:font-bold max-sm:text-sm cursor-pointer bg-white flex items-center justify-center gap-2.5' onClick={() => signIn('google')}>
                    <Image className='max-[350px]:hidden' src='/images/google.png' alt='google' width={20} height={20} />
                    <span className='text-zinc-900'>Sign in with Google</span>
                </div>

                <div className='py-3 px-2.5 sm:p-5 rounded-[5px] sm:font-bold max-sm:text-sm cursor-pointer bg-zinc-900 flex justify-center items-center gap-2.5' onClick={() => signIn('github')}>
                    <figure className='w-6 h-6 relative max-[350px]:hidden'>
                        <Image className='object-cover aspect-square' src='/images/github.png' alt='github' fill />
                    </figure>
                    <span className='text-white'>Sign in with Github</span>
                </div>

                <div className='py-3 px-2.5 sm:p-5 rounded-[5px] sm:font-bold max-sm:text-sm cursor-pointer bg-[#267dce] flex items-center justify-center gap-2.5'>
                    <Image className='max-[350px]:hidden' src='/images/facebook.png' alt='facebook' width={22} height={22} />
                    <span className='text-white'>Sign in with Facebook</span>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;