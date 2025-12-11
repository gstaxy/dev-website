import { Posts } from "../posts";
import { getPosts } from "../get-posts";

export const revalidate = 60;

export const metadata = {
  title: "Blog – Guillaume Slevan-Tremblay",
  description: "Latest writing and research updates from Guillaume Slevan-Tremblay.",
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <Posts posts={posts} />;
}
