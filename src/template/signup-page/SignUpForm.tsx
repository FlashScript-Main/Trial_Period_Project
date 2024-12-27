"use client";

import { 
    CreateAccountInputEn, 
    CreateAccountInputFa, 
    createAccountSchemaEn, 
    createAccountSchemaFa 
} from "@/lib/schema";
import useUserStore from "@/store/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import useCreateAccountModal from "@/store/useCreateAccountModal";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { useLanguageStore } from "@/store/language-store";
import { Eye, EyeOff, KeyRound, LockKeyhole, Mail, UserRound } from "lucide-react";
import useInputVisibility from "@/hooks/useInputVisibility";
import { iranSans } from "@/utils/fonts";
// import ResultModal from "./ResultModal";
import { Slide, toast } from 'react-toastify';
import useRegisterUser from "@/hooks/useRegisterUser";
import useUserLength from "@/hooks/useUserLength";
import { v4 as uuidv4 } from 'uuid';
import { setAuthToken } from "@/lib/utils";

const toastifyVariants = {
    signedUpEn: "New User Has been Successfully Signed Up",
    signedUpFa: "کاربر جدید با موفقیت ثبت نام شد",
    errorSignUpEn: "An Error Occurred! Please Check Your Connection then Refresh the Page.",
    errorSignUpFa: "خطایی رخ داد! لطفا اتصال خود را بررسی کنید سپس صفحه وب را  بروز کنید.",
};

