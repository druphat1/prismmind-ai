import { Component, inject, signal } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  historyService = inject(HistoryService);
  expandedId = signal<string | null>(null);
  toggleExpand(id: string): void{
    this.expandedId.set(this.expandedId() == id ? null : id);
  }
  confirmClear(){
    if(confirm('Are you sure you to want to clear all history')){
      this.historyService.clearHistory();
    }
  }
  formateDate(date :Date){
    return new Date(date).toLocaleString('en-us',{
      month :'short',
      day : 'numeric',
      year : 'numeric',
      hour : '2-digit',
      minute : '2-digit'
    })
  }
}
