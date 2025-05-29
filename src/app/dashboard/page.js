import ProductsDashboard from '@/components/Dashboard/Products/ProductsDashboard';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex gap-10">
      <ProductsDashboard />
      <aside id="default-sidebar" className="w-64 h-screen " aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2 font-medium">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3">Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                  </svg>
                  <span className="ml-3">Logout</span>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </aside>
    </div>
  );
}
