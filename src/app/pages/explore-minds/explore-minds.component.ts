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
}
