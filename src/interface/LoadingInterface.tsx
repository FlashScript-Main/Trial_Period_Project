
const LoadingInterface = () => {

    return (
        <div className={`w-full h-screen z-[999] |  |  | `}>
            <div className={`w-full |  | flex justify-center items-center | `}>
                <span className="loading loading-spinner w-[2rem] md:w-[3rem] lg:w-[4rem] text-rose-600 dark:text-indigo-600"></span>
            </div>
        </div>
    )

}

export default LoadingInterface