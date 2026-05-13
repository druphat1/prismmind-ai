import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
   private readonly STORAGE_KEY = 'prismmind-theme';
   isDark = signal<boolean>(true);
  constructor() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if(saved !== null){
      this.isDark.set(saved == 'dark');
    }
    this.applyTheme();
   }
   private applyTheme(){
    if(this.isDark()){
       document.documentElement.classList.add('dark');
       document.documentElement.classList.remove('light')
    }
    else{
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
   }
   toggleTheme(){
    this.isDark.update(v=>!v);
    this.applyTheme();
    localStorage.setItem(this.STORAGE_KEY,this.isDark() ? 'dark': 'light');
   }
}
