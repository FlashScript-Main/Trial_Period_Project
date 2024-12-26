import SignUpForm from "@/template/signup-page/SignUpForm"
import Image from "next/image"
import { ToastContainer } from "react-toastify"

const SignUpPage = () => {

    return (
        <main className={`min-h-screen | bg-body-bg-light dark:bg-body-bg-dark | flex flex-col justify-center items-center | `}>
            <div>
                <Image 
                    src="/sign-up.jpeg" 
                    alt="FlashScript Logo" 
                    width={1000} 
                    height={1000} 
                    className={`w-[18rem] md:w-[20rem] lg:w-[22rem] h-auto |  |  | rounded-[20px]`}
                />
            </div>

            <SignUpForm />

            <ToastContainer />
        </main>
    )

}

export default SignUpPage