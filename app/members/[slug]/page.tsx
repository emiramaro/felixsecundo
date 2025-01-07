import { members } from '@/data/members'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function MemberPage({ params }: { params: { slug: string } }) {
  // Find the member using the slug from the URL
  const member = members.find(m => m.slug === params.slug)
  
  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative w-48 h-48 flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                <ul className="list-disc list-inside mb-6">
                  {member.education.map((edu, index) => (
                    <li key={index} className="text-gray-600">{edu}</li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold mb-2">Research Interests</h2>
                <ul className="list-disc list-inside">
                  {member.research.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

