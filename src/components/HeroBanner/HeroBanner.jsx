import { register } from 'swiper/element/bundle';

register();

const HeroBanner = () => {

    return (

        <div className="mt-4 md:mt-8 lg:mt-10 xl:mt-12 font-poppins mb-4 md:mb-8 lg:mb-10 xl:mb-12">

            <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true" pagination="true" pagination-clickable="true" navigation="true" space-between="20"
                centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">

                <swiper-slide>
                    <div className="bg-sky-900 text-white h-auto w-full p-10 md:p-16 lg:p-20 xl:p-24 ">

                        <div className='max-w-80 md:max-w-md lg:max-w-5xl xl:max-w-7xl mx-auto flex justify-center items-center'>

                            <div className=''>
                                <h1 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-raleway mb-4 xl:mb-5 xl:leading-[60px] max-w-5xl mx-auto text-start lg:text-center'>Benefits of Art & Craft Workshops in Child Development</h1>
                                <p className='text-xs md:text-sm xl:text-base font-poppins font-normal max-w-xs md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto leading-6 md:leading-7 text-neutral-300 text-justify lg:text-center'>Art and craft intoduce children to a range of intellectual and practical skills. Helping young become lifelong learners by exposing them to frequent opportunities to think out of the box and develop confidence in other subjects and pick up life skills.</p>

                                <div className='mt-4 md:mt-6 xl:mt-8 flex gap-x-4 justify-start lg:justify-center'>
                                    <button className='bg-rose-500 hover:bg-red-400 px-2 md:px-4 lg:px-6 py-2 text-sm md:text-base font-semibold rounded-sm md:rounded lg:rounded-md font-raleway'>JOIN US</button>
                                    <button className='hover:bg-rose-500 hover:border-transparent border border-white px-2 md:px-4 lg:px-6 py-2 text-sm md:text-base font-semibold rounded-sm md:rounded lg:rounded-md font-raleway'>LEARN MORE</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </swiper-slide>

                <swiper-slide>

                    <div className="bg-purple-900 text-white h-auto w-full p-10 md:p-16 lg:p-20 xl:p-24 ">

                        <div className='max-w-80 md:max-w-md lg:max-w-5xl xl:max-w-7xl mx-auto flex justify-center items-center'>

                            <div className=''>
                                <h1 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-raleway mb-4 xl:mb-5 xl:leading-[60px] max-w-5xl mx-auto text-start lg:text-center'>Improve Self-Expression & Self-Esteem</h1>
                                <p className='text-xs md:text-sm xl:text-base font-poppins font-normal max-w-xs md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto leading-6 md:leading-7 text-neutral-300 text-justify lg:text-center'>Most people think of art as something children do just for fun. However, art plays a very important role in a childs emotional development. Through, art, children learn how to express their emotions, cope with stress and interact with other people in a healthy manner.</p>

                                <div className='mt-4 md:mt-6 xl:mt-8 flex gap-x-4 justify-start lg:justify-center'>
                                    <button className='bg-rose-500 hover:bg-red-400 px-2 md:px-4 lg:px-6 py-2 text-sm md:text-base font-semibold rounded-sm md:rounded lg:rounded-md font-raleway'>JOIN US</button>
                                    <button className='hover:bg-rose-500 hover:border-transparent border border-white px-2 md:px-4 lg:px-6 py-2 text-sm md:text-base font-semibold rounded-sm md:rounded lg:rounded-md font-raleway'>LEARN MORE</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </swiper-slide>


                <swiper-slide>

                    <div className="bg-green-700 text-white h-auto w-full p-10 md:p-16 lg:p-20 xl:p-24 ">

                        <div className='max-w-80 md:max-w-md lg:max-w-5xl xl:max-w-7xl mx-auto flex justify-center items-center'>

                            <div className=''>
                                <h1 className='text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-raleway mb-4 xl:mb-5 xl:leading-[60px] max-w-5xl mx-auto text-start lg:text-center'>Boost Cognitive Skills & Spark Creativity Imagination</h1>
                                <p className='text-xs md:text-sm xl:text-base font-poppins font-normal max-w-xs md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto leading-6 md:leading-7 text-neutral-300 text-justify lg:text-center'>Both children and adults enjoy arts and crafts. Children in schools may learn skills such as wood working, wood carving, sewing, or making things with all sorts of material. Many community centres and schools have evening or day classes and workshops.</p>

                                <div className='mt-4 md:mt-6 xl:mt-8 flex gap-x-4 justify-start lg:justify-center'>
                                    <button className='bg-rose-500 hover:bg-red-400 px-2 md:px-4 lg:px-6 py-2 text-sm md:text-base font-semibold rounded-sm md:rounded lg:rounded-md font-raleway'>JOIN US</button>
                                    <button className='hover:bg-rose-500 hover:border-transparent border border-white px-2 md:px-4 lg:px-6 py-2 text-sm md:text-base font-semibold rounded-sm md:rounded lg:rounded-md font-raleway'>LEARN MORE</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </swiper-slide>

            </swiper-container>

        </div>
    );
};

export default HeroBanner;