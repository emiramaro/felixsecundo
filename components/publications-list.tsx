'use client'

import { Publication } from '@/types'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface PublicationsListProps {
  publications: Publication[]
}

export function PublicationsList({ publications }: PublicationsListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(publications.length / itemsPerPage)
  
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPublications = publications.slice(startIndex, endIndex)

  return (
    <div>
      <div className="space-y-4">
        {currentPublications.map((pub) => (
          <div key={pub.id} className="border-b pb-4">
            <a 
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary hover:text-primary/80">
                {pub.title}
              </h3>
              <p className="text-gray-600">{pub.authors}</p>
              <p className="text-gray-600">{pub.journal} ({pub.year})</p>
            </a>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <div className="flex items-center px-4">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

