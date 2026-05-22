import { Component, inject, signal } from '@angular/core';
import { AiService } from '../../services/ai.service';
import { PERSONALITY } from '../../shared/constants/personalities';
import { Personality } from '../../models/personality.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface DebateEntry {
  speaker: Personality;
  text: string;
  displayedText: string;
  isTyping: boolean;
}
@Component({
  selector: 'app-mind-clash',
  imports: [CommonModule, FormsModule],
  templateUrl: './mind-clash.component.html',
  styleUrl: './mind-clash.component.scss'
})
export class MindClashComponent {
  private aiService = inject(AiService);
  personalities = PERSONALITY;
  selectedId1 = signal('engineer');
  selectedId2 = signal('philosopher');
  clashQuestion = signal('');
  isLoading = signal(false);
  debate = signal<DebateEntry[]>([]);
   
  getDebateRound(index:number){
    return Math.floor(index/2)+1;
  }
  startClash():void{
    const q = this.clashQuestion().trim();
    if(!q){
      return;
    }
    const p1 = this.personalities.find(p => p.id === this.selectedId1())!;
    const p2 = this.personalities.find(p => p.id === this.selectedId2())!;
    this.isLoading.set(true);
    this.debate.set([]);
    this.aiService.getDebateResponse(p1, p2, q).subscribe({
       next: (entries)=>{
        const debateEntries :DebateEntry[] = entries.map(e =>({
           speaker:e.speaker,
           text: e.text,
          displayedText: e.text,
          isTyping: false
        }));
        this.debate.set(debateEntries);
        this.isLoading.set(false);
       },
        error: () => {
        this.isLoading.set(false);
      }
    })
  }
}
