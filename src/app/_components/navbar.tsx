import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-5 text-white shadow-lg">
      <span className="flex items-baseline space-x-6">
        <h1 className="text-2xl font-bold">Ankit Nayan</h1>
        <Link
          href={"/blogs"}
          className="rounded-lg bg-gray-900 p-1 text-lg font-[600] hover:text-blue-500"
        >
          Blogs
        </Link>
      </span>
      <div className="space-x-6">
        <Link href="/#about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/#skills" className="hover:text-blue-400">
          Skills
        </Link>
        <Link href="/#experience" className="hover:text-blue-400">
          Experience
        </Link>
        <Link href="/#projects" className="hover:text-blue-400">
          Projects
        </Link>
        <Link href="/#coding" className="hover:text-blue-400">
          Coding Platforms
        </Link>
        <Link href="/#contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
