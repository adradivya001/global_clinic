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

export interface MachineProcedureStep {
  step: string;
  title: string;
  desc?: string;
}

export interface ClinicMachine {
  id: string;
  number: string;
  name: string;
  category: 'Gait & Cardio' | 'Strength & Conditioning' | 'Spine & Joint' | 'Balance & Core' | 'Electro & Thermal' | 'Specialized Interventions';
  tagline: string;
  shortIntro: string;
  whatItDoes: string;
  howItWorks: string;
  procedure: MachineProcedureStep[];
  conditions: string[];
  patientExperience: string;
  benefits: string[];
  sessionInfo: string;
  safety: string;
  afterCare: string;
  ctaText: string;
  iconType: string;
  badge?: string;
  image: string;
}

export interface ClinicServiceStep {
  step: string;
  title: string;
  desc?: string;
}

export interface ClinicService {
  id: string;
  number: string;
  name: string;
  badge: string;
  shortIntro: string;
  whatItInvolves: string;
  howRehabWorks: string;
  procedurePathway: ClinicServiceStep[];
  conditionsAddressed: string[];
  patientExperience: string;
  potentialBenefits: string[];
  sessionInfo: string;
  safetyConsiderations: string;
  afterRehabGuidance: string;
  ctaText: string;
  iconType: string;
  image: string;
  tagline?: string;
  overview?: string;
  keyConditions?: string[];
  treatmentApproach?: string[];
  equipmentUsed?: string[];
  clinicalOutcomes?: string[];
}
