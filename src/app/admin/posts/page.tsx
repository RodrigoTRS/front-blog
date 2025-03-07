import { fetchLatestPosts } from "@/actions/fetch-latest-posts"
import { PageTitle } from "../components/page-title"
import { Pagination } from "@/components/pagination"
import { PageHeader } from "../components/page-header"
import { PostTable } from "../components/post-table/post-table"
import { Dialog } from "@/components/ui/dialog"
import { CreatePostButton } from "../components/manage-post/create-post-button"
import { ManagePostModal } from "../components/manage-post/manage-post-modal"
import { fetchCategories } from "@/actions/fetch-categories"

interface PostsPageProps {
    searchParams?: { 
        page: number
    }
}

export default async function PostsPage({ searchParams }: PostsPageProps) {

    const numberOfPosts = 10

    const currentPage = Number(searchParams?.page ?? 1)

    const { posts, totalPages } = await fetchLatestPosts({
        page: currentPage,
        perPage: numberOfPosts
    })

    const { categories } = await fetchCategories()

    return (
        <div className="flex flex-col w-full gap-6">
            
                <PageHeader>
                    <PageTitle>Blog posts</PageTitle>
                    <Dialog>
                        <CreatePostButton /> 
                        <ManagePostModal
                            categories={categories}
                            />
                    </Dialog>
                </PageHeader>

                <PostTable posts={posts}/>
            
            <Pagination
                basePath="/admin/posts"
                currentPage={currentPage}
                perPage={numberOfPosts}
                totalPages={totalPages}
            />
        </div>
    )
}