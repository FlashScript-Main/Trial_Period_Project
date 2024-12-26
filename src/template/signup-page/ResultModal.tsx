"use client";

import { useLanguageStore } from "@/store/language-store";
import useCreateAccountModal from "@/store/useCreateAccountModal";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

const modalActionVariants = {
    signedUpEn: "New User Has been Successfully Logged In",
    signedUpFa: "کاربر جدید با موفقیت ثبت نام شد",
    sendingEn: "Sending your informations to the server, please wait...",
    sendingFa: "در حال ارسال اطلاعات شما به سرور هستیم، لطفا صبر کنید...",
    authorizedEn: "New User Has been Authorized and Successfully Logged In",
    authorizedFa: "کاربر جدید مجوز ورود دریافت کرد و با موفقیت وارد سیستم شده است",
};

const ResultModal = ({ isLoaderActive }: { isLoaderActive: boolean }) => {

    const { isEnglish } = useLanguageStore();

    const { isModalActive } = useCreateAccountModal();

    // const [showText, setShowText] = useState({
    //     isModalOpen: false,
    //     isSidebarVisible: true,
    //     isFormSubmitted: false,
    //     isLoading: false,
    // });

    const [state, setState] = useState({
        isCreatedVisible: true,
        isSendingVisible: true,
        isSuccessVisible: true,
    });

    useEffect(() => {
        if (isModalActive) {
            const CreatedTimer = setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    isCreatedVisible: false,
                }));
            }, 2000); // Visible for 2 seconds

            const SendingTimer = setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    isSendingVisible: false,
                }));
            }, 4000); // Visible for 2 seconds

            const SuccessTimer = setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    isSuccessVisible: false,
                }));
            }, 6000); // Visible for 2 seconds

            return () => { clearTimeout(CreatedTimer); clearTimeout(SendingTimer); clearTimeout(SuccessTimer); }; // Cleanup timer
        }
    }, [isModalActive]);

    const variants = {
        initial: { opacity: 0, y: 20 },
        fadeInUp: { opacity: 1, y: 0 },
        fadeOutDown: { opacity: 0, y: 20 },
    };

    return (
        <div>
            {state.isCreatedVisible && (
                <motion.div
                    // initial={"initial"}
                    // animate={"fadeInUp"}
                    // exit={"fadeOutDown"}
                    // variants={variants}     
                    // transition={{ duration: 1 }}
                    // className={`mt-11 | text-center text-xl font-semibold text-green-600 | | `}
                    className={state.isCreatedVisible && `toast toast-top toast-center`}
                >
                    <div className={state.isCreatedVisible && "alert alert-success"}>
                        <span className={`${state.isCreatedVisible ? "block" : "hidden"}`}>
                            {isEnglish ? modalActionVariants.signedUpEn : modalActionVariants.signedUpFa}
                        </span>
                    </div>
                </motion.div>
            )}
        </div>
    )

}

export default ResultModal


/*
<div className={`${isLoaderActive && "toast toast-top toast-center"}`}>
    <div className={`${isLoaderActive && "alert alert-success"}`}>
        <span className={`${isLoaderActive ? "block" : "hidden"}`}>
            Message sent successfully.
        </span>
    </div>
</div>
*/

/*
<dialog className={`modal ${isModalActive && "modal-open"}`}>
    <div className="modal-box | border-nftCustom-cta w-[25rem] h-[15.5rem]">
        <form method="dialog">
            <motion.div className={`relative w-full h-full |  |  | `}>
                <div className={`absolute inset-0 |  |  | `}>
                    {state.isCreatedVisible && (
                        <motion.div
                            initial={"initial"}
                            animate={"fadeInUp"}
                            exit={"fadeOutDown"}
                            variants={variants}     
                            transition={{ duration: 1 }}
                            className={`mt-11 | text-center text-xl font-semibold text-green-600 | | `}
                        >
                            {isEnglish ? modalActionVariants.signedUpEn : modalActionVariants.signedUpFa}
                        </motion.div>
                    )}
                </div>

                <div className={`absolute inset-0 |  |  | `}>
                    {state.isSendingVisible && (
                        <motion.div
                            initial="initial"
                            animate="fadeInUp"
                            exit="fadeOutDown"
                            variants={variants}
                            transition={{ duration: 1, delay: 2 }}
                            // className={`mt-11 | text-center text-xl font-semibold text-green-600 | | `}
                            className={`toast toast-top toast-center`}
                        >
                            <div className="alert alert-success">
                                {isEnglish ? modalActionVariants.sendingEn : modalActionVariants.sendingFa}
                            </div>
                        </motion.div>
                    )}
                </div>

                <div className={`absolute inset-0 |  |  | `}>
                    {state.isSuccessVisible && (
                        <motion.div
                            initial="initial"
                            animate="fadeInUp"
                            exit="fadeOutDown"
                            variants={variants}
                            transition={{ duration: 1, delay: 4 }}
                            className={`mt-11 | text-center text-xl font-semibold text-green-600 | | `}
                        >
                            {isEnglish ? modalActionVariants.authorizedEn : modalActionVariants.authorizedFa}
                        </motion.div>
                    )}
                </div>
            </motion.div>

            <button className={` | text-indigo-600 | flex justify-center items-center gap-4 | `}>   
                <span>
                    {isLoaderActive && <span className="loading loading-spinner loading-lg"></span>}
                </span>

                <span className={` | text-lg font-semibold |  | `}>
                    {isLoaderActive && isEnglish ? "Processing..." : "در حال پردازش..."}
                </span>
            </button>
        </form>
    </div>
</dialog>
*/