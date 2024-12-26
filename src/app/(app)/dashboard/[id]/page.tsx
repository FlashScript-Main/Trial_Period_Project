"use client";

import axios from "axios"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"

type ReadPostProps = {
    params: {
        id: string
    }
}

const ReadPost = ({ params: { id } }: ReadPostProps) => {

    const router = useRouter();
    
    const searchQuery = useSearchParams();
    const mode = searchQuery.get("mode");

    const [post, setPost] = useState<PostType | null>(null);
    const [editing, setEditing] = useState(mode === "edit");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`https://trial-period-server.vercel.app/posts/${id}`);
            setPost(response.data);
            setTitle(response.data.title);
            setContent(response.data.content);
        }

        if(id) {
            fetchPost();
        }
    }, [id]);

    useEffect(() => {
        if(mode === "edit") {
            setEditing(true);
        }
    }, [mode]);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        fetch(`https://trial-period-server.vercel.app/posts/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        // await axios.put(`http://localhost:3001/posts/${id}`, {
        //     title,
        //     content
        // });

        setEditing(false);

        const fetchPost = async () => {
            const response = await axios.get(`https://trial-period-server.vercel.app/posts/${id}`);
            setPost(response.data);
            setTitle(response.data.title);
            setContent(response.data.content);
        }
        fetchPost();
    }
    
    const handleDelete = () => {
        fetch(`https://trial-period-server.vercel.app/posts/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            }
        })
        router.push("/dashboard");
    }

    return (
        <div>
            <h1 className="text-3xl text-center">
                {editing ? "Edit Post" : "Read Post"}
            </h1>

            {post && (
                <div className="flex flex-col items-center">
                    {editing ? (
                        <form 
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4 mt-6 border p-6"
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
                                className="border border-slate-500"
                            />
                            <button className="w-full bg-green-300">
                                Save
                            </button>
                        </form>
                    ) : (
                        <div className="mt-5">
                            <h3 className="text-2xl font-bold">
                                {post?.titleEn}
                            </h3>
                            <p>
                                {post?.contentEn}
                            </p>
                        </div>
                    )}
                </div>
            )}

            <div className="flex space-x-4 mt-5">
                <button 
                    onClick={() => router.push("/dashboard")}
                    className="w-full bg-green-400 px-3 py-1.5"
                >
                    Home
                </button>

                <button 
                    onClick={() => setEditing(!editing)}
                    className="w-full bg-blue-300 px-3 py-1.5"
                >
                    Edit
                </button>

                <button 
                    onClick={handleDelete}
                    className="w-full bg-red-300 px-3 py-1.5"
                >
                    Delete
                </button>
            </div>
        </div>
    )

}

export default ReadPost