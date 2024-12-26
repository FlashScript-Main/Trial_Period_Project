import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const useRegisterUser = () => {

    return useMutation({
        mutationFn: (userData: UserData) => axios.post("https://trial-period-server.vercel.app/users", userData),
    })

}

export default useRegisterUser