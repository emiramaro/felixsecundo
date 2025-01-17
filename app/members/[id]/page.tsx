import { members } from '@/data/members'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from 'lucide-react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MemberPage({ params }: { params: { id: string } }) {
  const member = members.find(m => m.id === params.id)
  
  if (!member) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 flex-shrink-0 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full"> {/* Updated div */}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-600 hover:text-primary w-full"> {/* Updated link */}
                        <Mail size={18} />
                        <span>{member.email}</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-primary w-full"> {/* Updated link */}
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
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

      <Footer />
    </div>
  )
}

