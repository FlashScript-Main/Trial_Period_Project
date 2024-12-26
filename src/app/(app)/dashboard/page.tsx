import BlogTable from "@/template/dashboard-page/BlogTable";

const DashboardPage = async () => {

    return (
        <main className={`min-h-screen | bg-body-bg-light dark:bg-body-bg-dark | flex flex-col justify-center items-center | `}>
            <BlogTable />
            {/* <div className="min-h-screen"></div> */}
        </main>
    )

}

export default DashboardPage