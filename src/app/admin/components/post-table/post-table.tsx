import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Post } from "@/models/Post"
import { PostTableRow } from "./post-table-row"
import { Card } from "@/components/ui/card"
import { fetchCategories } from "@/actions/fetch-categories"


interface PostTableProps {
    posts: Post[]
}

export async function PostTable({ posts }: PostTableProps) {
    const { categories } = await fetchCategories()

    return (
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Title
                        </TableHead>
                        <TableHead className="flex items-center justify-end">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {posts.map((post) => {
                        return (
                            <PostTableRow
                                post={post}
                                key={post.id}
                                categories={categories}
                                />
                        )
                    })}
                </TableBody>
            </Table>
        </Card>
    )
}