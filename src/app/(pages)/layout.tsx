import Navbar from "../_components/navbar";

export default function PagesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-[100vh] w-full bg-gray-900">
      <Navbar />
      {children}
    </div>
  );
}
