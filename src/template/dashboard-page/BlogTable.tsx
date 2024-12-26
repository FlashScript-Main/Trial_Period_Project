"use client";

import { useLanguageStore } from "@/store/language-store";
import useUserStore from "@/store/useUserStore";
import { convertToPersianNumber } from "@/utils/utility-functions";
import axios from "axios";
import { Cpu, Cross, Drama, Gamepad2, GraduationCap, NotebookPen, NotepadText, Pizza, Plane, Plus, Trash2, Trophy, TvMinimalPlay } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


const BlogTable = () => {

    const [posts, setPosts] = useState<PostType[] | null>(null);
    const { isEnglish } = useLanguageStore();
    const { username } = useUserStore();

    const fetchPosts = async () => {
        const response = await axios.get(`https://trial-period-server.vercel.app/posts`);
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
        <section 
            style={{ direction: isEnglish ? "ltr" : "rtl" }}
            className={`px-4 max-md:py-20 w-full mt-12 md:mt-24 md:max-w-[83.75rem] md:mx-auto |  |  | `}
        >
            <div className={`mb-12 |  |  | `}>
                <h1 className={`mb-8 | text-4xl lg:text-6xl font-semibold text-blue-800 dark:text-blue-200 | flex justify-center items-center gap-2  | `}>
                    <span>{isEnglish ? "Hi" : "سلام"}</span>
                    <span>{username === "" ? "" : username}</span>
                    <span>🖐🏻</span>
                </h1>

                <h5 className={`mb-2 | text-xl lg:text-2xl font-semibold dark:text-slate-400 |  | `}>
                    {isEnglish ? "Welcome to your Personal Blog Dashboard!" : "به داشبورد وبلاگ شخصی خودت خوش آمدی!"}
                </h5>

                <p className={` | text-base lg:text-lg dark:text-slate-400 |  | `}>
                    {isEnglish ? "You can Create a New Post or Edit an Existing one." : "تو می تونی یک پست جدید بسازی یا یک پست موجود را ویرایش کنی."}
                </p>
            </div>

            <div className={`mb-12 |  | flex max-md:flex-col justify-between items-center max-md:gap-4 | `}>
                <h2 className={` | dark:text-slate-300 text-2xl md:text-3xl lg:text-4xl font-bold |  | `}>
                    {isEnglish ? "Blog Posts" : "پست های وبلاگ"}
                </h2>

                <Link 
                    href="/dashboard/create"
                    className={`px-3 py-2 | bg-green-500 hover:bg-white text-white hover:text-green-900 ${isEnglish && "font-sans"} | flex justify-center items-center gap-2 | rounded border-2 border-green-900 transition-all`}
                >
                    <span><Plus /></span>
                    <span>
                        {isEnglish ? "Create New Post" : "ایجاد پست جدید"}
                    </span>
                </Link>
            </div>

            <table className="table w-full border-2 border-black dark:border-white">
                <thead className="bg-gray-50 dark:bg-gray-950 text-black dark:text-white border-2 border-black dark:border-white">
                    <tr className={` |  |  | border-2 border-black dark:border-white`}>
                        <th className={`max-lg:hidden | text-center  |  | border-2 border-black dark:border-white`}>#</th>
                        <th className={`w-fit | text-center ${!isEnglish && "lg:text-start"}  |  | border-2 border-black dark:border-white`}>{isEnglish ? "Category" : "دسته بندی"}</th>
                        <th className={` | max-lg:text-center ${!isEnglish && "lg:text-start"}  |  | border-2 border-black dark:border-white`}>{isEnglish ? "Title" : "عنوان"}</th>
                        <th className={`max-sm:hidden | ${!isEnglish && "sm:text-start"}  |  | border-2 border-black dark:border-white`}>{isEnglish ? "Description" : "توضیحات"}</th>
                        <th className={`max-lg:hidden | ${!isEnglish && "lg:text-start"}  |  | border-2 border-black dark:border-white`}>{isEnglish ? "Content" : "محتوا"}</th>
                        <th className={` | max-lg:text-center text-center  |  | border-2 border-black dark:border-white`}>{isEnglish ? "Action" : "عملیات"}</th>
                    </tr>
                </thead>

                <tbody className={` | dark:text-slate-200 |  | border-2 border-black dark:border-white`}>
                    {posts?.map((post, index) => (
                        <tr 
                            key={index} 
                            className={` |  |  | border-2 border-black dark:border-white`}
                        >
                            <td className={`max-lg:hidden |  |  | border-2 border-black dark:border-white`}>
                                <div className={` |  | grid place-content-center | `}>
                                    {isEnglish ? post.id : convertToPersianNumber(post.id)}
                                </div>
                            </td>

                            <td className={` |  |  | border-2 border-black dark:border-white`}>
                                <div className={` |  | grid place-content-center | `}>
                                    <Link 
                                        href={`/category/${post.category}`} 
                                        className={`
                                            py-2 px-2 | inline-block text-slate-200 hover:bg-slate-200 | rounded-full border-2 transition-all
                                            ${post.color === "blue" && "bg-blue-500 border-blue-500 hover:text-blue-500"}
                                            ${post.color === "red" && "bg-red-500 border-red-500 hover:text-red-500"}
                                            ${post.color === "green" && "bg-green-500 border-green-500 hover:text-green-500"}
                                        `}
                                    >
                                        {post.icon === "Plane" && <Plane />}
                                        {post.icon === "GraduationCap" && <GraduationCap />}
                                        {post.icon === "TvMinimalPlay" && <TvMinimalPlay />}
                                        {post.icon === "Drama" && <Drama />}
                                        {post.icon === "Pizza" && <Pizza />}
                                        {post.icon === "Gamepad2" && <Gamepad2 />}
                                        {post.icon === "Cross" && <Cross />}
                                        {post.icon === "Trophy" && <Trophy />}
                                        {post.icon === "Cpu" && <Cpu />}
                                    </Link>
                                </div>
                            </td>

                            <td className={` |  |  | border-2 border-black dark:border-white`}>
                                <div className={` | ${!isEnglish && "text-start"} line-clamp-1 |  | `}>
                                    {isEnglish ? post.titleEn : post.titleFa}
                                </div>
                            </td>

                            <td className={`max-sm:hidden w-[30ch] |  |  | border-2 border-black dark:border-white`}>
                                <div className={` | ${!isEnglish && "sm:text-start"} line-clamp-1 |  | `}>
                                    {isEnglish ? post.descriptionEn : post.descriptionFa}
                                </div>
                            </td>

                            <td className={`max-lg:hidden |  |  | border-2 border-black dark:border-white`}>
                                <div className={`w-[30ch] | ${!isEnglish && "lg:text-start"} line-clamp-1 |  | `}>
                                    {isEnglish ? post.contentEn : post.contentFa}
                                </div>
                            </td>

                            <td className={` |  | max-lg:grid max-lg:place-content-center | `}>
                                <div className={` |  | flex max-md:flex-col justify-center items-center gap-2 | `}>
                                    <Link 
                                        href={`/dashboard/${post.id}?mode=read`}
                                        data-tip={isEnglish ? "Read" : "مطالعه"}
                                        className={`tooltip tooltip-primary w-fit px-2 py-2 | bg-indigo-200 hover:bg-indigo-800 text-indigo-800 hover:text-indigo-200 | flex justify-center items-center gap-2 | rounded-[20px] border-2 border-indigo-800 transition-all`}
                                    >
                                        <span><NotepadText size={20} /></span>
                                    </Link>

                                    <Link 
                                        href={`/dashboard/${post.id}?mode=edit`}
                                        data-tip={isEnglish ? "Edit" : "ویرایش"}
                                        className={`tooltip tooltip-success w-fit px-2 py-2 | bg-green-200 hover:bg-green-800 text-green-800 hover:text-green-200 | flex justify-center items-center gap-2 | rounded-[20px] border-2 border-green-800 transition-all`}
                                    >
                                        <span><NotebookPen size={20} /></span>
                                    </Link>

                                    <button 
                                        onClick={() => handleDelete(post.id)}
                                        data-tip={isEnglish ? "Delete" : "حذف"}
                                        className={`tooltip tooltip-error w-fit px-2 py-2 | bg-red-200 hover:bg-red-800 text-red-800 hover:text-red-200 | flex justify-center items-center gap-2 | rounded-[20px] border-2 border-red-800 transition-all`}
                                    >
                                        <span><Trash2 size={20} /></span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default BlogTable


/*
const checkIcon = [
    {
        id: 1,
        iconName: "Gamepad2",
        icon: <Gamepad2 />,
        href: "/category/game"
    },
    {
        id: 2,
        iconName: "Plane",
        icon: <Plane />,
        href: "/category/travel"
    },
    {
        id: 3,
        iconName: "GraduationCap",
        icon: <GraduationCap />,
        href: "/category/education"
    },
]

const postArray = [
    {   
        id: 1,
        category: "Game",
        icon: "Gamepad2",
    },
    {
        id: 2,
        category: "Entertainment",
        icon: "Plane",
    },
    {
        id: 3,
        category: "Fashion",
        icon: "GraduationCap",
    },
]
*/