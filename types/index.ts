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
    id: string;
    title: string | { sup: string; '#text': string };
    authors: string;
    journal: string;
    year: string;
    url: string;
  }
  
  