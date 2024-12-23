import { Footer, Header } from "@/components"
import CategoriesSection from "@/template/home-page/CategoriesSection"

const Home = () => {

    return (
        <main className={` | bg-body-bg-light dark:bg-body-bg-dark |  | `}>
            <Header />
            <CategoriesSection />
            <Footer />
        </main>
    )

}

export default Home