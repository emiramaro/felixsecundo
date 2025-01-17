'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Linkedin, Facebook } from 'lucide-react'
import { PublicationsList } from '@/components/publications-list'
import { AlumniCarousel } from '@/components/AlumniCarousel'
import { MemberCard } from '@/components/MemberCard'
import { ResearchProjectCarousel } from '@/components/ResearchProjectCarousel'
import { SupportedBy } from '@/components/SupportedBy'
import { researchProjects } from '@/data/research'
import { members } from '@/data/members'
// import { publications } from '@/data/publications'
import { useEffect, useState } from 'react'
import about from '../public/assets/images/about.png'

export default function Home() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsHeaderFixed(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentMembers = members.filter(member => !member.alumni)
  const alumniMembers = members.filter(member => member.alumni)

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`bg-white shadow-sm transition-all duration-300 ${isHeaderFixed ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
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

      <main className={`flex-grow ${isHeaderFixed ? 'pt-16' : ''}`}>
        <section className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-8xl font-bold mb-4">Advancing Pancreatic Cancer Research</h1>
                <p className="text-xl mb-8">Pioneering approaches in early detection of pancreatic cancer.</p>
                {/* <Button variant="secondary" size="lg">
                  Learn More
                </Button> */}
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/assets/videos/pancreas.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative h-0 pb-[56.25%]">
                <Image 
                  src={about} 
                  alt="About Felix Lab" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative h-0 pb-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/Ls3WOE9dhOQ?start=0"
                  title="Felix Lab Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-sans">Our Mission</h3>
                <p className="text-gray-600 text-justify font-sans">
                  At Felix lab, we are dedicated to unraveling the complexities of pancreatic cancer through cutting-edge research and collaborative efforts. Our mission is to improve early detection and ultimately patient outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 font-sans">Our Approach</h3>
                <p className="text-gray-600 text-justify font-sans">
                  We employ a multidisciplinary approach, combining clinical features, genetics, and advanced imaging techniques to study pancreatic cancer. Our team of expert researchers works to translate laboratory findings into clinical applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Research & Tools</h2>
            <ResearchProjectCarousel projects={researchProjects} />
          </div>
        </section>

        <section id="publications" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
            <PublicationsList />
          </div>
        </section>

        <section id="members" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentMembers.map((member) => (
                <Link 
                  href={`/members/${member.id}`} 
                  key={member.id}
                  className="block transition-transform hover:scale-105"
                >
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image 
                        src={member.image || "/placeholder.svg"} 
                        alt={member.name} 
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
                    <p className="text-gray-600 text-center">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="members" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {currentMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section> */}

        <section id="alumni" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Alumni</h2>
            <AlumniCarousel alumni={alumniMembers} />
          </div>
        </section>
        
        <SupportedBy />

        <section id="join" className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Collaboration</h2>
            <p className="text-xl mb-8">
              We're always looking for passionate researchers to join our fight against pancreatic cancer.
            </p>
            <Button variant="secondary" size="lg" as="a" href="mailto:ablanco5@jhmi.edu">
              Get in Touch
            </Button>
          </div>
        </section>
           
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
                {/* <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook size={24} />
                </a> */}
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
