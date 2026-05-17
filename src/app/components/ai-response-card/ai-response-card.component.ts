import { Component, effect, input, signal } from '@angular/core';
import { AIResponse } from '../../models/ai-response.model';

@Component({
  selector: 'app-ai-response-card',
  imports: [],
  templateUrl: './ai-response-card.component.html',
  styleUrl: './ai-response-card.component.scss'
})
export class AiResponseCardComponent {
   response = input.required<AIResponse>();
   animationDelay = input<number>(0);
   displayedText = signal('');
   isCurrentlyTyping = signal(false);
   private typingInterval: any;
   private startTimeout: any;
   constructor(){
    effect(()=>{
      const r = this.response();
      if(r && r.response){
        this.startTypingAnimation(r.response)
      }
    });
   }
   ngOnInit(): void {}
   ngOnDestroy(): void{
    clearInterval(this.typingInterval);
    clearTimeout(this.startTimeout);
   }
   private startTypingAnimation(fullText :string){
      clearInterval(this.typingInterval);
      clearTimeout(this.startTimeout);
      this.displayedText.set('');
      this.isCurrentlyTyping.set(false);
      this.startTimeout = setTimeout(()=>{
        this.isCurrentlyTyping.set(true);
        let index = 0;
        const speed = Math.max(8,20-(fullText.length/50));
        this.typingInterval = setInterval(()=>{
          if(index < fullText.length){
            const chuckSize = Math.random() > 0.7 ? 3 : (Math.random() > 0.4 ? 2 : 1);
            index = Math.min(index + chuckSize ,fullText.length);
            this.displayedText.set(fullText.substring(0,index))
          }
          else{
            clearInterval(this.typingInterval);
            this.isCurrentlyTyping.set(false);
          }
        })
      })
   }
}
