import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <video autoPlay loop muted className="w-full h-[500px] object-cover">
          <source src="/videos/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Dynamic Blog</h1>
          <p className="text-xl mb-6">
            Explore the latest tech trends and insights.
          </p>
          <Link href="/posts">
            <button className="bg-blue-500 px-6 py-3 rounded text-white font-semibold hover:bg-blue-600">
              Read Our Blogs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
