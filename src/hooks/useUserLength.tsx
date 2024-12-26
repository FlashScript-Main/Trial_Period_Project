import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useUserLength = () => {

    return useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await axios.request({ url: "https://trial-period-server.vercel.app/users" })
            return response.data
        },
        select: (data: UserData[]) => data.map((user) => user.id),
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        // enabled: false,
    })

}

export default useUserLength