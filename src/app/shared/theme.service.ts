import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: string;

  constructor() {
    // Get the theme from localStorage or default to 'light-theme'
    this.theme = localStorage.getItem('theme') || 'light-theme';
    this.applyTheme(this.theme); // Apply the theme when the app starts
  }

  get currentTheme(): string {
    return this.theme;
  }

  // Apply the theme by adding/removing classes on the body
  applyTheme(theme: string) {
    // Remove both themes from the body class
    document.body.classList.remove('light-theme', 'dark-theme');

    // Add the selected theme class to the body
    document.body.classList.add(theme);

    // Store the selected theme in localStorage to persist across sessions
    localStorage.setItem('theme', theme);
  }

  // Toggle the theme between light and dark
  toggleTheme() {
    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.applyTheme(this.theme); // Apply the newly selected theme
  }
}
