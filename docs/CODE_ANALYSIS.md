# aT 농식품 서비스·아카이브 코드 분석

## 1. 분석 요약

이 저장소는 한국농수산식품유통공사(aT)를 주제로 만든 **React 기반 프런트엔드 프로토타입**이다. 기관 소개, 지원사업, 농산물 가격 정보, K-Food 수출, 농가 이야기, 제철 농산물, 블로그를 한 화면 체계 안에서 보여준다.

현재 구현은 서버나 데이터베이스에 연결되지 않은 **클라이언트 단독 목업 애플리케이션**이다. 콘텐츠는 `src/data/mockData.ts`에 하드코딩되어 있고, 사용자가 남기는 북마크만 브라우저 `localStorage`에 저장된다. 검색, 댓글, 좋아요, 뉴스레터 구독, 지원사업 신청 등의 인터랙션은 화면에서 동작하는 시뮬레이션이며 외부 시스템에 전송되지 않는다.

코드의 장점은 화면을 기능별 컴포넌트로 잘 나누고 TypeScript 데이터 모델을 별도로 정의한 점이다. 반면 현재 상태에는 TypeScript 빌드를 막을 가능성이 높은 필수 props 불일치가 두 군데 있으며, 배포 환경에서 로컬 이미지가 깨질 수 있는 경로 구성도 확인된다. 따라서 실제 서비스로 발전시키기 전에 먼저 빌드 오류와 자산 경로를 정리해야 한다.

## 2. 기술 스택

| 구분 | 사용 기술 | 역할 |
|---|---|---|
| UI | React 19, React DOM 19 | 컴포넌트 기반 화면 구성 |
| 언어 | TypeScript 5.8 | 상태·데이터 모델 타입 정의 |
| 빌드 | Vite 6 | 개발 서버와 프로덕션 번들 생성 |
| 스타일 | Tailwind CSS 4, `@tailwindcss/vite` | 유틸리티 클래스 기반 디자인 |
| 애니메이션 | Motion (`motion/react`) | 모달·탭·콘텐츠 전환 효과 |
| 아이콘 | Lucide React | 내비게이션과 카드 아이콘 |
| 데이터 | TypeScript 정적 배열 | 블로그, 농산물, 지원사업, 시세, 공지 데이터 |
| 브라우저 저장소 | `localStorage` | 블로그·농산물 북마크 ID 보존 |

`package.json`에는 `@google/genai`, Express, dotenv 등이 포함되어 있지만 현재 `src` 코드에서는 사용하지 않는다. `.env.example`의 `GEMINI_API_KEY`와 `APP_URL`도 실제 코드에서 참조하지 않는다. 즉, 패키지와 메타데이터에는 AI/서버 기능의 흔적이 있지만 현재 저장소에는 해당 구현이 없다.

## 3. 디렉터리와 역할

```text
Repo/
├─ index.html                  # Vite HTML 진입점
├─ package.json               # 실행 스크립트와 의존성
├─ tsconfig.json              # TypeScript 설정
├─ vite.config.ts             # React/Tailwind 플러그인, @ 별칭, HMR 설정
├─ src/
│  ├─ main.tsx                # React 루트 마운트
│  ├─ App.tsx                 # 전역 화면 상태와 탭/모달 조정
│  ├─ index.css               # Tailwind CSS 로드
│  ├─ types.ts                # 도메인 타입 정의
│  ├─ data/mockData.ts        # 모든 목업 데이터와 이미지 URL
│  ├─ assets/images/          # 저장소에 포함된 이미지 5개
│  └─ components/             # 섹션, 모달, 검색, 북마크 UI
└─ docs/CODE_ANALYSIS.md      # 이 분석 문서
```

실행 순서는 다음과 같다.

1. `index.html`이 `/src/main.tsx`를 로드한다.
2. `main.tsx`가 `#root`에 `<App />`을 마운트한다.
3. `App.tsx`가 현재 탭, 선택된 콘텐츠, 모달 열림 상태, 북마크 상태를 관리한다.
4. 각 하위 컴포넌트는 props로 데이터 선택 이벤트나 탭 이동 함수를 전달받는다.
5. 콘텐츠 자체는 `mockData.ts`에서 import하여 필터링하고 표시한다.

## 4. 화면 구조와 사용자 흐름

### 4.1 탭 내비게이션

별도의 라우팅 라이브러리는 사용하지 않는다. `App.tsx`의 `activeTab` 상태에 따라 아래 여섯 화면 중 하나를 조건부 렌더링한다.

