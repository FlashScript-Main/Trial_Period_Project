import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { Dispatch, SetStateAction, useEffect } from "react"

const useCategories = (url: string, setCategories: Dispatch<SetStateAction<CategoryType[] | null>>) => {

    const query = useQuery({
        queryKey: [url],
        queryFn: async () => {
            const response = await axios.request({ url: url });
            return response.data;
        },
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        // enabled: false,
    });

    useEffect(() => {
        if (query.data) {
            setCategories(query.data);
        }
    }, [query.data, setCategories]);

    return query;

}

export default useCategories

