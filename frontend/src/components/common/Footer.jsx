import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16 sm:mt-24 lg:mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 xl:gap-12">
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <svg
                className="h-7 w-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold text-lg">ReactDo</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Designed and built with all the love in the world by the yerazh
              team with the help of our contributors
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Figma
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Guides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Getting started
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Creating todo
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Editing notes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Projects
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  ReactDo
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Ecoblago
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  GameHub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Issues
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Discussions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Stack overflow
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