| 탭 값 | 화면 |
|---|---|
| `home` | 기관 메인 홈 |
| `blog` | 전체 블로그 허브 |
| `seasonal` | 제철 달력과 농산물 쇼케이스 |
| `exports` | 수출 카테고리 블로그 |
| `farmer` | 농가 이야기와 농가 카테고리 블로그 |
| `about` | 기관 소개 |

URL이 바뀌지 않으므로 새로고침하면 항상 홈으로 돌아온다. 브라우저 뒤로 가기, 특정 콘텐츠 딥링크, 탭별 SEO도 지원하지 않는다.

### 4.2 홈 화면

홈은 아래 순서로 긴 랜딩 페이지를 구성한다.

1. `HeroBanner`: 핵심 메시지와 주요 섹션 이동 버튼
2. `CoreBusinessesSection`: aT 핵심 사업 소개
3. `UserServicePortal`: 사용자 유형별 진입점
4. `SupportProjectsSection`: 대상 유형별 지원사업 필터
5. `AgriDataSection`: 농산물 가격·데이터 서비스 소개
6. `KFoodGlobalSection`: K-Food 수출 홍보
7. `PerformanceSection`: 기관 성과 지표
8. `FieldStoriesSection`: 농가 현장 이야기
9. `NewsNoticesSection`: 공지·사업공고·보도자료·채용 필터
10. `InstitutionMissionSection`: 기관 미션 소개
11. `EsgManagementSection`: ESG 활동 소개
12. `BottomCtaSection`: 지원사업 및 핵심사업 이동 CTA

섹션 이동은 HTML `id`와 `scrollIntoView()`를 이용한다. 다른 탭에서 홈 섹션으로 이동할 때는 홈 렌더링을 기다리기 위해 100ms `setTimeout`을 사용한다. 간단하지만 렌더링 시간이 달라지면 이동이 누락될 수 있어, 향후에는 상태 변화 후 effect나 라우터의 hash 이동으로 교체하는 편이 안정적이다.

### 4.3 블로그

`BlogSection`은 다음 조건을 조합해 `BLOG_POSTS`를 필터링한다.

- 카테고리: 전체, 농가 상생, K-Food 수출, 제철 먹거리, 친환경·스마트팜, 공사 소식
- 텍스트: 제목, 부제, 요약, 태그
- 인기 태그

게시물을 선택하면 `BlogModal`이 열린다. 모달 안에서 글꼴, 글자 크기, 밝은색·세피아·어두운색 테마를 바꿀 수 있고, 좋아요, 댓글, 링크 복사, 북마크 기능을 제공한다. 다만 좋아요·댓글·읽기 설정은 모달의 지역 상태라 닫으면 사라진다. 공유 기능도 실제 SNS 공유가 아니라 현재 페이지 URL을 클립보드에 복사한다.

### 4.4 제철 농산물

`SeasonalCalendar`는 1월, 5월, 8월, 10월의 목업 데이터를 표시하며 초기값은 8월이다. 항목을 클릭하면 이름 일부가 일치하는 `PRODUCE_ITEMS`를 찾아 `ProduceModal`을 연다. 찾지 못하면 첫 번째 농산물을 대신 연다.

`ProduceShowcase`는 카테고리 필터, 상세 모달, 저장 기능을 담당한다. 농산물 저장 상태는 블로그 북마크와 마찬가지로 `localStorage`에 남는다.

### 4.5 검색·북마크·공지

- `SearchOverlay`: 블로그의 제목·부제·요약·태그와 농산물의 이름·영문명·지역·설명을 클라이언트에서 검색한다.
- `BookmarksDrawer`: 저장된 블로그와 농산물을 두 개의 하위 탭으로 나누어 표시한다.
- `NoticeModal`: 여러 공지·CTA에서 공통으로 여는 단일 고정 내용 모달이다.
- `ProjectDetailModal`: 선택한 지원사업의 대상, 기간, 부서, 혜택, 세부 항목을 보여준다.

현재 `NewsNoticesSection`에서 어떤 공지를 눌렀는지는 `App.tsx`의 `handleSelectNotice`에서 사용하지 않는다. 따라서 공지 목록의 모든 항목이 동일한 `NoticeModal`을 연다.

## 5. 상태와 데이터 흐름

전역 상태 관리 라이브러리 없이 `App.tsx`가 화면 조정자 역할을 한다.

