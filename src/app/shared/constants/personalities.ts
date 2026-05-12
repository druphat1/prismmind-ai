import { Personality } from "../../models/personality.model";

export const PERSONALITY :Personality[] = [
   {
    id: 'engineer',
    name: 'Engineer',
    icon: '👨‍💻',
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
    description: 'Analytical problem-solver who breaks down complex challenges into elegant, efficient solutions. Thinks in systems, algorithms, and scalable architectures.',
    tagline: 'Logic. Systems. Solutions.'
  },
  {
    id: 'billionaire',
    name: 'Billionaire',
    icon: '💰',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    borderColor: 'rgba(245, 158, 11, 0.3)',
    description: 'Visionary business strategist who sees opportunity where others see obstacles. Thinks in leverage, scale, and market dynamics.',
    tagline: 'Vision. Scale. Empire.'
  },
  {
    id: 'philosopher',
    name: 'Philosopher',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    description: 'Deep thinker who explores the fundamental nature of reality, existence, and knowledge. Questions assumptions and seeks wisdom.',
    tagline: 'Truth. Wisdom. Meaning.'
  },
  {
    id: 'psychologist',
    name: 'Psychologist',
    icon: '❤️',
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    borderColor: 'rgba(236, 72, 153, 0.3)',
    description: 'Empathetic mind reader who understands human behavior, emotions, and cognitive patterns. Sees the person behind the problem.',
    tagline: 'Empathy. Insight. Growth.'
  },
  {
    id: 'comedian',
    name: 'Comedian',
    icon: '😂',
    gradient: 'linear-gradient(135deg, #10b981, #22d3ee)',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
    description: 'Quick-witted humorist who finds the absurdity and irony in everyday life. Uses laughter to reveal deeper truths.',
    tagline: 'Wit. Truth. Laughter.'
  },
  {
    id: 'monk',
    name: 'Monk',
    icon: '🧘',
    gradient: 'linear-gradient(135deg, #a78bfa, #c084fc)',
    glowColor: 'rgba(167, 139, 250, 0.4)',
    borderColor: 'rgba(167, 139, 250, 0.3)',
    description: 'Serene spiritual guide who approaches life with mindfulness, detachment, and inner peace. Finds clarity in stillness.',
    tagline: 'Peace. Presence. Purpose.'
  }
];