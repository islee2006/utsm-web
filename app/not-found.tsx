import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="text-9xl font-black text-white/5 mb-4 leading-none">404</div>
      <h1 className="text-3xl font-black text-white mb-4 -mt-8">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold tracking-widest rounded-lg transition-colors"
      >
        BACK TO HOME
      </Link>
    </div>
  );
}
