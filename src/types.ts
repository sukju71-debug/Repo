export type CategoryType = 
  | 'ALL'
  | 'FARMER' // 농가 상생
  | 'EXPORTS' // K-Food 세계로
  | 'SEASONAL' // 제철 먹거리
  | 'ECO_SMART' // 친환경·스마트팜
  | 'NEWS'; // 공사 소식

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  categoryLabel: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTimeMinutes: number;
  coverImage: string;
  summary: string;
  content: {
    sections: {
      heading?: string;
      paragraphs: string[];
      quote?: string;
      quoteAuthor?: string;
      image?: string;
      imageCaption?: string;
    }[];
    keyTakeaways?: string[];
    tags: string[];
  };
  viewCount: number;
  likeCount: number;
  featured?: boolean;
}

export interface ProduceItem {
  id: string;
  name: string;
  subName: string;
  region: string;
  seasonMonths: string[];
  category: '과일' | '채소' | '곡류' | '차·음료' | '수산·임산물';
  image: string;
  description: string;
  flavorProfile: string[];
  nutritionHighlights: string[];
  farmerStory: string;
  certification: string;
  exportDestinations: string[];
  isFeatured?: boolean;
}

export interface SeasonalMonthData {
  month: number;
  monthName: string;
  title: string;
  description: string;
  heroImage: string;
  topItems: {
    name: string;
    category: string;
    region: string;
    desc: string;
    icon: string;
  }[];
}

export interface FarmerStory {
  id: string;
  farmName: string;
  farmerName: string;
  location: string;
  produceName: string;
  quote: string;
  fullStory: string;
  image: string;
  impactMetric: string;
  impactLabel: string;
}

export interface FilterState {
  category: CategoryType;
  searchQuery: string;
  selectedTag: string | null;
  sortBy: 'latest' | 'popular' | 'views';
}

export interface ReaderSettings {
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  fontFamily: 'serif' | 'sans';
  theme: 'light' | 'sepia' | 'dark';
}

export type TargetCategoryType = 'ALL' | '농어업인' | '식품기업' | '수출기업' | '유통기업' | '외식기업';

export interface SupportProject {
  id: string;
  title: string;
  summary: string;
  targetCategory: TargetCategoryType;
  targetAudience: string;
  applicationPeriod: string;
  status: '접수중' | '마감임박' | '상시접수' | '접수마감';
  department: string;
  budgetOrBenefit: string;
  details: string[];
}

export interface PriceData {
  id: string;
  item: string;
  price: string;
  unit: string;
  change: string;
  isUp: boolean;
  category: string;
  marketTrend: string;
}

export interface NewsNotice {
  id: string;
  category: '공지사항' | '사업공고' | '보도자료' | '채용';
  title: string;
  date: string;
  department: string;
  isUrgent?: boolean;
  summary?: string;
}

