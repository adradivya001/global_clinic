export interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Condition {
  id: string;
  name: string;
  title: string;
  concerns: string[];
  helpPoints: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  condition: string;
  rating: number;
}

export interface DoctorInfo {
  name: string;
  title: string;
  credentials: string[];
  quote: string;
  features: string[];
}
