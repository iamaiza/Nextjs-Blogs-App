import React from "react";
import Image from "next/image";
import { Theme, Links, PagesLinks } from "./imports";
import { useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();
    return (
        <nav className={`flex items-center justify-between gap-3 h-[100px]`}>
            <div className="hidden lg:flex items-center gap-x-2.5 flex-1">
                <Image
                    src="/images/facebook.png"
                    alt="facebook"
                    width={24}
                    height={24}
                />
                <Image
                    src="/images/instagram.png"
                    alt="instagram"
                    width={24}
                    height={24}
                />
                <Image
                    src="/images/tiktok.png"
                    alt="tiktok"
                    width={24}
                    height={24}
                />
                <Image
                    src="/images/youtube.png"
                    alt="youtube"
                    width={24}
                    height={24}
                />
            </div>
            <div className="flex-1 lg:text-center max-[300px]:text-[21px] text-2xl md:text-3xl 2xl:text-4xl font-bold mb-1.5">
                lamablog
            </div>
            <div className="flex items-center max-lg:justify-end max-[320px]:gap-x-2.5 gap-x-[15px] xl:gap-x-5 flex-1">
                <Theme />
                <PagesLinks className="max-sm:hidden" />
                <Links />
            </div>
        </nav>
    );
};

export default Navbar;
