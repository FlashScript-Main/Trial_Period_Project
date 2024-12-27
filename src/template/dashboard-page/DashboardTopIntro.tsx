import { useLanguageStore } from "@/store/language-store";
import useUserStore from "@/store/useUserStore";
import { motion } from "framer-motion";

const DashboardTopIntro = () => {

    const { isEnglish } = useLanguageStore();
    
    const { username } = useUserStore();

    return (
        <div className={`mb-12 |  |  | `}>
            <motion.h1 
                initial={{ y: "20%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.25, duration: 0.25, ease: "easeIn" }}
                className={`mb-8 | text-4xl lg:text-6xl font-semibold text-blue-800 dark:text-blue-200 | flex justify-center items-center gap-2  | `}
            >
                <span>{isEnglish ? "Hi" : "سلام"}</span>
                <span>{username === "" ? "" : username}</span>
                <span>🖐🏻</span>
            </motion.h1>

            <motion.h5 
                initial={{ x: isEnglish ? "10%" : "-10%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.5, duration: 0.25, ease: "easeIn" }}
                className={`mb-2 | text-xl lg:text-2xl font-semibold dark:text-slate-400 |  | `}
            >
                {isEnglish ? "Welcome to your Personal Blog Dashboard!" : "به داشبورد وبلاگ شخصی خودت خوش آمدی!"}
            </motion.h5>

            <motion.p 
                initial={{ x: isEnglish ? "10%" : "-10%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.75, duration: 0.25, ease: "easeIn" }}
                className={` | text-base lg:text-lg dark:text-slate-400 |  | `}
            >
                {isEnglish ? "You can Create a New Post or Edit an Existing one." : "تو می تونی یک پست جدید بسازی یا یک پست موجود رو ویرایش کنی."}
            </motion.p>
        </div>
    )

}

export default DashboardTopIntro