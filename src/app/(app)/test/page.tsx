"use client";

import { useLanguageStore } from "@/store/language-store";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"

const Posts = () => {

    const [posts, setPosts] = useState<PostType[] | null>(null);
    const { isEnglish } = useLanguageStore();

    const fetchPosts = async () => {
        const response = await axios.get("https://trial-period-server.vercel.app/posts");
        setPosts(response.data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = (id: number) => {
        fetch(`https://trial-period-server.vercel.app/posts/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            }
        })
        const filterPosts = posts?.filter((post) => post.id !== id);
        setPosts(filterPosts!);
    }

    return (
        <section className="px-12 text-center py-20">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">
                    Blog Posts
                </h1>

                <Link 
                    href="/posts/create"
                    className="px-4 py-1.5 bg-green-500 rounded text-white"
                >
                    Create New Post
                </Link>
            </div>

            <table className="divide-y divide-gray-200 w-full my-6">
                <thead className="bg-gray-50">
                    <tr>
                        <th>ID</th>
                        <th>category</th>
                        <th>Title</th>
                        <th>description</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {posts?.map((post, index) => (
                        <tr key={index}>
                            <td>
                                {post.id}
                            </td>

                            <td>
                                <Link 
                                    href={`/category/${post.category}`} 
                                    className={`
                                        py-2 px-2 | inline-block text-slate-200 | rounded-full
                                        ${post.color === "blue" && "bg-blue-500"}
                                        ${post.color === "red" && "bg-red-500"}
                                        ${post.color === "green" && "bg-green-500"}
                                    `}
                                >
                                    {/* {post.icon === "Plane" && <Plane />}
                                    {post.icon === "GraduationCap" && <GraduationCap />}
                                    {post.icon === "TvMinimalPlay" && <TvMinimalPlay />}
                                    {post.icon === "Drama" && <Drama />}
                                    {post.icon === "Pizza" && <Pizza />}
                                    {post.icon === "Gamepad2" && <Gamepad2 />}
                                    {post.icon === "Cross" && <Cross />}
                                    {post.icon === "Trophy" && <Trophy />}
                                    {post.icon === "Cpu" && <Cpu />} */}
                                </Link>
                            </td>

                            {/* <td>
                                <Link href={`/category/${post.category}`}>
                                    {post.category}
                                </Link>
                            </td> */}

                            <td>
                                {isEnglish ? post.titleEn : post.titleFa}
                            </td>

                            <td>
                                {isEnglish ? post.descriptionEn : post.descriptionFa}
                            </td>

                            <td>
                                {isEnglish ? post.contentEn : post.contentFa}
                            </td>

                            <td className="space-x-4 px-6 py-3 text-end">
                                <Link href={`/posts/${post.id}?mode=read`}>
                                    Read
                                </Link>

                                <Link href={`/posts/${post.id}?mode=edit`}>
                                    Edit
                                </Link>

                                <button onClick={() => handleDelete(post.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )

}

export default Posts