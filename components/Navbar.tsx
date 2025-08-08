'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split('/')[1];
  const otherLang = currentLang === 'en' ? 'bn' : 'en';

  const switchLanguage = () => {
    router.push(pathname.replace(`/${currentLang}`, `/${otherLang}`));
  };
  return (
    <nav className="fixed z-40 w-full border-b border-gray-300 bg-white dark:border-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-dark">
              10ms Assessment
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button onClick={switchLanguage} className="bg-green-600 p-1 text-white-600 cursor-pointer">
              {otherLang.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
