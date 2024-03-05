export interface CardProps {
  id: number;
  logo: string;
  company: string;
  role: string;
  position: string;
  new: boolean;
  featured: boolean;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface productProps {
  product: CardProps;
}

export interface FetchResult {
  data: CardProps[];
  loading: boolean;
  error: string | null;
}

export interface SpanTextProps {
  bgColor: string;
  product: boolean;
  title: string;
}
