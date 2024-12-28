import Link from "next/link";

const BlogCard = ({
  blog,
}: {
  blog: { slug: string; title: string; date: string; category: string };
}) => (
  <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
    <h2 className="text-xl font-bold">{blog.title}</h2>
    <p className="text-sm text-gray-600">
      {blog.date} | {blog.category}
    </p>
    <Link href={`/posts/${blog.slug}`}>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Read More
      </button>
    </Link>
  </div>
);

export default BlogCard;
