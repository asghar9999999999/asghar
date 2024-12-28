// import Link from "next/link";
import Banner from "./components/ Banner";
import BlogCard from "./components/BlogCard";

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
  // Add other blogs...
];

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-6">Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