| 상태 | 의미 | 보존 여부 |
|---|---|---|
| `activeTab` | 현재 표시할 대화면 | 새로고침 시 초기화 |
| `selectedBlogCategory` | 블로그 카테고리 | 새로고침 시 초기화 |
| `selectedTargetCategory` | 지원사업 대상 필터 | 새로고침 시 초기화 |
| `selectedPost` | 열린 블로그 상세 | 모달을 닫으면 제거 |
| `selectedProduce` | 열린 농산물 상세 | 모달을 닫으면 제거 |
| `selectedProject` | 열린 지원사업 상세 | 모달을 닫으면 제거 |
| `isBookmarksOpen` | 북마크 서랍 상태 | 보존 안 함 |
| `isSearchOpen` | 검색 오버레이 상태 | 보존 안 함 |
| `isNoticeOpen` | 공지 모달 상태 | 보존 안 함 |
| `savedPostIds` | 저장한 블로그 ID | `at_saved_posts`에 보존 |
| `savedProduceIds` | 저장한 농산물 ID | `at_saved_produce`에 보존 |

저장소 값이 없을 때 기본적으로 `post-1`과 `prod-1`이 이미 저장된 상태로 시작한다. JSON 파싱 오류에는 빈 값이 아니라 이 기본값으로 복구한다. 다만 파싱 결과가 문자열 배열인지까지는 검증하지 않고 단순히 배열 여부만 확인한다.

## 6. 데이터 모델과 목업 규모

`src/types.ts`는 다음 도메인 모델을 정의한다.

- `BlogPost`: 작성자, 요약, 본문 섹션, 인용문, 태그, 조회·좋아요 수
- `ProduceItem`: 산지, 제철 월, 맛, 영양, 농가 이야기, 인증, 수출국
- `SeasonalMonthData`: 월별 대표 이미지와 추천 품목
- `FarmerStory`: 농가·농업인·성과 지표
- `SupportProject`: 대상, 접수 기간, 상태, 부서, 혜택, 세부 내용
- `PriceData`: 품목 가격, 등락, 시장 동향
- `NewsNotice`: 공지 유형, 날짜, 부서, 긴급 여부
- `ReaderSettings`: 블로그 읽기 글꼴·크기·테마

현재 목업 데이터 규모는 다음과 같다.

| 데이터 | 개수 |
|---|---:|
| 블로그 게시물 | 5 |
| 농산물 | 5 |
| 제철 월 데이터 | 4 |
| 농가 이야기 | 3 |
| 기관 성과 지표 | 4 |
| 지원사업 | 5 |
| 가격 정보 | 6 |
| 뉴스·공지 | 5 |

## 7. 스타일과 디자인 특성

`src/index.css`에는 `@import "tailwindcss";`만 있으며, 대부분의 디자인이 JSX의 긴 Tailwind 클래스 문자열에 직접 들어 있다. 주요 색상은 짙은 녹색 `#2C4A3E`, 미색 `#F8F7F2`, 올리브 계열 `#A2A67C`이다. 카드, 모달, 큰 이미지, serif 제목을 사용해 기관 사이트와 농식품 매거진을 결합한 인상을 준다.

반응형 클래스(`sm`, `md`, `lg`)와 모바일 메뉴는 구현되어 있다. Motion으로 모달과 콘텐츠 전환도 제공한다. 다만 디자인 토큰이 설정 파일이나 CSS 변수로 추출되어 있지 않아 같은 색상과 간격 값이 여러 컴포넌트에 반복된다.

## 8. 현재 확인된 문제와 위험

### P0 — 빌드 전에 반드시 수정

1. **`AboutSection` 필수 prop 이름 불일치**

   `AboutSectionProps`는 `onGoToBlog`와 `onOpenNoticeModal`을 요구한다. 그러나 `App.tsx`는 `onGoToAbout`을 전달한다. TypeScript excess property 및 필수 prop 누락 오류가 예상된다. 더구나 `AboutSection` 내부에서 `onGoToBlog`는 현재 사용하지 않으므로, 실제 의도에 맞춰 prop을 제거하거나 이름과 호출부를 일치시켜야 한다.

2. **`NoticeModal` 필수 prop 누락**

   `NoticeModalProps`는 `onGoToAbout`을 필수로 요구하고 내부 버튼에서 실행한다. `App.tsx`는 `isOpen`과 `onClose`만 전달하므로 타입 오류가 예상된다. 기관 소개 탭으로 이동시키는 콜백을 전달해야 한다.

### P1 — 배포·기능 신뢰성에 영향

1. **로컬 이미지 경로**

   `mockData.ts`의 저장소 이미지가 `/src/assets/images/...` 문자열로 참조된다. 이 방식은 Vite 개발 서버에서는 보일 수 있지만, 프로덕션 번들에서 자산으로 추적·복사되지 않아 404가 날 수 있다. 이미지를 TypeScript에서 import하거나 `public` 폴더로 옮겨야 한다.

2. **라우터 부재**

   탭과 상세 콘텐츠가 URL에 반영되지 않는다. 새로고침·뒤로 가기·링크 공유·딥링크·페이지별 메타데이터가 작동하지 않는다.

