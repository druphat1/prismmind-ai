import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-box',
  imports: [FormsModule],
  templateUrl: './question-box.component.html',
  styleUrl: './question-box.component.scss'
})
export class QuestionBoxComponent {
   question = signal('');
   questionSubmitted = output<string>();
   onSubmit(event : Event){
     event.preventDefault();
     this.submitQuestion();
   }
   submitQuestion(){
    const q = this.question().trim();
    if(q && q.length <=500){
      this.questionSubmitted.emit(q);
      this.question.set('');
    }
   }
   setQuestion(q:string):void{
      this.question.set(q);
   }
}
