import { Dispatch, SetStateAction } from "react";

const useFetchPosts = async (setPosts: Dispatch<SetStateAction<PostType[] | null>>) => {
    const response = await fetch(`https://trial-period-server.vercel.app/posts`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json'
        },
        cache: "no-cache",
        // next: { revalidate: 5 }
    });
    const data = await response.json();
    setPosts(data);
    // const response = await axios.get(`https://trial-period-server.vercel.app/posts`);
    // setPosts(response.data);
}

export default useFetchPosts;