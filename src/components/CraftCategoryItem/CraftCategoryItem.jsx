import { Link } from "react-router-dom";

const CraftCategoryItem = () => {

    return (
        <div className="max-w-[350px] p-4 mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-7xl  mt-4 md:mt-6 lg:mt-8 xl:mt-28 font-poppins text-black mb-4 md:mb-8 lg:mb-10 xl:mb-12">

            <div className="space-y-2 text-center mb-10 md:mb-12 lg:mb-16 xl:mb-20">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">Art & Craft Categories</h2>
                <p className="font-serif text-xs md:text-sm xl:text-base text-neutral-400 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto">Art and craft encompass a wide array of categories, each offering unique avenues for creativity and expression. Within visual arts, painting stands as a timeless form, ranging from classic oil on canvas to contemporary mixed media experimentation.</p>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-6 xl:gap-y-8 lg:grid-cols-2 xl:grid-cols-3">

                <div className="card w-full lg:w-96 border border-neutral-300 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <h2 className="card-title">Landscape Painting</h2>
                        <p>Landscape painting is a genre that has captivated artists for centuries, offering a window into the beauty and grandeur of the natural world.</p>
                        <Link to={`/craftCategoryItems/landscape_painting`} className="btn  bg-blue-500 text-white hover:bg-blue-600">Load More</Link>
                    </div>
                </div>

                <div className="card w-full lg:w-96 border border-neutral-300 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <h2 className="card-title">Portrait Drawing</h2>
                        <p>Portrait drawing is the art of capturing the likeness and personality of a person through pencil, charcoal, or other mediums.</p>
                        <Link to={`/craftCategoryItems/portrait_drawing`} className="btn  bg-amber-500 text-white hover:bg-amber-600">Load More</Link>
                    </div>
                </div>

                <div className="card w-full lg:w-96 border border-neutral-300 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <h2 className="card-title">Watercolour Painting</h2>
                        <p>Watercolor painting is a delicate yet vibrant art form that uses water pigments to create luminous and translucent effects.</p>
                        <Link to={`/craftCategoryItems/watercolor_painting`} className="btn  bg-purple-500 text-white hover:bg-purple-600">Load More</Link>
                    </div>
                </div>

                <div className="card w-full lg:w-96 border border-neutral-300 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <h2 className="card-title">Oil Painting</h2>
                        <p>Oil painting is a rich and versatile art form that employs pigments suspended in oil to create vivid, textured compositions.</p>
                        <Link to={`/craftCategoryItems/oil_painting`} className="btn  bg-green-500 text-white hover:bg-green-600">Load More</Link>
                    </div>
                </div>

                <div className="card w-full lg:w-96 border border-neutral-300 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <h2 className="card-title">Charcoal Sketching</h2>
                        <p>Charcoal sketching is a dynamic and expressive art form that utilizes charcoal sticks or pencils to create bold, dramatic compositions.</p>
                        <Link to={`/craftCategoryItems/charcoal_sketching`} className="btn  bg-red-500 text-white hover:bg-red-600">Load More</Link>
                    </div>
                </div>
                <div className="card w-full lg:w-96 border border-neutral-300 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <h2 className="card-title">Cartoon Drawing</h2>
                        <p>Cartoon drawing is a playful and imaginative art form that simplifies and exaggerates features to create humorous or expressive characters.</p>
                        <Link to={`/craftCategoryItems/cartoon_drawing`} className="btn  bg-sky-500 text-white hover:bg-sky-600">Load More</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CraftCategoryItem;