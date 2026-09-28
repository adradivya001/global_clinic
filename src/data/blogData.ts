export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  topic: string;
  description: string;
  contentSnippet?: string;
  date: string;
  readingTime: string;
  image: string;
  featured?: boolean;
}

export const BLOG_TOPICS = [
  'All',
  'Physiotherapy',
  'Pain Management',
  'Sports Rehabilitation',
  'Posture',
  'Mobility',
  'Injury Prevention',
] as const;

export type BlogTopic = typeof BLOG_TOPICS[number];

export const FEATURED_ARTICLE: BlogArticle = {
  id: 'feat-1',
  slug: 'understanding-back-pain-modern-physiotherapy',
  title: 'Understanding Back Pain & Modern Physiotherapy Approaches',
  category: 'Spine Care',
  topic: 'Pain Management',
  description:
    'Discover how targeted movement therapy treats lower back distress at its mechanical root rather than temporarily masking symptoms.',
  contentSnippet:
    'Lower back discomfort is among the most frequent reasons people seek physical therapy. Understanding spinal kinematics, core stabilization, and gradual loading helps restore functional mobility and lasting confidence.',
  date: 'September 2026',
  readingTime: '4 min read',
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  featured: true,
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'art-1',
    slug: 'understanding-common-causes-back-pain',
    title: 'Understanding Common Causes of Back Pain',
    category: 'Spine Health',
    topic: 'Pain Management',
    description:
      'A practical breakdown of postural strain, disc mechanics, and how guided physical rehabilitation addresses root spinal imbalances.',
    date: 'Sep 2026',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-2',
    slug: 'when-should-you-consider-physiotherapy',
    title: 'When Should You Consider Physiotherapy?',
    category: 'Clinical Guidance',
    topic: 'Physiotherapy',
    description:
      'Key signs that indicate persistent joint stiffness, recurring aches, or movement limitations will benefit from clinical assessment.',
    date: 'Aug 2026',
    readingTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-3',
    slug: 'simple-ways-to-improve-daily-posture',
    title: 'Simple Ways to Improve Daily Posture',
    category: 'Ergonomics',
    topic: 'Posture',
    description:
      'Actionable micro-adjustments for desk workers to minimize cervical strain, shoulder fatigue, and lumbar compression throughout the day.',
    date: 'Aug 2026',
    readingTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-4',
    slug: 'understanding-knee-rehabilitation',
    title: 'Understanding Knee Rehabilitation',
    category: 'Joint Health',
    topic: 'Mobility',
    description:
      'How muscular balance, patellofemoral tracking, and progressive joint offloading restore confidence and stability in the knee joint.',
    date: 'Jul 2026',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-5',
    slug: 'returning-to-activity-after-injury',
    title: 'Returning to Activity After an Injury',
    category: 'Athletic Care',
    topic: 'Sports Rehabilitation',
    description:
      'Why structured rehabilitation milestones and progressive load management are essential for a safe, sustainable return to sports.',
    date: 'Jul 2026',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'art-6',
    slug: 'why-strength-matters-in-rehabilitation',
    title: 'Why Strength Matters in Rehabilitation',
    category: 'Movement Science',
    topic: 'Injury Prevention',
    description:
      'Exploring how targeted muscle strengthening protects recovering joints, enhances tendon resiliency, and prevents re-injury.',
    date: 'Jun 2026',
    readingTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
];
