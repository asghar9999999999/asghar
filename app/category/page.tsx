import Link from "next/link";

const categories = [
  { name: "AI", slug: "ai" },
  { name: "Blockchain", slug: "blockchain" },
  { name: "Metaverse", slug: "metaverse" },
  { name: "Web3", slug: "web3" },
  { name: "5G", slug: "5g" },
  { name: "Quantum Computing", slug: "quantum-computing" },
  { name: "Autonomous Vehicles", slug: "autonomous-vehicles" },
  { name: "Cybersecurity", slug: "cybersecurity" },
  { name: "Job Markets", slug: "job-markets" },
  { name: "Sustainable Tech", slug: "sustainable-tech" },
];

export default function Categories() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Categories</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <li key={category.slug} className="bg-white p-4 rounded shadow">
            <Link href={`/category/${category.slug}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                {category.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
