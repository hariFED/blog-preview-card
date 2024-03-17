



const BlogCard = ({
    cateagory,
    date,
    title,
    description,
    publishername,
    publisherpic,
    banner
}) => {
    return (
        <div className=" text-[#121212] w-[90%] bg-[#ffffff]  md:w-1/5 flex flex-col  items-center justify-center mx-auto rounded-xl border border-black shadow-[15px_20px_5px_rgba(4,4,3)] ">
            <div className="p-5 flex flex-col gap-4">
                <div className=" flex items-center" >
                    <img className=" rounded-xl" src={banner} alt="illustration" />
                </div>
                <div className="text-wrap text-left flex items-center">
                    <span className="bg-[#f4d04e] px-[10px] py-1 text-sm font-extrabold rounded-md">{cateagory}</span>
                </div>

                <div className=" font-semibold">
                    Published {date}
                </div>
                <div className=" cursor-pointer text-2xl font-bold hover:text-[#f4d04e]">
                    {title}
                </div>
                <div className="text-[#808080] font-medium">
                    {description}
                </div>
                <div className=" cursor-pointer flex items-center mt-2 gap-2">
                    <img width={40} src={publisherpic} alt="image-avatar" />
                    <div className="font-extrabold">{publishername}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard