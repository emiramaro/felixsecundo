export type Member = {
    name: string;
    role: string;
    image: string;
    id: string;
    alumni?: boolean;
    bio: string;
    education: string[];
    research: string[];
  }
  
  export type Publication = {
    id: number;
    title: string;
    authors: string;
    journal: string;
    year: number;
    url: string;
  }
  
  