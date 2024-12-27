"use client";

import SignUpForm from "@/template/signup-page/SignUpForm"
import Image from "next/image"
import { ToastContainer } from "react-toastify"
import { motion } from "framer-motion"

const SignUpPage = () => {

    return (
        <main className={`min-h-screen | bg-body-bg-light dark:bg-body-bg-dark | flex flex-col justify-center items-center | `}>
            <motion.div
                initial={{ y: "-20%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.25, duration: 0.25, ease: "easeInOut" }}
            >
                <Image 
                    src="/sign-up.jpeg" 
                    alt="FlashScript Logo" 
                    width={1000} 
                    height={1000} 
                    className={`w-[18rem] md:w-[20rem] lg:w-[22rem] h-auto |  |  | rounded-[20px]`}
                />
            </motion.div>

            <SignUpForm />

            <ToastContainer />
        </main>
    )

}

export default SignUpPage