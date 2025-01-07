export type Member = {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    education: string[];
    research: string[];
    slug: string;
  }
  
  export type Publication = {
    id: number;
    title: string;
    authors: string;
    journal: string;
    year: number;
    url: string;
  }
  
  