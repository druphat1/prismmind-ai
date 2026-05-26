import { Component } from '@angular/core';
import { PERSONALITY } from '../../shared/constants/personalities';
import { Personality } from '../../models/personality.model';
@Component({
  selector: 'app-explore-minds',
  imports: [],
  templateUrl: './explore-minds.component.html',
  styleUrl: './explore-minds.component.scss'
})
export class ExploreMindsComponent {
   personalities = PERSONALITY;
   private sampleQuotes: Record<string, string> = {
    engineer: 'Break it down into components. Measure. Iterate. Ship.',
    billionaire: 'Don\'t think 10% better — think 10x bigger.',
    philosopher: 'The unexamined question is not worth answering.',
    psychologist: 'What emotion is driving this question? Let\'s explore that.',
    comedian: 'We\'re all just winging it. Some of us are funnier about it.',
    monk: 'Breathe. The answer is already within you.'
   };
   getSampleQuote(personality: Personality){
    return this.sampleQuotes[personality.id] ||'';
   }
   tags = [
    'All Augments',
    'Memory',
    'Logic',
    'Creativity',
    'Sensory'
  ];

  secondaryAugments = [
    {
      icon: '🌐',
      name: 'Linguistic Bridge v4',
      description: 'Language acquisition module',
      price: '850 NC'
    },
    {
      icon: '🧪',
      name: 'Lucid Architect',
      description: 'Enhanced dream recall & control',
      price: '1,200 NC'
    },
    {
      icon: '👁',
      name: 'Visual Upscaler',
      description: 'Digital optic overlay correction',
      price: '2,150 NC'
    }
  ];
}
