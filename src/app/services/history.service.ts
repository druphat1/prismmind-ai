import { Injectable, signal } from '@angular/core';
import { HistoryEntry } from '../models/ai-response.model';
import { timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readonly STORAGE_KEY = 'prismmind-history';
  entries = signal<HistoryEntry[]>([]);
  constructor() { 
    this.loadingHistory()
  }
  loadingHistory(){
    try{
      const data = localStorage.getItem(this.STORAGE_KEY);
      if(data){
        const prased = JSON.parse(data);
        this.entries.set(prased.map((e:any) =>({
            ...e,
            timestamp : new Date(e.timestamp),
            responses: e.responses.map((r:any)=>({
              ...r,
              timestamp : new Date(r.timestamp)
            }))
        })))
      }
    }
    catch {
      this.entries.set([]);
    }
  }
}
