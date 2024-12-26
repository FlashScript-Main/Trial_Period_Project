import { useMemo, useState } from "react";

const useInputVisibility = () => {

    const [inputVisibility, setInputVisibility] = useState({
        password: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = useMemo(() => {
        return () => {
            setInputVisibility({
                ...inputVisibility,
                password: !inputVisibility.password,
            });
        };
    }, [inputVisibility]);
    

    const toggleConfirmPasswordVisibility = useMemo(() => {
        return () => {
            setInputVisibility({
                ...inputVisibility,
                confirmPassword: !inputVisibility.confirmPassword,
            });
        };
    }, [inputVisibility]);

    return {
        inputVisibility,
        togglePasswordVisibility,
        toggleConfirmPasswordVisibility,
    }

}

export default useInputVisibility