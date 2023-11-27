import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = ({ className }) => {
    const { status } = useSession()
    // console.log(status);
    return (
        <>
            {status !== "authenticated" ? (
                <Link className={className} href="/login">Login</Link>
            ) : (
                <>
                    <Link className={className} href="/create-post">Write</Link>
                    <span className={`cursor-pointer ${className}`} onClick={() => signOut()}>Logout</span>
                </>
            )}
        </>
    );
};

export default AuthLinks;
