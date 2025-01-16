import { NextResponse } from 'next/server'
import { XMLParser } from 'fast-xml-parser'

const parser = new XMLParser()

const labMembers = [
  'Crawford CK',
  'Yasrab M',
  'Rizk RC',
  'Ahmed TM',
  'Blanco A',
  'Tixier F',
  'Lopez-Ramirez F',
  'Syailendra EA',
  'Arshad H'
]

async function searchPubMed(query: string) {
  const baseUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'
  const searchUrl = `${baseUrl}esearch.fcgi?db=pubmed&term=${encodeURIComponent(query)}&retmax=100&sort=date`

  const response = await fetch(searchUrl)
  const data = await response.text()
  const result = parser.parse(data)

  return result.eSearchResult.IdList.Id
}

async function fetchPublicationDetails(ids: string[]) {
  const baseUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'
  const fetchUrl = `${baseUrl}efetch.fcgi?db=pubmed&id=${ids.join(',')}&retmode=xml`

  const response = await fetch(fetchUrl)
  const data = await response.text()
  const result = parser.parse(data)

  return result.PubmedArticleSet.PubmedArticle.map((article: any) => {
    const citation = article.MedlineCitation;
    const articleInfo = citation.Article;
    const pmid = citation.PMID['#text'] || citation.PMID; // Handle both object and direct value cases
    
    return {
      id: pmid,
      title: typeof articleInfo.ArticleTitle === 'string' 
        ? articleInfo.ArticleTitle 
        : { sup: articleInfo.ArticleTitle.sup, '#text': articleInfo.ArticleTitle['#text'] },
      authors: Array.isArray(articleInfo.AuthorList.Author)
        ? articleInfo.AuthorList.Author.map((author: any) => 
            `${author.LastName} ${author.Initials}`
          ).join(', ')
        : `${articleInfo.AuthorList.Author.LastName} ${articleInfo.AuthorList.Author.Initials}`,
      journal: articleInfo.Journal.Title,
      year: articleInfo.Journal.JournalIssue.PubDate.Year,
      url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`
    }
  })
}

let cachedPublications: any[] | null = null
let lastFetchTime: number | null = null
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

export async function GET() {
  try {
    // Check if we have cached data that's still valid
    if (cachedPublications && lastFetchTime && Date.now() - lastFetchTime < CACHE_DURATION) {
      return NextResponse.json(cachedPublications)
    }

    const query = `(${labMembers.map(member => `${member}[Author]`).join(' OR ')}) AND (Fishman EK[Author])`
 
    const ids = await searchPubMed(query)
    const publications = await fetchPublicationDetails(ids)
    
    // Update cache
    cachedPublications = publications
    lastFetchTime = Date.now()

    return NextResponse.json(publications)
  } catch (error) {
    console.error('Error fetching publications:', error)
    return NextResponse.json({ error: 'Failed to fetch publications' }, { status: 500 })
  }
}

