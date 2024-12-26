import { useLanguageStore } from "@/store/language-store";

const ErrorInterface = () => {

    const { isEnglish } = useLanguageStore();

    return (
        <div 
            className={`w-full h-screen z-[999] |  |  | `}
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
        >
            <div className={`w-full | text-center | flex justify-center items-center | `}>
                <h5 className="text-lg md:text-xl lg:text-2xl text-rose-600 dark:text-indigo-600 font-semibold">
                    {isEnglish ? "An Error Occurred! Please Check Your Connection then Refresh the Page." : "خطایی رخ داد! لطفا اتصال خود را بررسی کنید سپس صفحه وب را  بروز کنید."}
                </h5>
            </div>
        </div>
    )

}

export default ErrorInterface