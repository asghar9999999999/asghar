import Link from "next/link";

const Navbar = () => (
  <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
    <div className="flex items-center">
      <img
        src="/images/logo.png" // Place your logo in /public/images/
        alt="Logo"
        className="h-10 w-10 rounded-full mr-3"
      />
      <span className="text-2xl font-bold">Dynamic Blog</span>
    </div>
    <ul className="flex space-x-6">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
      <li>
        <Link href="/category">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
