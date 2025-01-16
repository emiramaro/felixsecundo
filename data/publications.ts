import { Publication } from '@/types'

export async function getPublications(): Promise<Publication[]> {
  try {
    const response = await fetch('/api/publications')
    if (!response.ok) {
      throw new Error('Failed to fetch publications')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching publications:', error)
    return []
  }
}

