import { Component, output } from '@angular/core';
import { TRENDING_QUESTIONS } from '../../shared/constants/trending-questions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending-questions',
  imports: [CommonModule],
  templateUrl: './trending-questions.component.html',
  styleUrl: './trending-questions.component.scss'
})
export class TrendingQuestionsComponent {
  questions = TRENDING_QUESTIONS;
  questionClicked = output<string>();
}
