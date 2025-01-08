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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Felix Lab</p>
              <p>123 Research Avenue</p>
              <p>Baltimore, MD 21201</p>
              <p>Email: info@felixlab.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/#about" className="hover:text-primary-foreground">About Us</Link></li>
                <li><Link href="/#research" className="hover:text-primary-foreground">Research</Link></li>
                <li><Link href="/#publications" className="hover:text-primary-foreground">Publications</Link></li>
                <li><Link href="/#members" className="hover:text-primary-foreground">Our Team</Link></li>
                <li><Link href="/#join" className="hover:text-primary-foreground">Join Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-foreground">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="hover:text-primary-foreground">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 Felix Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

