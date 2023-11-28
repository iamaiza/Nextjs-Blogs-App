import { ThemeContext } from "@/context/ThemeContext"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

const Contact = () => {
    const { theme } = useContext(ThemeContext)
    console.log(theme);
    return (
        <div className="mb-24 mt-12 w-full">
            <h2 className="mb-12 text-4xl text-center font-bold">Contact Us</h2>
            <div className="flex items-center gap-14 lg:gap-5 max-lg:flex-col">
                <div className="grid grid-cols-2 max-[500px]:grid-cols-1 lg:grid-cols-1 gap-4 w-full lg:flex-1 pl-0 xl:pl-12">
                    <Link href='http://www.facebook.com' className="flex items-center justify-center gap-2 flex-1 lg:max-w-[250px] bg-[#f5f5f5] p-3 rounded" target="_blank">
                        <Image src="/images/facebook.png" width={24}height={24} />
                        <span className="text-black">facebook</span>
                    </Link>
                    <Link href='http://www.instagram.com' className="flex items-center justify-center gap-2 flex-1 lg:max-w-[250px] bg-[#f5f5f5] p-3 rounded" target="_blank">
                        <Image src="/images/instagram.png" width={24} height={24} />
                        <span className="text-black">instagram</span>
                    </Link>
                    <Link href='http://www.twitter.com' className="flex items-center justify-center gap-2 flex-1 lg:max-w-[250px] bg-[#f5f5f5] p-3 rounded" target="_blank">
                        <Image className="-ml-6" src="/images/twitter.png" width={30}height={30} />
                        <span className="text-black">twitter</span>
                    </Link>
                    <Link href='http://www.youtube.com' className="flex items-center justify-center gap-2 flex-1 lg:max-w-[250px] bg-[#f5f5f5] p-3 rounded" target="_blank">
                        <Image className="-ml-4" src="/images/youtube.png" width={24}height={24} />
                        <span className="text-black">youtube</span>
                    </Link>
                </div>
                <div className="w-full lg:flex-1">
                    <form>
                        <div className="flex max-md:flex-col items-center gap-4">
                            <input className={`w-full md:flex-1 ${theme === 'light' ? 'border' : 'bg-[#f5f5f523]'} py-2 px-3 rounded`} type="text" placeholder="Name" />
                            <input className={`w-full md:flex-1 ${theme === 'light' ? 'border' : 'bg-[#f5f5f523]'} py-2 px-3 rounded`} type="text" placeholder="Email" />
                        </div>
                        <textarea className={`mt-5 w-full py-2 px-3 ${theme === 'light' ? 'border' : 'bg-[#f5f5f523]'}`} placeholder="Message" rows={5}></textarea>
                        <button className="mt-5 bg-[#1A8917] text-white w-full py-2 px-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact