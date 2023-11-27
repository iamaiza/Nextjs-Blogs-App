import { Footer, Navbar } from "@/imports";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    const mediaWidth =
        "max-2xl:max-w-[1366px] max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-[640px] max-[640px]:max-w-[475px]";
    const mediaPadding = "max-lg:px-10";
    return (
        <SessionProvider>
            <ThemeContextProvider>
                <ThemeProvider>
                    <div className="min-h-screen main-container">
                        <div
                            className={`max-w-screen-2xl mx-auto px-20 relative ${mediaWidth} ${mediaPadding}`}
                        >
                            <Navbar />
                            <Component {...pageProps} />
                            <Footer />
                        </div>
                    </div>
                </ThemeProvider>
            </ThemeContextProvider>
        </SessionProvider>
    );
}
