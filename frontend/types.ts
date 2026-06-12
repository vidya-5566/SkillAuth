export type BloomLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const BloomLevelNames: Record<BloomLevel, string> = {
  1: 'Familiar',   // Remember
  2: 'Competent',  // Understand
  3: 'Proficient', // Apply
  4: 'Advanced',   // Analyze
  5: 'Expert',     // Evaluate
  6: 'Authority'   // Create
};

export interface SkillCatalogItem {
  skillId: string;
  skillName: string;
  domainName: string;
  isActive: boolean;
  popularityScore: number;
  defaultValidityDays: number;
  creditCost: number;
  priceUsd: number;
  description: string;
  syllabus: string[];
}

export interface UserCredit {
  userId: string;
  totalCredits: number;
  usedCredits: number;
  planId: string;
}

export interface ExamSession {
  sessionId: string;
  skillId: string;
  skillName: string;
  status: 'Scheduled' | 'InProgress' | 'Paused' | 'Completed' | 'Abandoned';
  aiGenerationStatus: 'Pending' | 'Generating' | 'Ready';
  scheduledFor?: string;
  startedAt?: string;
  timeLimitMinutes: number;
}

export interface Question {
  questionId: string;
  text: string;
  type: 'MCQ' | 'Code' | 'OpenEnded';
  bloomLevel: BloomLevel;
  options?: { id: string; text: string }[];
}

export interface Badge {
  id: string;
  name: string;
  imageUrl: string;
  issuedDate: string;
}

export interface LERRecord {
  competencyId: string;
  competencyName: string;
  achievementLevel: string;
  verificationMethod: string;
}

export interface EvaluationResult {
  resultId: string;
  skillId: string;
  skillName: string;
  finalLevel: BloomLevel;
  finalScore: number;
  gradeName: string;
  bloomLabel: string;
  integrityScore: number;
  expiresAt: string;
  issuedAt: string;
  certificateCode: string;
  levelBreakdown: { level: BloomLevel; score: number; max: number }[];
  badges: Badge[];
  ler: LERRecord[];
}
