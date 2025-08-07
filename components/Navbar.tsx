import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-dark">
              10ms Assessment
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <p>locale</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
