import { Personality } from './personality.model';

export interface AIResponse {
  personality: Personality;
  response: string;
  timestamp: Date;
  isTyping: boolean;
  displayedText: string;
}

export interface HistoryEntry {
  id: string;
  question: string;
  responses: AIResponse[];
  timestamp: Date;
}