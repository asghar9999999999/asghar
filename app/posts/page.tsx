import Link from "next/link";

const posts = [
  { slug: "ai-advancements", title: "AI Advancements in 2024" },
  { slug: "blockchain-future", title: "Blockchain and its Future" },
  // Add other posts here...
];

export default function PostsPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a className="text-blue-500">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
