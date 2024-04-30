


const LatestBlog = () => {
    return (
        <div className="max-w-[350px] p-4 mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-7xl  mt-4 md:mt-6 lg:mt-8 xl:mt-32 font-poppins text-black mb-4 md:mb-8 lg:mb-10 xl:mb-12">

            <div className="space-y-2 text-center mb-10 md:mb-12 lg:mb-16 xl:mb-20">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">Latest News</h2>
                <p className="font-serif text-xs md:text-sm xl:text-base text-neutral-400 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto">Explore the latest trends and find inspiration to fuel your own artistic journey.</p>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-6 xl:gap-y-8 lg:grid-cols-3">

                <article className="flex flex-col w-full shadow-lg">

                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="...Loading" className="object-cover w-full h-52 bg-gray-500" src="news01.jpg" />
                    </a>

                    <div className="flex flex-col p-6">


                        <h3 className="flex-1 py-2 text-base xl:text-lg font-semibold leading-snug">New Exhibit: Exploring Abstract Art</h3>

                        <div className="flex flex-wrap pt-3 space-x-2 text-xs text-gray-400">
                            <p>We are thrilled to announce our latest exhibit, Exploring Abstract Art. Come witness the bold and captivating creations of renowned artists from around the world. Get ready to immerse yourself in a world of color, form, and imagination.</p>
                        </div>

                        <a className="py-2 w-full bg-sky-900 hover:bg-sky-800 text-white text-center mt-4">Load More</a>

                    </div>


                </article>

                <article className="flex flex-col w-full shadow-lg">

                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="...Loading" className="object-cover w-full h-52 bg-gray-500" src="news02.jpg" />
                    </a>

                    <div className="flex flex-col p-6">


                        <h3 className="flex-1 py-2 text-base xl:text-lg font-semibold leading-snug">Crafting Workshop: DIY Pottery</h3>

                        <div className="flex flex-wrap pt-3 space-x-2 text-xs text-gray-400">
                            <p>Join us this Saturday for a hands-on pottery workshop! Discover the joy of molding clay into beautiful pottery pieces. Whether you are a beginner or an experienced crafter, this workshop offers something for everyone. Limited spots available, so book yours now!</p>
                        </div>

                        <a className="py-2 w-full bg-sky-900 hover:bg-sky-800 text-white text-center mt-4">Load More</a>

                    </div>


                </article>

                <article className="flex flex-col w-full shadow-lg">

                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="...Loading" className="object-cover w-full h-52 bg-gray-500" src="news03.jpg" />
                    </a>

                    <div className="flex flex-col p-6">


                        <h3 className="flex-1 py-2 text-base xl:text-lg font-semibold leading-snug">Artist Spotlight: Emily Davis</h3>

                        <div className="flex flex-wrap pt-3 space-x-2 text-xs text-gray-400">
                            <p>This month, shining the spotlight on the talented artist Emily Davis. Known for her breathtaking landscapes and intricate watercolor techniques, work continues to captivate audiences worldwide. Read our exclusive interview with Emily and explore her stunning portfolio.</p>
                        </div>

                        <a className="py-2 w-full bg-sky-900 hover:bg-sky-800 text-white text-center mt-4">Load More</a>

                    </div>


                </article>

            </div>



        </div>
    );
};

export default LatestBlog;