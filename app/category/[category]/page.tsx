import BlogCard from "../../components/BlogCard";

const blogs = [
  {
    slug: "ai-advancements",
    title: "AI Advancements in 2024",
    date: "2024-01-01",
    category: "AI",
  },
  {
    slug: "blockchain-future",
    title: "Blockchain and its Future",
    date: "2024-01-05",
    category: "Blockchain",
  },
  {
    slug: "exploring-metaverse",
    title: "Exploring the Metaverse: A New Reality",
    date: "2024-01-10",
    category: "Metaverse",
  },
  // Add all other blogs...
];

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.toLowerCase() === params.category
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {params.category} Blogs
      </h1>
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      ) : (
        <p>No blogs found for this category.</p>
      )}
    </div>
  );
}
