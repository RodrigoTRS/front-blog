import { fetchCategories } from "@/actions/fetch-categories"
import { CategoryBadge } from "@/components/category-badge"

export async function Categories() {
    const { categories } = await fetchCategories()

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-primary">
                Categories
            </h2>

            <div className="flex flex-wrap gap-2">
                {categories.map(({title, slug}) => {
                    return  (
                        <CategoryBadge
                            title={title}
                            slug={slug}
                            variant="outline"
                            key={title}
                        />
                    )})
                }
            </div>
        </div>
    )
}