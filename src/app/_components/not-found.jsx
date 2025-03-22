import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-center text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4 h-8 w-8"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link className="mt-3 rounded-xl bg-gray-800 p-3" href={"/"}>
        Back to home
      </Link>
    </div>
  );
}
