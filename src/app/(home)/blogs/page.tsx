import { BlogsFeaturedPosts } from "@/components/(home)/pages/blogs/blogs-featured-posts";
import { BlogsHeader } from "@/components/(home)/pages/blogs/blogs-header";
import { BlogsPageWrapper } from "@/components/(home)/pages/blogs/blogs-page-wrapper";
import { BlogsRecentPosts } from "@/components/(home)/pages/blogs/blogs-recent-posts";
import { Newsletter } from "@/components/(home)/views/newsletter";

const BlogPage = () => (
  <BlogsPageWrapper>
    <BlogsHeader />
    <BlogsFeaturedPosts />
    <BlogsRecentPosts />
    <Newsletter rounded />
  </BlogsPageWrapper>
);

export default BlogPage;
