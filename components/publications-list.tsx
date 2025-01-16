'use client'

import { Publication } from '@/types'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import { getPublications } from '@/data/publications'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

const renderTitle = (title: string | { sup: string; '#text': string }) => {
  if (typeof title === 'string') {
    return title;
  }
  return (
    <>
      {title['#text']}
      <sup>{title.sup}</sup>
    </>
  );
};

export function PublicationsList() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    async function loadPublications() {
      try {
        setLoading(true)
        setError(null)
        const fetchedPublications = await getPublications()
        setPublications(fetchedPublications)
      } catch (err) {
        console.error('Error loading publications:', err)
        setError('Failed to load publications. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    loadPublications()
  }, [])

  const totalPages = Math.ceil(publications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPublications = publications.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  if (loading) {
    return <div className="text-center">Loading publications...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  if (publications.length === 0) {
    return <div className="text-center">No publications found.</div>
  }

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
                {renderTitle(pub.title)}
              </h3>
              <p className="text-gray-600">{pub.authors}</p>
              <p className="text-gray-600">{pub.journal} ({pub.year})</p>
            </a>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            title="First Page"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            title="Previous Page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {[currentPage - 1, currentPage, currentPage + 1].map((page) => {
            if (page > 0 && page <= totalPages) {
              return (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </Button>
              )
            }
            return null
          })}
          <Button
            variant="outline"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            title="Next Page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            title="Last Page"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

