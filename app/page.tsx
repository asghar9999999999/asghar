// // import Link from "next/link";
// import Banner from "./components/ Banner";
// import BlogCard from "./components/BlogCard";

// const blogs = [
//   {
//     slug: "ai-advancements",
//     title: "AI Advancements in 2024",
//     date: "December 29, 2024",
//     category: "Technology",
//     thumbnail: "/images/ai-advancements.jpg",
//   },
//   {
//     slug: "blockchain-future",
//     title: "Blockchain and its Future",
//     date: "December 28, 2024",
//     category: "Finance",
//     thumbnail: "/images/blockchain-future.jpg",
//   },
//   {
//     slug: "metaverse-reality",
//     title: "Exploring the Metaverse: A New Reality",
//     date: "December 27, 2024",
//     category: "Virtual Reality",
//     thumbnail: "/images/metaverse-reality.jpg",
//   },
//   {
//     slug: "web3-internet",
//     title: "The Role of Web3 in Decentralized Internet",
//     date: "December 26, 2024",
//     category: "Blockchain",
//     thumbnail: "/images/web3-internet.jpg",
//   },
// ];

// export default function Home() {
//   return (
//     <div>
//       <Banner />
//       <div className="p-6">
//         <h1 className="text-4xl font-bold mb-6">Latest Blogs</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogs.map((blog) => (
//             <BlogCard key={blog.slug} blog={blog} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import Banner from "./components/ Banner";
const blogs = [
  {
    slug: "ai-advancements",
    title: "AI Advancements in 2024",
    date: "December 29, 2024",
    category: "Technology",
    thumbnail: "/ai.jpg",
  },
  {
    slug: "blockchain-future",
    title: "Blockchain and its Future",
    date: "December 28, 2024",
    category: "Finance",
    thumbnail: "/block.jpg",
  },
  {
    slug: "exploring-metaverse",
    title: "Exploring the Metaverse: A New Reality",
    date: "December 27, 2024",
    category: "Virtual Reality",
    thumbnail: "/meta.jpg",
  },
  {
    slug: "web3-decentralized-internet",
    title: "The Role of Web3 in Decentralized Internet",
    date: "December 26, 2024",
    category: "Blockchain",
    thumbnail: "/web.jpg",
  },
];

export default function HomePage() {
  return (
    <div>
      <Banner />
      <main className="mt-10">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    <Link href={`/posts/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    <span>{blog.date}</span> | <span>{blog.category}</span>
                  </p>
                  <Link
                    href={`/posts/${blog.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
