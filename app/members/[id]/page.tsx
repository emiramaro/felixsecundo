import { members } from '@/data/members'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Linkedin, Facebook } from 'lucide-react'

export default function MemberPage({ params }: { params: { id: string } }) {
  const member = members.find(m => m.id === params.id)
  
  if (!member) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
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
                {/* Simplified pancreas shape */}
                <path d="M6 12C6 9 7 7 10 7C13 7 14 9 14 12C14 15 13 17 10 17C7 17 6 15 6 12Z" />
                <path d="M14 12C14 9 15 7 18 7C21 7 22 9 22 12" />

                {/* Magnifying glass */}
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

      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-48 h-48 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
                  <p className="text-xl text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-justify">{member.bio}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/#members">
              <Button variant="outline">Back to Team</Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Felix Lab</h3>
              <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
                Advancing pancreatic cancer research through innovative approaches and collaborative efforts.
              </p>
            </div>
            <div className="text-center w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-400">601 N. Caroline St, JHOC 3250</p>
              <p className="text-sm text-gray-400">Baltimore, MD 21287</p>
              <p className="text-sm text-gray-400 mt-2">info@felixlab.org</p>
              <p className="text-sm text-gray-400">(123) 456-7890</p>
            </div>
            <div className="text-center md:text-right w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Felix Lab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

