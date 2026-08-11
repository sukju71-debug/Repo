import { BlogPost, ProduceItem, SeasonalMonthData, FarmerStory, SupportProject, PriceData, NewsNotice } from '../types';

// Images from generated assets & curated high-res imagery
export const ASSETS = {
  heroFarm: '/src/assets/images/at_headquarters_hero_1786430556099.jpg',
  atHeadquarters: '/src/assets/images/at_headquarters_hero_1786430556099.jpg',
  atLogo: '/src/assets/images/at_official_logo_1786430575484.jpg',
  heroHarvest: '/src/assets/images/hero_kfood_harvest_1786426318968.jpg',
  blogFarmer: '/src/assets/images/blog_farmer_story_1786426333800.jpg',
  greenTea: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
  farmSunset: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  pears: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
  smartFarm: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
  koreanFood: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
  persimmon: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=1000&q=80',
  riceField: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=1200&q=80',
  berries: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1000&q=80',
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: '제주 한라산 자락의 아침 안개를 머금은 유기농 녹차와 농부의 30년 고집',
    subtitle: 'aT 유기농 우수 농가 탐방 시리즈 01: 흙과 바람, 시간이 만드는 명품 K-Tea',
    category: 'FARMER',
    categoryLabel: '농가 상생 이야기',
    author: {
      name: '김서연 에디터',
      role: 'aT 농식품 문화 스토리텔러',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026.08.05',
    readTimeMinutes: 6,
    coverImage: ASSETS.heroFarm,
    summary: '맑은 제주 바람과 비옥한 현무암 토양에서 농약 한 방울 없이 키워낸 100% 유기농 녹차밭. 한국농수산식품유통공사(aT)의 친환경 농가 지원과 유기인증 판로 개척이 빚어낸 따뜻한 결실을 전합니다.',
    viewCount: 3420,
    likeCount: 289,
    featured: true,
    content: {
      tags: ['#유기농녹차', '#제주농가', '#농가상생', '#aT친환경지원', '#오설록감성'],
      keyTakeaways: [
        '제주 차밭 농가의 30년 유기농 순수 재배 노하우와 자연 농법',
        'aT 친환경 농산물 인증 및 국내외 유통 판로 확대 프로젝트',
        '유럽·북미 프리미엄 음료 시장으로 뻗어 나가는 한국 전통 차(Tea)의 가치'
      ],
      sections: [
        {
          heading: '01. 흙과 자연의 소리에 귀 기울이는 아침',
          paragraphs: [
            '새벽 6시, 한라산 중산간 해발 350미터 지대에 위치한 서귀포 차밭은 짙은 안개로 둘러싸여 있습니다. 찻잎 표면에 방울방울 맺힌 이슬은 해가 뜨며 부드럽게 스며들어 차 특유의 감칠맛과 깊은 옥로 향을 만들어냅니다.',
            '이곳의 강성민 농부(62)는 30년 전 처음 차나무를 심었을 때의 다짐을 기억합니다. "화학비료나 농약을 치면 손쉽게 찻잎을 낼 수 있지만, 흙이 숨을 쉬지 못합니다. 짚을 덮고 콩을 심어 흙 스스로 영양을 얻게 하는 자연 순환 농법만이 진짜 명품 차를 만듭니다."'
          ],
          quote: '자연이 주는 속도대로 기다릴 때, 비로소 마음을 울리는 깊은 차 향이 피어납니다.',
          quoteAuthor: '제주 유기농 차밭 강성민 농부'
        },
        {
          heading: '02. aT와의 만남: 시골 차밭에서 세계적인 명품 브랜딩으로',
          paragraphs: [
            '소규모 농가가 가진 가장 큰 애로는 바로 판로 확보와 브랜딩이었습니다. 좋은 차를 만들어도 시중의 가공 차와 가격 경쟁에서 밀리기 일쑤였습니다.',
            '한국농수산식품유통공사(aT)는 2021년부터 친환경 농가 상생 프로젝트의 일환으로 이 차밭에 품질 인증 컨설팅, 패키지 디자인 지원, 그리고 국내 주요 프리미엄 브랜드 및 해외 바이어 매칭 사업을 제공했습니다.'
          ],
          image: ASSETS.blogFarmer,
          imageCaption: '정성껏 채취한 첫물 차(우전)를 들고 웃음 짓는 농부의 모습'
        },
        {
          heading: '03. K-Tea, 글로벌 프리미엄 라이프스타일 시장을 매료시키다',
          paragraphs: [
            'aT의 수출 직거래 파트너십을 통해 이 제주 유기농 녹차는 프랑스 파리와 미국 뉴욕의 하이엔드 티 룸에 정식 입점했습니다. 씁쓸함 대신 부드러운 고소함과 맑은 향이 돋보인다는 평가를 받았습니다.',
            'aT는 앞으로도 전국 5만 여 친환경 농업인들이 땀 흘려 가꾼 결실이 정당한 가치를 평가받고, 농가 소득 증대로 이어지도록 다각도의 상생 플랫폼을 지속 확충할 계획입니다.'
          ]
        }
      ]
    }
  },
  {
    id: 'post-2',
    title: '세계인의 입맛을 사로잡은 K-Food 수출 100억 달러의 비밀',
    subtitle: '신선 배부터 K-라면, 유기농 김까지: 한국 농식품의 글로벌 성공 방정식',
    category: 'EXPORTS',
    categoryLabel: 'K-Food 세계로',
    author: {
      name: '박현우 연구원',
      role: 'aT 해외시장진흥처',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026.08.02',
    readTimeMinutes: 5,
    coverImage: ASSETS.heroHarvest,
    summary: '나주 배의 아삭함과 완도 김의 바삭함이 미국, 유럽, 동남아 식탁 위에 오른 이야기. aT의 콜드체인 물류망과 현지 맞춤형 마케팅 지원이 만든 K-Food 물결을 분석합니다.',
    viewCount: 2890,
    likeCount: 215,
    content: {
      tags: ['#KFood수출', '#aT해외지원', '#신선농산물', '#나주배', '#글로벌K푸드'],
      keyTakeaways: [
        '농식품 수출 전용 선박 및 콜드체인 물류망 확충으로 신선도 유지',
        '세계 주요 국가 K-Food 페어 및 현지 유통망 직접 입점 지원',
        '농어민 수취 가격 상승으로 이어진 수출 선순환 구조 구축'
      ],
      sections: [
        {
          heading: '01. 바다 건너서도 갓 따낸 신선함 그대로',
          paragraphs: [
            '한국산 신선 배와 딸기는 당도와 아삭한 식감으로 해외 바이어들에게 독보적인 인기를 얻고 있습니다. 그러나 신선 농산물의 해외 수출에는 온·습도 관리가 필수적입니다.',
            'aT는 국적 선사와 협력하여 신선농산물 전용 스마트 컨테이너 및 전 세계 주요 거점 콜드체인 물류 센터를 대폭 지원하고 있습니다. 덕분에 미국 캘리포니아 대형 마트에서도 한국 나주 과수원에서 막 수확한 듯한 청량감을 맛볼 수 있게 되었습니다.'
          ]
        },
        {
          heading: '02. K-Culture와 K-Food의 아름다운 만남',
          paragraphs: [
            'K-Pop과 드라마 등 한류 문화 확산에 발맞추어, aT는 글로벌 소비자가 한국 식재료를 직관적으로 요리할 수 있도록 레시피 영상과 숏폼 콘텐츠를 제작 지원했습니다.',
            '단순한 제품 판매를 넘어 한국의 식문화와 자연 친화적인 웰빙 스토리를 전달하는 것이 K-Food 지속 성장의 핵심 동력입니다.'
          ]
        }
      ]
    }
  },
  {
    id: 'post-3',
    title: '8월에 가장 빛나는 절기 먹거리: 청청 포도와 자색 고구마 가이드',
    subtitle: '자연의 시간표대로 섭취하는 우리 땅 제철 농산물의 영양과 요리법',
    category: 'SEASONAL',
    categoryLabel: '제철 먹거리 가이드',
    author: {
      name: '이수진 푸드스타일리스트',
      role: 'aT 제철농산물 자문위원',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026.07.28',
    readTimeMinutes: 4,
    coverImage: ASSETS.berries,
    summary: '늦여름의 강렬한 햇살을 받아 당도가 최대로 오른 샤인머스캣, 상주 샤인포도, 그리고 안토시아닌이 풍부한 해남 자색고구마. 8월 제철 농산물의 효능과 맛있는 음용법을 조명합니다.',
    viewCount: 4120,
    likeCount: 340,
    content: {
      tags: ['#제철농산물', '#8월먹거리', '#샤인머스캣', '#자색고구마', '#건강식단'],
      keyTakeaways: [
        '절기별 영양이 가장 뛰어난 제철 식재료 선택 기준',
        '지역별 특산지(상주, 해남, 영천) 농가의 자부심',
        '온 가족이 함께 즐기는 웰빙 여름 음료 및 디저트 레시피'
      ],
      sections: [
        {
          heading: '01. 햇살을 듬뿍 받은 포도의 달콤함',
          paragraphs: [
            '8월은 태양의 에너지가 결실을 맺는 시기입니다. 밭에서 바로 수확한 영천과 상주 포도는 껍질째 먹어도 안전한 친환경 농법으로 재배되어 유기산과 앤토시아닌이 듬뿍 함유되어 있습니다.',
            'aT 알뜰장터 및 제철 유통망을 통해 소비자는 중간 유통 거품 없이 싱싱한 포도를 만나고, 농가는 제값 받는 공정 거래가 이루어집니다.'
          ]
        }
      ]
    }
  },
  {
    id: 'post-4',
    title: '스마트팜과 AI 기술이 바꾼 청년 농부의 내일',
    subtitle: '지속 가능한 농업을 향한 aT의 미래 농업 육성 프로젝트',
    category: 'ECO_SMART',
    categoryLabel: '친환경·스마트팜',
    author: {
      name: '최민기 팀장',
      role: 'aT 스마트농식품사업처',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026.07.19',
    readTimeMinutes: 5,
    coverImage: ASSETS.smartFarm,
    summary: '기후 변화 시대, 온도와 습도·영양분을 센서로 자동 제어하는 유리온실 스마트팜. 30대 청년 농부들이 스마트 농업으로 연 매출 5억 원을 달성한 혁신 사례를 들려드립니다.',
    viewCount: 1980,
    likeCount: 172,
    content: {
      tags: ['#스마트팜', '#청년농부', '#지속가능농업', '#aT미래농업', '#기술혁신'],
      keyTakeaways: [
        '데이터 기반 기후 예측 및 정밀 영양 공급 기술',
        'aT의 청년창농 펀드 및 종합 멘토링 프로그램',
        '농업을 미래 신성장 고부가가치 산업으로 전환하는 실천'
      ],
      sections: [
        {
          heading: '01. 흙을 사랑하는 청년들이 들고 선 최첨단 태블릿',
          paragraphs: [
            '전북 김제의 한 스마트 온실. 청년 농부 정성훈 씨는 태블릿 PC 화면을 터치해 1km 떨어진 온실의 천장을 열고 햇빛 유입량을 조정합니다.',
            'aT는 청년 농업인의 안정적인 정착을 위해 시설 자금 융자, 유통망 연결, R&D 컨설팅을 다각도로 지원하고 있습니다.'
          ]
        }
      ]
    }
  },
  {
    id: 'post-5',
    title: '2026 aT 농어민 소득 증대 종합 지원계획 발표',
    subtitle: '직거래 유통채널 30% 확대, 농가 수취가격 보장 및 농수산식품 판로 개혁',
    category: 'NEWS',
    categoryLabel: '공사 소식',
    author: {
      name: 'aT 홍보실',
      role: '한국농수산식품유통공사',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026.07.10',
    readTimeMinutes: 3,
    coverImage: ASSETS.riceField,
    summary: '한국농수산식품유통공사가 2026년 하반기 농어민 실질 소득 제고와 식량 안보 강화를 위한 5대 중점 추진 과제를 공개했습니다.',
    viewCount: 1540,
    likeCount: 120,
    content: {
      tags: ['#aT공시', '#농가소득증대', '#공공기관사업', '#식량안보', '#농산물유통'],
      keyTakeaways: [
        '소상공인-농가 직거래 온라인 공공도매시장 대폭 확대',
        '기후 위기 대응 주요 식량 작물 정부 비축 확대',
        '농가 맞춤형 판로 지원 센터 전국 10개 거점 운영'
      ],
      sections: [
        {
          heading: '01. 농어민이 흘린 땀방울이 온전한 가치로',
          paragraphs: [
            '한국농수산식품유통공사는 농어민의 소득증대와 농식품산업을 진흥시키기 위해 설립된 공공기관으로서, 유통 구조 단순화와 수급 안정을 도모합니다.',
            '온라인 도매시장 활성화를 통해 수수료를 줄이고, 절감된 비용이 농가 수취가 상승 및 소비자 가격 안정으로 되돌아가도록 전면 개편합니다.'
          ]
        }
      ]
    }
  }
];

export const PRODUCE_ITEMS: ProduceItem[] = [
  {
    id: 'prod-1',
    name: '제주 유기농 녹차 & 동백 우전',
    subName: 'Jeju Organic Green Tea & Camellia',
    region: '제주 특별자치도 서귀포시',
    seasonMonths: ['5월', '6월', '8월'],
    category: '차·음료',
    image: ASSETS.greenTea,
    description: '한라산의 은은한 아침 안개와 현무암 암반수를 마시고 자란 어린 찻잎을 엄선하여 만든 명품 우전 녹차입니다. 떫지 않고 맑은 감칠맛이 독보적입니다.',
    flavorProfile: ['맑은 옥로향', '고소한 은은함', '부드러운 목넘김', '은은한 단맛'],
    nutritionHighlights: ['카테킨 150mg', '비타민 C', '테아닌 성분', '항산화 효과'],
    farmerStory: '서귀포 차밭 30년 경력 강성민 농부의 유기농 순수 자연농법',
    certification: 'aT 친환경 농산물 100% 유기농 인증',
    exportDestinations: ['미국', '프랑스', '일본', '싱가포르'],
    isFeatured: true,
  },
  {
    id: 'prod-2',
    name: '나주 명품 아삭 유기농 배',
    subName: 'Naju Premium Fresh Asian Pear',
    region: '전라남도 나주시',
    seasonMonths: ['8월', '9월', '10월'],
    category: '과일',
    image: ASSETS.pears,
    description: '영산강의 비옥한 토양과 넉넉한 일조량 속에서 키워낸 나주 배는 풍부한 과즙과 14브릭스 이상의 뛰어난 당도를 자랑합니다.',
    flavorProfile: ['아삭한 식감', '풍부한 과즙', '높은 당도', '청량한 후미'],
    nutritionHighlights: ['루테올린(기관지 건강)', '식이섬유', '칼륨', '천연 과당'],
    farmerStory: '나주 과수원 협동조합 120여 농가의 정성',
    certification: 'aT GAP 우수농산물 및 친환경 인증',
    exportDestinations: ['미국', '대만', '캐나다', '베트남'],
    isFeatured: true,
  },
  {
    id: 'prod-3',
    name: '상주 전통 햇 곶감',
    subName: 'Sangju Traditional Dried Persimmon',
    region: '경상북도 상주시',
    seasonMonths: ['10월', '11월', '12월'],
    category: '과일',
    image: ASSETS.persimmon,
    description: '소백산맥의 맑은 바람에 60일간 자연 건조하여 겉은 쫀득하고 속은 촉촉한 꿀을 머금은 대한민국 대표 전통 명품 곶감입니다.',
    flavorProfile: ['쫀득한 질감', '달콤한 곶감 꿀', '전통의 풍미', '깊은 붉은 빛'],
    nutritionHighlights: ['비타민 A', '타닌 성분', '면역력 증진', '숙취 해소'],
    farmerStory: '3대째 내려오는 상주 덕장 가문의 곶감 건조 노하우',
    certification: '지리적 표시제 등록 제12호 / aT 엄선',
    exportDestinations: ['미국', '중국', '호주'],
    isFeatured: true,
  },
  {
    id: 'prod-4',
    name: '산청 유기농 설향 딸기',
    subName: 'Sancheong Organic Strawberry',
    region: '경상남도 산청군',
    seasonMonths: ['12월', '1월', '2월', '3월'],
    category: '과일',
    image: ASSETS.berries,
    description: '지리산 청정지역의 맑은 물로 스마트온실에서 꿀벌 수정 방식으로 재배하여 향이 진하고 단단한 프리미엄 딸기입니다.',
    flavorProfile: ['진한 딸기 향', '상큼달콤한 균형', '단단한 육질'],
    nutritionHighlights: ['비타민 C (레몬의 2배)', '엽산', '안토시아닌'],
    farmerStory: '청년 스마트농부 정성훈 씨의 데이터 기반 꿀벌 친환경 재배',
    certification: 'aT 스마트팜 친환경 인증',
    exportDestinations: ['홍콩', '싱가포르', '태국', '말레이시아'],
    isFeatured: true,
  },
  {
    id: 'prod-5',
    name: '풍기 6년근 수삼 & 홍삼',
    subName: 'Punggi 6-Year Korean Red Ginseng',
    region: '경상북도 영주시 풍기읍',
    seasonMonths: ['9월', '10월'],
    category: '수산·임산물',
    image: ASSETS.heroHarvest,
    description: '소백산록의 서늘한 기후와 사질양토에서 6년간 흙의 기운을 가득 머금은 사포닌 풍부한 명품 고려인삼입니다.',
    flavorProfile: ['쌉싸래한 흙향', '깊은 사포닌 후미', '원기 회복감'],
    nutritionHighlights: ['진세노사이드 Rg1+Rb1+RG3', '면역 증진', '피로 개선'],
    farmerStory: '풍기인삼농협 500여 조합원 농가',
    certification: '국가 지정 지리적표시품 / aT 수출우수품',
    exportDestinations: ['미국', '일본', '베트남', '유럽'],
    isFeatured: false,
  }
];

export const SEASONAL_MONTHS: SeasonalMonthData[] = [
  {
    month: 1,
    monthName: '1월',
    title: '새해를 여는 청정 겨울 결실',
    description: '지리산 산청 딸기와 해남 겨울 배추의 달콤함',
    heroImage: ASSETS.berries,
    topItems: [
      { name: '산청 설향 딸기', category: '과일', region: '경남 산청', desc: '꿀벌 수정 방식의 고당도 딸기', icon: '🍓' },
      { name: '해남 겨울 배추', category: '채소', region: '전남 해남', desc: '해풍 맞아 속이 꽉 찬 아삭함', icon: '🥬' },
      { name: '완도 풋김', category: '수산', region: '전남 완도', desc: '바다 향이 살아있는 물김', icon: '🌊' }
    ]
  },
  {
    month: 5,
    monthName: '5월',
    title: '생명이 약동하는 첫물 차의 계절',
    description: '제주 오설록 녹차밭의 햇차 우전 수확',
    heroImage: ASSETS.greenTea,
    topItems: [
      { name: '제주 우전 녹차', category: '차', region: '제주 서귀포', desc: '어린 순으로 덖어낸 명품 차', icon: '🍵' },
      { name: '나주 봄 미나리', category: '채소', region: '전남 나주', desc: '향긋함이 가득한 청정 미나리', icon: '🌿' },
      { name: '성주 참외', category: '과일', region: '경북 성주', desc: '아삭하고 달콤한 노란 결실', icon: '🍈' }
    ]
  },
  {
    month: 8,
    monthName: '8월',
    title: '뜨거운 햇살이 영글어낸 제철 보물',
    description: '상주 샤인머스캣 포도와 나주 여름 햇배',
    heroImage: ASSETS.pears,
    topItems: [
      { name: '나주 햇배', category: '과일', region: '전남 나주', desc: '과즙이 폭발하는 아삭한 맛', icon: '🍐' },
      { name: '상주 샤인머스캣', category: '과일', region: '경북 상주', desc: '망고 향이 감도는 명품 포도', icon: '🍇' },
      { name: '영양 고추', category: '채소', region: '경북 영양', desc: '햇빛에 자연 건조한 태양초', icon: '🌶️' }
    ]
  },
  {
    month: 10,
    monthName: '10월',
    title: '풍요로운 가을 수확의 기쁨',
    description: '상주 전통 곶감과 풍기 6년근 수삼',
    heroImage: ASSETS.persimmon,
    topItems: [
      { name: '상주 곶감', category: '임산물', region: '경북 상주', desc: '자연 바람이 말린 쫀득함', icon: '🧡' },
      { name: '풍기 6년근 수삼', category: '임산물', region: '경북 영주', desc: '사포닌 가득한 영양 덩어리', icon: '🌱' },
      { name: '철원 오대쌀', category: '곡류', region: '강원 철원', desc: '윤기가 흐르는 햇햅쌀', icon: '🌾' }
    ]
  }
];

export const FARMER_STORIES: FarmerStory[] = [
  {
    id: 'farmer-1',
    farmName: '서귀포 한라산 차밭',
    farmerName: '강성민 농부',
    location: '제주 서귀포시 중산간',
    produceName: '100% 유기농 녹차',
    quote: '화학비료 없이 자연 그대로의 시간표를 기다릴 때 흙이 숨을 쉬고 깊은 차 향이 피어납니다.',
    fullStory: '30년간 한라산 중산간 청정 구역에서 오직 짚과 콩을 이용한 유기농 순환 농법만을 고집해왔습니다. aT의 해외 브랜드화 컨설팅을 통해 프랑스, 미국 하이엔드 티룸 수출이라는 결실을 맺었습니다.',
    image: ASSETS.heroFarm,
    impactMetric: '+140%',
    impactLabel: 'aT 지원 후 농가 해외 수출 매출 신장률'
  },
  {
    id: 'farmer-2',
    farmName: '나주 영산강 배 과수원',
    farmerName: '최순자·임동현 부부',
    location: '전라남도 나주시 금천면',
    produceName: '나주 아삭 배',
    quote: 'aT의 콜드체인 물류 지원 덕에 미국 캘리포니아에서도 우리 배가 갓 딴 것처럼 싱싱합니다.',
    fullStory: '영산강 강바람을 맞으며 자란 나주 배의 과즙과 당도를 해외에 알리는 것이 꿈이었습니다. aT의 신선 농산물 전용 스마트 컨테이너 지원 덕에 컴플레인 없는 최고 품질 평가를 받고 있습니다.',
    image: ASSETS.pears,
    impactMetric: '120여 농가',
    impactLabel: '나주 과수원 공동체 직거래 상생 규모'
  },
  {
    id: 'farmer-3',
    farmName: '김제 스마트 그린 온실',
    farmerName: '정성훈 청년 농부',
    location: '전북 김제시 백구면',
    produceName: '스마트팜 친환경 딸기',
    quote: 'IT 기술과 흙의 따뜻함이 만나 미래 농업의 새로운 가능성을 열어가고 있습니다.',
    fullStory: '대학에서 정보통신공학을 전공한 뒤 고향으로 돌아와 AI 기반 온습도·영양 제어 유리온실을 구축했습니다. aT 청년창농 자금 지원으로 유통 안정성을 확보했습니다.',
    image: ASSETS.smartFarm,
    impactMetric: '연 5.2억 원',
    impactLabel: '청년 스마트농부 창농 3년차 안정 매출'
  }
];

export const AT_STATS = [
  { label: 'K-Food 수출시장', value: '140개국', detail: '전 세계 해외 조직망 보유' },
  { label: '수출·식품산업 지원', value: '52,000개', detail: '농가 및 식품기업 판로 지원' },
  { label: '농림수산식품 수출 규모', value: '120억 달러', detail: '2026년 상반기 누적 달성' },
  { label: '농수산식품 데이터 연간 제공', value: '350만 건', detail: 'KAMIS·KATI·aT-Market 데이터' },
];

export const SUPPORT_PROJECTS: SupportProject[] = [
  {
    id: 'proj-1',
    title: '2026 농식품 글로벌 수출지원사업',
    summary: '국내 우수 농식품 기업의 해외시장 진출 및 바이어 매칭, 현지 맞춤형 마케팅 비용을 종합 지원합니다.',
    targetCategory: '수출기업',
    targetAudience: '농식품 수출 유망기업 및 농업법인',
    applicationPeriod: '2026.08.01 ~ 2026.08.31',
    status: '접수중',
    department: 'aT 해외사업처 글로벌마케팅부',
    budgetOrBenefit: '기업당 최대 5,000만 원 (자부담 20%)',
    details: [
      '해외 현지 바이어 1:1 비즈니스 매칭 상담회 참가지원',
      '수출 전용 스마트 콜드체인 물류 및 인허가 컨설팅',
      '현지 글로벌 유통매장(Costco, Whole Foods 등) K-Food 전용 입점 바우처 제공'
    ]
  },
  {
    id: 'proj-2',
    title: '식품기업 경쟁력 강화 및 신제품 개발 지원',
    summary: '중소 식품 제조·가공기업의 신제품 R&D, 시제품 제작, 패키지 개선 및 판로 확대를 가속화합니다.',
    targetCategory: '식품기업',
    targetAudience: '국내 국산 농산물 사용 중소 식품제조기업',
    applicationPeriod: '2026.08.05 ~ 2026.08.25',
    status: '접수중',
    department: 'aT 식품산업육성처 식품진흥부',
    budgetOrBenefit: '기업당 최대 3,000만 원 direct 바우처',
    details: [
      '국산 농산물 원료 이용율 50% 이상 기업 가점 부과',
      'HACCP 및 유기농 인증 전환 컨설팅 무료 지원',
      '대형마트 및 온라인 쇼핑몰(Coupang, SSG 등) 기획전 입점 기회'
    ]
  },
  {
    id: 'proj-3',
    title: '농산물 산지유통시설(APC) 스마트 고도화 지원',
    summary: '산지 유통의 핵심 거점인 APC의 디지털 자동화, AI 선별 시스템 및 온실가스 저감 시설 설치를 지원합니다.',
    targetCategory: '농어업인',
    targetAudience: '지역 농협, 산지 유통 전문 조직 및 농업법인',
    applicationPeriod: '2026.08.10 ~ 2026.09.15',
    status: '접수중',
    department: 'aT 산지유통처 스마트유통부',
    budgetOrBenefit: '개소당 최대 2억 원 국비 매칭 지원',
    details: [
      'AI 영상 처리 기반 농산물 당도·크기 automatic 선별 라인 구축',
      '산지 직거래 온라인 도매시장(aT-Market) 연동 인프라 제공',
      '에너지 절감형 스마트 콜드체인 저온창고 설치비 보조'
    ]
  },
  {
    id: 'proj-4',
    title: '외식업체 육성 및 저리 경영 자금 지원',
    summary: '고물가·원자재 상승으로 어려움을 겪는 국산 식재료 사용 외식업체의 경영 안정 및 시설 개선자금을 융자합니다.',
    targetCategory: '외식기업',
    targetAudience: '국산 농수산식품 이용 외식업체 및 소상공인',
    applicationPeriod: '2026년 상시접수',
    status: '상시접수',
    department: 'aT 외식산업지원부',
    budgetOrBenefit: '연 1.5% 저리 정책자금 최대 1억 원',
    details: [
      '국산 식재료 직거래 구매 자금 및 매장 디지털화 설치비',
      '외식 트렌드 메뉴 개발 및 위생 컨설팅 무료 제공',
      '무이자 및 고정금리 정책자금 상환 유예 옵션 적용'
    ]
  },
  {
    id: 'proj-5',
    title: '온라인 공공도매시장 출하농가 수수료 경감 사업',
    summary: '유통 단계를 줄여 생산자 수취가를 올리는 aT 온라인 도매시장 이용 출하 농가에 거래 수수료를 지원합니다.',
    targetCategory: '유통기업',
    targetAudience: 'aT 온라인 공공도매시장 참가 농가 및 도매법인',
    applicationPeriod: '2026.08.01 ~ 2026.12.31',
    status: '접수중',
    department: 'aT 온라인도매시장본부 Operations팀',
    budgetOrBenefit: '거래 수수료 50% 환급 및 정산 대금 익일 결제',
    details: [
      '산지-소비지 직접 거래에 따른 유통비용 절감 효과 산출',
      '온라인 도매 거래 시 물류비 및 포장재비 일부 지원',
      '전국 도매시장 가격 실시간 매칭 알고리즘 이용권 제공'
    ]
  }
];

export const PRICE_TICKER_DATA: PriceData[] = [
  { id: 'p-1', item: '사과 (홍로/10kg)', price: '48,500원', unit: '도매가', change: '-3.2%', isUp: false, category: '과일', marketTrend: '햇사과 출하량 증가로 안정세' },
  { id: 'p-2', item: '배 (신고/15kg)', price: '52,000원', unit: '도매가', change: '+1.5%', isUp: true, category: '과일', marketTrend: '추석 선물용 명품 배 수요 지속' },
  { id: 'p-3', item: '배추 (상품/10kg)', price: '12,400원', unit: '도매가', change: '-0.8%', isUp: false, category: '채소', marketTrend: '고랭지 배추 출하 안정적' },
  { id: 'p-4', item: '무 (상품/20kg)', price: '16,200원', unit: '도매가', change: '+2.1%', isUp: true, category: '채소', marketTrend: '소비지 직거래 수요 활발' },
  { id: 'p-5', item: '마늘 (깐마늘/1kg)', price: '8,900원', unit: '소매가', change: '0.0%', isUp: true, category: '채소', marketTrend: 'aT 수급 비축분 풀려 가격 유지' },
  { id: 'p-6', item: '제주 녹차 (우전/100g)', price: '35,000원', unit: '산지가', change: '+4.5%', isUp: true, category: '차', marketTrend: '해외 프리미엄 음료 수출 수요 급증' }
];

export const NEWS_NOTICES: NewsNotice[] = [
  {
    id: 'news-1',
    category: '사업공고',
    title: '2026년 농식품 글로벌 육성지원사업 참여기업 모집 공고',
    date: '2026.08.11',
    department: '해외사업처',
    isUrgent: true,
    summary: 'K-Food 세계화를 이끌 우수 농식품 수출기업 모집. 현지 마케팅 및 물류 바우처 제공.'
  },
  {
    id: 'news-2',
    category: '공지사항',
    title: '한국농수산식품유통공사 농식품 통합 데이터 시스템 점검 안내',
    date: '2026.08.10',
    department: '정보화사업처',
    isUrgent: false,
    summary: 'KAMIS 및 KATI 서비스 안정화를 위한 정기 데이터베이스 점검 작업 안내.'
  },
  {
    id: 'news-3',
    category: '보도자료',
    title: 'aT, K-Food 수출시장 확대를 위한 글로벌 유통 체인 파트너십 강화',
    date: '2026.08.08',
    department: '홍보실',
    isUrgent: false,
    summary: '미국 및 유럽 대형 유통 매장에 한국 신선 농산물 전용 팝업스토어 개설 및 협력 체결.'
  },
  {
    id: 'news-4',
    category: '채용',
    title: '2026년도 한국농수산식품유통공사 신입 및 경력직 채용 1차 합격자 발표',
    date: '2026.08.05',
    department: '인증인사부',
    isUrgent: false,
    summary: '공공기관 채용 절차에 따른 필기전형 합격자 안내 및 면접전형 일정 안내.'
  },
  {
    id: 'news-5',
    category: '사업공고',
    title: '농산물 직거래 활성화를 위한 친환경 수확 포장재 지원사업 안내',
    date: '2026.08.02',
    department: '유통지원처',
    isUrgent: false,
    summary: '전국 친환경 농가를 대상으로 100% 생분해성 친환경 농산물 박스 보조금 지급.'
  }
];

