import BlogTable from "@/template/dashboard-page/BlogTable";

export const generateMetadata = async () => {
    return {
        title: "داشبورد",
    }
}

const DashboardPage = async () => {

    return (
        <main className={`min-h-screen | bg-body-bg-light dark:bg-body-bg-dark | flex flex-col justify-center items-center | `}>
            <BlogTable />
        </main>
    )

}

export default DashboardPage