3. **공지 선택값 유실**

   선택한 `NewsNotice`를 상태에 저장하지 않아 모든 공지가 동일한 고정 모달을 연다.

4. **목업 인터랙션을 실제 기능처럼 표시**

   뉴스레터, 댓글, 좋아요, 지원 신청은 서버에 전달되지 않는다. 실제 서비스라면 API 연동과 성공·실패 처리가 필요하고, 프로토타입이라면 사용자에게 데모임을 명확히 알리는 것이 좋다.

5. **외부 이미지 의존**

   다수 이미지가 Unsplash URL에 의존한다. 네트워크 차단, URL 정책 변경, 응답 지연 시 핵심 화면이 비거나 레이아웃이 흔들릴 수 있다.

### P2 — 유지보수성과 품질 개선

1. `App.tsx`가 탭·모달·저장 상태를 모두 관리해 커질수록 결합도가 높아진다.
2. 색상과 레이아웃 클래스가 반복되어 전역 디자인 변경 비용이 크다.
3. `PublicMission.tsx`는 현재 어디에서도 import되지 않는 미사용 컴포넌트다.
4. `FilterState` 타입은 선언되어 있지만 사용되지 않는다.
5. `@google/genai`, Express, dotenv 등 사용하지 않는 의존성이 설치 대상에 포함되어 있다.
6. `index.html`의 `lang="en"`과 제목 `My Google AI Studio App`이 실제 한국어 aT 사이트 내용과 맞지 않는다.
7. 모달에 포커스 트랩, Escape 닫기, 배경 스크롤 잠금, `role="dialog"`, `aria-modal` 등 접근성 처리가 부족하다.
8. 이미지의 대체 텍스트가 장식용/정보용으로 체계적으로 구분되지 않고, 아이콘 버튼 일부는 스크린리더용 이름 보강이 필요하다.
9. 자동화 테스트와 테스트 스크립트가 없다.
10. ESLint/Prettier 설정이 없고 `lint` 스크립트가 실제 린터가 아니라 `tsc --noEmit`만 실행한다.

## 9. 권장 개선 순서

1. `AboutSection`과 `NoticeModal`의 props 계약을 수정하고 `npm run lint`, `npm run build`를 통과시킨다.
2. 저장소 이미지를 정적 import 또는 `public` 경로로 전환한다.
3. `index.html`의 언어를 `ko`로, 제목과 description을 실제 서비스명으로 수정한다.
4. React Router 등을 도입해 탭·카테고리·상세 모달을 URL과 연결한다.
5. 공지 선택 상태를 `selectedNotice`로 관리하고 선택 항목의 실제 내용을 모달에 전달한다.
6. API 계층을 추가해 공지, 지원사업, 블로그, 농산물 데이터를 정적 파일에서 분리한다.
7. 북마크 외의 좋아요·댓글·구독·신청 기능을 백엔드와 연결하거나 데모 기능임을 표시한다.
8. 공통 `Modal`, `SectionHeader`, `Card`, `Button` 컴포넌트와 색상 토큰을 만들어 중복을 줄인다.
9. 키보드 조작과 ARIA 속성을 보강하고 모바일·저속 네트워크·이미지 실패 상태를 점검한다.
10. Vitest와 React Testing Library로 필터, 북마크 저장, 탭 이동, 모달 동작을 테스트한다.

## 10. 실행 방법

프로젝트 의존성이 설치된 환경에서 다음 명령을 사용한다.

```bash
npm install
npm run dev
```

개발 서버는 `package.json` 설정상 `0.0.0.0:3000`에서 실행된다.

정적 타입 검사와 프로덕션 빌드는 다음과 같다.

```bash
npm run lint
npm run build
npm run preview
```

현재 작업 환경에는 저장소 의존성(`node_modules`)이 설치되어 있지 않아 이 분석에서는 실제 빌드까지 실행하지 않았다. 위 P0 항목은 소스의 컴포넌트 props 정의와 `App.tsx` 호출부를 대조한 정적 분석 결과다.

## 11. 결론

이 코드는 aT의 기관 정보와 농식품 콘텐츠를 하나의 매거진형 포털로 보여주는 **완성도 높은 UI 프로토타입**이다. 화면 분할, TypeScript 모델, 필터와 모달, 북마크 영속화까지 프런트엔드 데모에 필요한 기능이 폭넓게 들어 있다.

그러나 현재는 실제 업무 시스템이 아니라 정적 데이터 기반 시연용 앱이다. 우선 props 오류와 이미지 경로를 고쳐 빌드 가능한 기준점을 만들고, 다음으로 라우팅·API·접근성·테스트를 단계적으로 추가하는 것이 가장 효율적이다.
