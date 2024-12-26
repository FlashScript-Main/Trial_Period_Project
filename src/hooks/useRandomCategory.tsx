import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect } from "react";

const useRandomCategory = (url: string, setRandomCategories: Dispatch<SetStateAction<RandomCategoryType[] | null>>) => {

    const query = useQuery({
        queryKey: [url],
        queryFn: async () => {
            const response = await axios.request({ url: url })
            return response.data
        },
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        // enabled: false,
    })

    useEffect(() => {
        if (query.data) {
            setRandomCategories(query.data);
        }
    }, [query.data, setRandomCategories]);
    
    return query;
}

export default useRandomCategory
