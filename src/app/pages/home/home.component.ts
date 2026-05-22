import { Component, inject, signal } from '@angular/core';
import { AiService } from '../../services/ai.service';
import { HistoryService } from '../../services/history.service';
import { AIResponse } from '../../models/ai-response.model';
import { firstValueFrom } from 'rxjs';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { QuestionBoxComponent } from '../../components/question-box/question-box.component';
import { AiResponseCardComponent } from '../../components/ai-response-card/ai-response-card.component';
import { TrendingQuestionsComponent } from '../../components/trending-questions/trending-questions.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    QuestionBoxComponent,
    TrendingQuestionsComponent,
    AiResponseCardComponent,
    LoadingSpinnerComponent
  ],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private aiService = inject(AiService);
  private historyService = inject(HistoryService);
  
  isLoading = signal(false);
  responses = signal<AIResponse[]>([]);
  currentQuestion = signal('');
  clearResponses(): void {
    this.responses.set([]);
    this.currentQuestion.set('');
  }

  async onQuestionSubmitted(question:string){
     this.currentQuestion.set(question);
     this.isLoading.set(true);
     this.responses.set([]);
     this.aiService.getResponse().subscribe({
      next:(responses) =>{
        this.responses.set(responses);
        this.isLoading.set(false);
        this.historyService.addEntry(question,responses);
      }
     })
  }

}
