import { useLanguageStore } from "@/store/language-store";
import useUserStore from "@/store/useUserStore";

const DashboardTopIntro = () => {

    const { isEnglish } = useLanguageStore();
    
    const { username } = useUserStore();

    return (
        <div className={`mb-12 |  |  | `}>
            <h1 className={`mb-8 | text-4xl lg:text-6xl font-semibold text-blue-800 dark:text-blue-200 | flex justify-center items-center gap-2  | `}>
                <span>{isEnglish ? "Hi" : "سلام"}</span>
                <span>{username === "" ? "" : username}</span>
                <span>🖐🏻</span>
            </h1>

            <h5 className={`mb-2 | text-xl lg:text-2xl font-semibold dark:text-slate-400 |  | `}>
                {isEnglish ? "Welcome to your Personal Blog Dashboard!" : "به داشبورد وبلاگ شخصی خودت خوش آمدی!"}
            </h5>

            <p className={` | text-base lg:text-lg dark:text-slate-400 |  | `}>
                {isEnglish ? "You can Create a New Post or Edit an Existing one." : "تو می تونی یک پست جدید بسازی یا یک پست موجود رو ویرایش کنی."}
            </p>
        </div>
    )

}

export default DashboardTopIntro