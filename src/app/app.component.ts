import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './shared/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router'; // Import Router to detect navigation

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  isMobile: boolean = false;
  menuOpen: boolean = false; // Track the state of the menu

  constructor(
    public themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    private router: Router, // Inject Router to detect navigation
    private cdRef: ChangeDetectorRef // Inject ChangeDetectorRef to trigger manual change detection
  ) {}

  ngOnInit(): void {
    // Observe changes to screen size and set `isMobile` accordingly
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });

    // Close the menu when navigating to a new page
    this.router.events.subscribe(() => {
      this.closeMenu();
    });

    // Close the menu if clicking outside the menu
    document.addEventListener('click', (event) => {
      const menu = document.querySelector('.mobile-menu');
      const hamburgerIcon = document.querySelector('.hamburger-icon');
      if (
        menu &&
        !menu.contains(event.target as Node) &&
        !hamburgerIcon?.contains(event.target as Node)
      ) {
        this.closeMenu();
      }
    });
  }

  ngAfterViewInit(): void {
    // Ensure that the view is fully initialized before calling the animation method
    this.cdRef.detectChanges(); // Trigger change detection manually
  }

  // Call toggleTheme() from the service to handle theme switching
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  // Toggle the mobile menu visibility
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Toggle the state of the menu
    if (this.menuOpen) {
      setTimeout(() => this.animateButtons(), 100); // Delay the animation a little bit after opening the menu
    }
  }

  // Close the mobile menu
  closeMenu(): void {
    this.menuOpen = false;
  }

  // Animate buttons when the menu opens
  animateButtons(): void {
    const buttons = document.querySelectorAll('.mobile-menu button');
    if (buttons.length > 0) {
      // Ensure buttons are found
      buttons.forEach((button, index) => {
        setTimeout(() => {
          button.classList.add('animate-in'); // Add animation class to each button
        }, index * 100); // Delay each button's animation slightly to create cascading effect
      });
    }
  }
}
