import businessData from '../content/business.json';

export interface BusinessData {
  name: string;
  location: string;
  phone: string;
  phoneVerified: boolean;
  facebookUrl: string;
  tagline: string;
  services: string[];
  pricing: {
    label: string;
    from: number;
    currency: string;
    note: string;
  }[];
}

export const useBusiness = (): BusinessData => {
  return businessData as BusinessData;
}; 