// import BlogCard from "../../components/BlogCard";

// const blogs = [
//   {
//     slug: "ai-advancements",
//     title: "AI Advancements in 2024",
//     date: "2024-01-01",
//     category: "AI",
//   },
//   {
//     slug: "blockchain-future",
//     title: "Blockchain and its Future",
//     date: "2024-01-05",
//     category: "Blockchain",
//   },
//   {
//     slug: "exploring-metaverse",
//     title: "Exploring the Metaverse: A New Reality",
//     date: "2024-01-10",
//     category: "Metaverse",
//   },
//   {
//     slug: "web3-decentralized-internet",
//     title: "The Role of Web3 in Decentralized Internet",
//     date: "2024-01-10",
//     category: "Web3",
//   },
//   {
//     slug: "5G-internet",
//     title: "How 5G is Transforming Connectivity",
//     date: "2024-01-10",
//     category: "5G",
//   },
//   {
//     slug: "quantum-computing",
//     title: "Quantum Computing: A Leap into the Future",
//     date: "2024-01-10",
//     category: "Quantum-Computing",
//   },
//   {
//     slug: "autonomous-vehicles",
//     title: "The Rise of Autonomous Vehicles",
//     date: "2024-01-10",
//     category: "Autonomous-Vehicles",
//   },
//   {
//     slug: "cybersecurity-trends",
//     title: "Cybersecurity Trends in the Digital Ages",
//     date: "2024-01-10",
//     category: "Cybersecurity",
//   },
//   {
//     slug: "ai-on-job-markets",
//     title: "The Impact of AI on Job Markets",
//     date: "2024-01-10",
//     category: "Job-Markets",
//   },
//   {
//     slug: "sustainable-technology",
//     title: "Sustainable Technology: Innovations for a Greener Future",
//     date: "2024-01-10",
//     category: "Sustainable-Tech",
//   },
//   // Add all other blogs...
// ];

// export default function CategoryPage({
//   params,
// }: {
//   params: { category: string };
// }) {
//   const filteredBlogs = blogs.filter(
//     (blog) => blog.category.toLowerCase() === params.category
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold mb-6 capitalize">
//         {params.category} Blogs
//       </h1>
//       {filteredBlogs.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredBlogs.map((blog) => (
//             <BlogCard key={blog.slug} blog={blog} />
//           ))}
//         </div>
//       ) : (
//         <p>No blogs found for this category.</p>
//       )}
//     </div>
//   );
// }
import { Metadata } from "next";
import Link from "next/link";

// Sample static blogs data
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
    slug: "metaverse-reality",
    title: "Exploring the Metaverse: A New Reality",
    date: "December 27, 2024",
    category: "Virtual Reality",
    thumbnail: "/meta.jpg",
  },
  {
    slug: "web3-internet",
    title: "The Role of Web3 in Decentralized Internet",
    date: "December 26, 2024",
    category: "Blockchain",
    thumbnail: "/web.jpg",
  },
  {
    slug: "5G-internet",
    title: "How 5G is Transforming Connectivity",
    date: "2024-01-10",
    category: "5G",
    thumbnail: "/5g.jpg",
  },
  {
    slug: "quantum-computing",
    title: "Quantum Computing: A Leap into the Future",
    date: "2024-01-10",
    category: "Quantum-Computing",
    thumbnail: "/qc.jpg",
  },
  {
    slug: "autonomous-vehicles",
    title: "The Rise of Autonomous Vehicles",
    date: "2024-01-10",
    category: "Autonomous-Vehicles",
    thumbnail: "/auto.jpg",
  },
  {
    slug: "cybersecurity-trends",
    title: "Cybersecurity Trends in the Digital Ages",
    date: "2024-01-10",
    category: "Cybersecurity",
    thumbnail: "/cyber.jpg",
  },
  {
    slug: "ai-on-job-markets",
    title: "The Impact of AI on Job Markets",
    date: "2024-01-10",
    category: "Job-Markets",
    thumbnail: "/job.jpg",
  },
  {
    slug: "sustainable-technology",
    title: "Sustainable Technology: Innovations for a Greener Future",
    date: "2024-01-10",
    category: "Sustainable-Tech",
    thumbnail: "/tech.jpg",
  },
];

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const categoryName = params.category.replace("-", " ");
  return {
    title: `Category: ${categoryName}`,
    description: `Explore blogs related to ${categoryName}.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  // Resolve params if they are a Promise
  const resolvedParams = await params;
  const categoryName = resolvedParams.category.replace("-", " ");

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.category.toLowerCase().replace(" ", "-") ===
      resolvedParams.category.toLowerCase()
  );

  return (
    <div className="p-6 bg-gray-100">
      <header className="text-center py-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-bold mb-4">Category: {categoryName}</h1>
        <p className="text-lg">Blogs related to {categoryName}</p>
      </header>

      <main className="mt-10">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
                    <span>{blog.date}</span>
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
        ) : (
          <p className="text-center text-gray-700">
            No blogs found in this category.
          </p>
        )}
      </main>
    </div>
  );
}
