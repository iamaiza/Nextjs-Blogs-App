import Image from "next/image"

const About = () => {
    return (
        <div className="mt-12 mb-24">
            <h2 className="mb-12 text-4xl text-center font-bold">Welcome to my Blogs</h2>

            <div className="flex items-center gap-8 xl:gap-14 max-lg:flex-col">
                <div className="flex-1">
                    <div className="max-lg:text-center">
                        <span className="text-xl font-semibold">I blog about:-</span>
                        <ul className="lg:list-disc mt-3 lg:ml-7">
                            <li>Style</li>
                            <li>Fashion</li>
                            <li>Food</li>
                            <li>Travel</li>
                            <li>Culture</li>
                            <li>Coding</li>
                        </ul>
                    </div>
                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed. Sit amet cursus sit amet dictum sit amet. Integer malesuada nunc vel risus. Tortor dignissim convallis aenean et tortor at risus. Ultrices gravida dictum fusce ut placerat orci nulla. Nulla pellentesque dignissim enim sit. Leo a diam sollicitudin tempor id eu nisl. Id faucibus nisl tincidunt eget. Quisque id diam vel quam elementum pulvinar. Sed elementum tempus egestas sed. Euismod nisi porta lorem mollis aliquam ut porttitor. Tellus elementum sagittis vitae et leo duis ut diam quam. Lectus sit amet est placerat in egestas erat imperdiet sed.</p>
                </div>
                <figure className="flex-1 h-[500px] max-lg:hidden relative">
                    <Image className="object-cover" src='/images/p1.jpeg' fill />
                </figure>
            </div>
        </div>
    )
}

export default About