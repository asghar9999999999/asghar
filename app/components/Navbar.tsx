import Link from "next/link";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      <img src="/log.png" alt="Logo" className="h-12 w-12 rounded-full mr-3" />
      <h1 className="text-2xl font-bold">Technolgy FAB</h1>
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
