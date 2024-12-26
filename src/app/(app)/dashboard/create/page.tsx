"use client";

// import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {

    const router = useRouter();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        fetch("https://trial-period-server.vercel.app/posts", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
        });

        // await axios.post("http://localhost:3001/posts", {
        //     title,
        //     content
        // });

        router.push("/posts");
    }

    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="text-3xl">
                Create New Post
            </h1>

            <form 
                onSubmit={handleSubmit}
                className="flex flex-col items-center space-y-4 my-6 border p-6"
            >
                <input 
                    type="text" 
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border border-slate-500"
                />

                <textarea 
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border border-slate-500 p-2"
                />

                <button className="w-full bg-lime-300 py-1.5">
                    Create Post
                </button>
            </form>
        </div>
    )

}

export default CreatePost