// import Link from "next/link";

// const categories = [
//   { name: "AI", slug: "ai" },
//   { name: "Blockchain", slug: "blockchain" },
//   { name: "Metaverse", slug: "metaverse" },
//   { name: "Web3", slug: "web3" },
//   { name: "5G", slug: "5g" },
//   { name: "Quantum-Computing", slug: "quantum-computing" },
//   { name: "Autonomous-Vehicles", slug: "autonomous-vehicles" },
//   { name: "Cybersecurity", slug: "cybersecurity" },
//   { name: "Job-Markets", slug: "job-markets" },
//   { name: "Sustainable-Tech", slug: "sustainable-tech" },
// ];

// export default function Categories() {
//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold mb-6">Categories</h1>
//       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.map((category) => (
//           <li key={category.slug} className="bg-white p-4 rounded shadow">
//             <Link href={`/category/${category.slug}`}>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                 {category.name}
//               </button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client";

import Link from "next/link";

const categories = [
  { name: "Technology", slug: "technology" },
  { name: "Finance", slug: "finance" },
  { name: "Virtual Reality", slug: "virtual-reality" },
  { name: "Blockchain", slug: "blockchain" },
  { name: "5G", slug: "5g" },
  { name: "Quantum Computing", slug: "quantum-computing" },
  { name: "Autonomous Vehicles", slug: "autonomous-vehicles" },
  { name: "Cybersecurity", slug: "cybersecurity" },
  { name: "Job Markets", slug: "job-markets" },
  { name: "Sustainable Tech", slug: "sustainable-tech" },
];

export default function CategoriesPage() {
  return (
    <div className="p-6 bg-gray-100">
      <header className="text-center py-10 bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <h1 className="text-5xl font-bold mb-4">Explore Categories</h1>
        <p className="text-lg">Discover blogs across various topics</p>
      </header>

      <main className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="bg-white shadow-md rounded-lg text-center p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {category.name}
              </h2>
              <Link
                href={`/category/${category.slug}`}
                className="text-blue-500 font-semibold hover:underline"
              >
                View Posts
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* <footer className="text-center py-6 mt-10 bg-gray-800 text-white">
        <p>&copy; 2024 TechBlog. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
