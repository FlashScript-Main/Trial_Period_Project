import { categories } from "@/database/db";
import CategoryDetail from "@/template/home-page/CategoryDetail"
import MoreCategories from "@/template/home-page/MoreCategories"
import NotFoundCategory from "@/template/home-page/NotFoundCategory";

const CategoryPage = ({ params: { name } }: CategoryPageProps) => {

    const category = categories.find(category => category.url === name);
    
    if (category) {
        return (
            <main className={` | bg-body-bg-light dark:bg-body-bg-dark |  | `}>
                <CategoryDetail 
                    category={category}
                />
                <MoreCategories />
            </main>
        )
    } else {
        return (
            <main className={` | bg-body-bg-light dark:bg-body-bg-dark |  | `}>
                <NotFoundCategory />
            </main>
        )
    }

}

export default CategoryPage