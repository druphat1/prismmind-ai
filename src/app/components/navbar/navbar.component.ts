import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   themeService = inject(ThemeService);
  mobileMenuOpen = signal(false);
}
