export type Member = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  phone?: string;
  alumni?: boolean;
  linkedin?: string;
  facebook?: string;
};
  
export type Publication = {
  id: string;
  title: string | { sup: string; '#text': string };
  authors: string;
  journal: string;
  year: string;
  url: string;
}

export type ResearchProject = {
  id: string;
  title: string;
  description: string;
  details: string;
  images: string[];
};
  