const SignUpForm = () => {

    const router = useRouter();

    const { isEnglish } = useLanguageStore();

    const { username } = useUserStore();

    const zodResolverLangauge = isEnglish ? createAccountSchemaEn : createAccountSchemaFa;

    const setUser = useUserStore((state) => state.setUser);

    const { inputVisibility, togglePasswordVisibility, toggleConfirmPasswordVisibility } = useInputVisibility();

    const { isModalActive, setIsModalActive } = useCreateAccountModal();

    const [isLoaderActive, setisLoaderActive] = useState(false);

    // useEffect(() => {
    //     useMotionAnimations.persist.rehydrate();
    // }, []);

    useEffect(() => {
        if (username !== "" && !isModalActive) {
            router.push(`/dashboard`);
        }
    }, [username, router, isModalActive]);

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CreateAccountInputEn | CreateAccountInputFa>({
        resolver: zodResolver(zodResolverLangauge),
    });

    const { data: userLength } = useUserLength();

    const registerMutation = useRegisterUser();

    const onSubmit = (data: CreateAccountInputEn | CreateAccountInputFa) => {

        const token = uuidv4();

        setAuthToken(token);
        
        // Save data to Zustand store
        setUser({ 
            username: data.username, 
            email: data.email, 
            password: data.password,
            // authToken: token,
        });

        // PUT The User token to cookie

        registerMutation.mutate({
            id: userLength!.length + 1,
            username: data.username,
            email: data.email,
            password: data.password,
            authToken: token,
        }, {
            /*
                Server only Response with Error but the data is successfully saved
                so I can NOT use these Methods
            */
            // onSuccess: () => {},
            // onError: () => {}
        });
        
        setisLoaderActive(true);
        setIsModalActive(true);

        toast.success(`${isEnglish ? toastifyVariants.signedUpEn : toastifyVariants.signedUpFa}`, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            closeButton: false,
            delay: 2000,
            className: `${isEnglish ? "w-11/12 sm:w-[380px]" : `flex flex-row-reverse gap-2 max-sm:w-11/12`} ${iranSans} mt-6`
        });
        
        reset();
    };

    useEffect(() => {
        if (isLoaderActive && isModalActive) {
            const timer = setTimeout(() => {
                setIsModalActive(false);
                setisLoaderActive(false);
                router.push(`/dashboard`);
            }, 5300);

            // Cleanup the timer on component unmount
            return () => clearTimeout(timer);
        }
    }, [router,isLoaderActive, isModalActive, setIsModalActive]);

    return (
        <>
            <motion.h1 
                initial={{ x: isEnglish ? "-20%" : "20%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.5, duration: 0.25, ease: "easeInOut" }}
                className={`mt-10 mb-6 | text-slate-800 dark:text-slate-200 text-4xl lg:text-5xl font-semibold text-center |  | `}
            >
                {isEnglish ? "Sign Up" : "ثبت نام"}
            </motion.h1>

            <motion.form 
                onSubmit={handleSubmit(onSubmit)} 
                // initial={{ y: "20%", opacity: 0 }}
                // whileInView={{ y: "0%", opacity: 1 }}
                // viewport={{ once: true, }}
                // transition={{ delay: 0.5, duration: 0.75, ease: "easeInOut" }}
                style={{ direction: isEnglish ? "ltr" : "rtl" }}
                className={`w-[16rem] md:w-[20rem] |  | flex flex-col gap-y-[0.9375rem] | `}
            >   
                <motion.label 
                    initial={{ y: "20%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.25, duration: 0.25, ease: "easeInOut" }}
                    className={`signup-input ${isEnglish ? "font-serif" : iranSans} ${errors.username && "input-error"}`}
                >
                    <UserRound className="text-slate-500" />
                    <input 
                        {...register("username")}
                        type="text"
                        className="signup-input-placeholder"
                        placeholder={`${isEnglish ? "Username" : "نام کاربری"}`}
                    />
                </motion.label>
                {errors.username && (
                    <p className={`-mt-[0.6rem] | text-rose-600 text-sm lg:text-base font-semibold |  | ${isEnglish ? "ml-2" : "ml-auto mr-2"}`}>
                        {`${errors.username.message}`}
                    </p>
                )}

                <motion.label 
                    initial={{ y: "20%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.5, duration: 0.25, ease: "easeInOut" }}
                    className={`signup-input ${isEnglish ? "font-serif" : iranSans} ${errors.email && "input-error"}`}
                >
                    <Mail className="text-slate-500" />

                    <input 
                        {...register("email")}
                        type="email"
                        placeholder={`${isEnglish ? "Email" : "ایمیل"}`}
                        className="signup-input-placeholder" 
                    />
                </motion.label>
                {errors.email && (
                    <p className={`-mt-[0.6rem] | text-rose-600 text-sm xl:text-base font-semibold |  | ${isEnglish ? "ml-2" : "ml-auto mr-2"}`}>
                        {`${errors.email.message}`}
                    </p>
                )}
                
                <div className={`relative |  |  | `}>
                    <motion.label 
                        initial={{ y: "20%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.75, duration: 0.25, ease: "easeInOut" }}
                        className={`signup-input ${iranSans} ${errors.password && "input-error"}`}
                    >
                        <KeyRound className="text-slate-500" />
                        <input 
                            {...register("password")}
                            type={inputVisibility.password ? "text" : "password"}
                            placeholder={`${isEnglish ? "Password" : "رمز عبور"}`}
                            className="signup-input-placeholder"
                        />
                    </motion.label>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 2, duration: 0.25, ease: "easeInOut" }} 
                        onClick={togglePasswordVisibility} 
                        className={`absolute ${isEnglish ? "-right-8" : "-left-8"} top-1/2 -translate-y-1/2 cursor-pointer text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-white transition-all`}
                    >
                        {inputVisibility.password ? <EyeOff /> : <Eye />}
                    </motion.span>
                </div>
                {errors.password && (
                    <p className={`-mt-[0.6rem] | text-rose-600 text-sm xl:text-base font-semibold |  | ${isEnglish ? "ml-2" : "ml-auto mr-2"}`}>
                        {`${errors.password.message}`}
                    </p>
                )}

                <div className={`relative |  |  | `}>
                    <motion.label 
                        initial={{ y: "20%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 1, duration: 0.25, ease: "easeInOut" }}
                        className={`signup-input ${iranSans} ${errors.confirmPassword && "input-error"}`}
                    >
                        <LockKeyhole className="text-slate-500" />
                        <input 
                            {...register("confirmPassword")}
                            type={inputVisibility.confirmPassword ? "text" : "password"}
                            placeholder={`${isEnglish ? "Confirm Password" : "تایید رمز عبور"}`}
                            className="signup-input-placeholder"
                        />
                    </motion.label>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 2.25, duration: 0.25, ease: "easeInOut" }}
                        onClick={toggleConfirmPasswordVisibility} 
                        className={`absolute ${isEnglish ? "-right-8" : "-left-8"} top-1/2 -translate-y-1/2 cursor-pointer text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-white transition-all`}
                    >
                        {inputVisibility.confirmPassword ? <EyeOff /> : <Eye />}
                    </motion.span>
                </div>
                {errors.confirmPassword && (
                    <p className={`-mt-[0.6rem] | text-rose-600 text-sm xl:text-base font-semibold |  | ${isEnglish ? "ml-2" : "ml-auto mr-2"}`}>
                        {`${errors.confirmPassword.message}`}
                    </p>
                )}

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    initial={{ y: "20%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 1.25, duration: 0.25, ease: "easeIn" }}
                    className={`${isLoaderActive ? "py-2" : "py-4"} mt-[1rem] md:w-[16rem] md:mx-auto | bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 text-[1rem] leading-[140%] font-semibold disabled:bg-gray-500 ${isEnglish && "font-sans"} |  | border-2 border-indigo-600 rounded-[20px] transition-all`}
                >
                    {isLoaderActive ? (<span className="loading loading-dots loading-lg"></span>) : isEnglish ? "Sign Up" : "ثبت نام"}
                </motion.button>

                {/* <ResultModal isLoaderActive={isLoaderActive} /> */}
            </motion.form>
        </>
    );

}

export default SignUpForm