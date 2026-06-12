import { SkillCatalogItem, UserCredit, ExamSession, EvaluationResult, Question } from './types';

export const MOCK_USER_CREDIT: UserCredit = {
  userId: 'usr_123',
  totalCredits: 500,
  usedCredits: 150,
  planId: 'enterprise_tier_1'
};

export const MOCK_CATALOG: SkillCatalogItem[] = [
  { 
    skillId: 'sk_react', 
    skillName: 'React.js Advanced Architecture', 
    domainName: 'Frontend Engineering', 
    isActive: true, 
    popularityScore: 98, 
    defaultValidityDays: 365, 
    creditCost: 50, 
    priceUsd: 149,
    description: 'Evaluate deep understanding of React hooks, concurrent mode, state management patterns, and performance optimization at an enterprise scale.',
    syllabus: ['Advanced Hooks & Custom Hooks', 'Concurrent React & Suspense', 'State Management (Redux, Zustand, Context)', 'Performance Profiling & Optimization', 'Server-Side Rendering (SSR) Concepts']
  },
  { 
    skillId: 'sk_aws_arch', 
    skillName: 'AWS Solutions Architecture', 
    domainName: 'Cloud Infrastructure', 
    isActive: true, 
    popularityScore: 95, 
    defaultValidityDays: 730, 
    creditCost: 75, 
    priceUsd: 199,
    description: 'Assess ability to design highly available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.',
    syllabus: ['Compute & Networking', 'Storage & Database Design', 'Security & Identity', 'Cost Optimization', 'High Availability Architectures']
  },
  { 
    skillId: 'sk_python_data', 
    skillName: 'Python Data Analysis', 
    domainName: 'Data Science', 
    isActive: true, 
    popularityScore: 88, 
    defaultValidityDays: 365, 
    creditCost: 40, 
    priceUsd: 129,
    description: 'Test proficiency in Pandas, NumPy, and data visualization libraries for complex data manipulation.',
    syllabus: ['Data Cleaning & Preprocessing', 'Advanced Pandas Operations', 'Statistical Analysis', 'Data Visualization (Matplotlib/Seaborn)', 'Time Series Analysis']
  },
];

export const MOCK_ACTIVE_SESSIONS: ExamSession[] = [
  { 
    sessionId: 'sess_882', 
    skillId: 'sk_python_data', 
    skillName: 'Python Data Analysis', 
    status: 'Scheduled', 
    aiGenerationStatus: 'Generating',
    scheduledFor: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
    timeLimitMinutes: 60 
  },
  { 
    sessionId: 'sess_883', 
    skillId: 'sk_aws_arch', 
    skillName: 'AWS Solutions Architecture', 
    status: 'Scheduled', 
    aiGenerationStatus: 'Ready',
    scheduledFor: new Date(Date.now() + 3600000 * 2).toISOString(), // 2 hours from now
    timeLimitMinutes: 90 
  }
];

export const MOCK_RESULTS: EvaluationResult[] = [
  {
    resultId: 'res_991',
    skillId: 'sk_react',
    skillName: 'React.js Advanced Architecture',
    finalLevel: 4,
    finalScore: 88,
    gradeName: 'Distinction',
    bloomLabel: 'Advanced',
    integrityScore: 98,
    issuedAt: new Date(Date.now() - 30 * 86400000).toISOString(),
    expiresAt: new Date(Date.now() + 335 * 86400000).toISOString(),
    certificateCode: 'CERT-REACT-991-XYZ',
    levelBreakdown: [
      { level: 1, score: 100, max: 100 },
      { level: 2, score: 100, max: 100 },
      { level: 3, score: 95, max: 100 },
      { level: 4, score: 85, max: 100 },
      { level: 5, score: 60, max: 100 },
      { level: 6, score: 20, max: 100 },
    ],
    badges: [
      {
        id: 'bdg_react_adv',
        name: 'React Advanced Architect',
        imageUrl: 'https://picsum.photos/200/200?random=1',
        issuedDate: new Date(Date.now() - 30 * 86400000).toISOString()
      }
    ],
    ler: [
      { competencyId: 'COMP-UI-01', competencyName: 'Component Lifecycle Management', achievementLevel: 'Mastered', verificationMethod: 'Proctored Adaptive Assessment' },
      { competencyId: 'COMP-UI-02', competencyName: 'State Architecture', achievementLevel: 'Proficient', verificationMethod: 'Proctored Adaptive Assessment' },
      { competencyId: 'COMP-UI-03', competencyName: 'Performance Optimization', achievementLevel: 'Advanced', verificationMethod: 'Proctored Adaptive Assessment' }
    ]
  }
];

export const MOCK_EXAM_QUESTIONS: Question[] = [
  {
    questionId: 'q_1',
    text: 'Which hook should be used to memoize a callback function to prevent unnecessary re-renders of child components?',
    type: 'MCQ',
    bloomLevel: 1,
    options: [
      { id: 'o1', text: 'useMemo' },
      { id: 'o2', text: 'useCallback' },
      { id: 'o3', text: 'useEffect' },
      { id: 'o4', text: 'useRef' }
    ]
  },
  {
    questionId: 'q_2',
    text: 'Analyze the following scenario: A component fetches data on mount and updates state. If the component unmounts before the fetch completes, a memory leak warning occurs. How do you architect a solution to prevent this while maintaining clean code?',
    type: 'MCQ',
    bloomLevel: 4,
    options: [
      { id: 'o1', text: 'Use a boolean flag `isMounted` inside the useEffect.' },
      { id: 'o2', text: 'Use an AbortController to cancel the fetch request in the cleanup function.' },
      { id: 'o3', text: 'Suppress the warning using console.warn overrides.' },
      { id: 'o4', text: 'Move the fetch logic outside the component.' }
    ]
  }
];
