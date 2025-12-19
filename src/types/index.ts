export interface Service {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  icon: string;
  order_index: number;
  created_at: string;
}

export interface Mandate {
  id: string;
  title: string;
  description: string;
  sector: string;
  deal_type: string;
  deal_size: string;
  status: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_role: string;
  content: string;
  rating: number;
  featured: boolean;
  created_at: string;
}

export interface TrustedCompany {
  id: string;
  name: string;
  logo_url: string;
  order_index: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  submission_type?: string;
  portfolio_item?: string;
}
