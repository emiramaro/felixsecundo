import { members } from '@/data/members'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Linkedin, Facebook } from 'lucide-react'
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
                <div className="relative w-48 h-48 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
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

      <Footer />
    </div>
  )
}

