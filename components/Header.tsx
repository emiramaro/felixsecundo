import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 12C6 9 7 7 10 7C13 7 14 9 14 12C14 15 13 17 10 17C7 17 6 15 6 12Z" />
            <path d="M14 12C14 9 15 7 18 7C21 7 22 9 22 12" />
            <circle cx="8" cy="8" r="3" />
            <line x1="11" y1="11" x2="15" y2="15" />
          </svg>
          <span className="ml-2 text-xl font-semibold">Felix Lab</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/#about" className="text-gray-600 hover:text-primary">About</Link></li>
            <li><Link href="/#members" className="text-gray-600 hover:text-primary">People</Link></li>
            <li><Link href="/#research" className="text-gray-600 hover:text-primary">Research</Link></li>
            <li><Link href="/#publications" className="text-gray-600 hover:text-primary">Publications</Link></li>
            <li><Link href="/#join" className="text-gray-600 hover:text-primary">Join Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

