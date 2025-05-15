import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { fadeIn } from '../../animations/fade-in.animation';
import { LightboxComponent } from '../../shared/lightbox/lightbox.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, LightboxComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeIn], // Applying fadeIn animation
})
export class ProjectsComponent {
  // Projects data
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio built with Angular and SCSS.',
      technologies: ['Angular', 'SCSS', 'HTML', 'Responsive Design'],
      image: '/pricer-logo-white.png',
      timeSpent: '2 weeks',
      role: 'Sole Developer',
      screenshots: ['/default.jpg', '/default.jpg'],
      features: [
        'Responsive design with dark/light mode',
        'Dynamic project showcase with animations',
        'Contact form with email integration (EmailJS)',
      ],
      expanded: false, // Flag for expanding the card
    },
    {
      title: 'Wallapop Offer Finder',
      description: 'A private project to find offers on Wallapop.',
      technologies: [
        'React',
        'Node.js',
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'JavaScript',
        'API',
      ],
      image: '/default.jpg',
      timeSpent: '2 years',
      role: 'Sole Developer',
      screenshots: ['/default.jpg', '/default.jpg'],
      features: [
        'Real-time price alert system',
        'Built with Next.js & React',
        'API integration with Wallapop',
      ],
      expanded: false, // Flag for expanding the card
    },
    // Add more projects if needed
  ];

  // Lightbox state management
  selectedImage: string | null = null; // Stores the selected image
  lightboxVisible = false; // Controls visibility of the lightbox

  // Toggle expanded state for project cards
  toggleExpanded(index: number): void {
    this.projects[index].expanded = !this.projects[index].expanded;
  }

  // Open lightbox when an image is clicked
  openLightbox(image: string): void {
    this.selectedImage = image;
    this.lightboxVisible = true;
    console.log(this.lightboxVisible);
  }

  // Close lightbox
  closeLightbox(): void {
    this.lightboxVisible = false;
    this.selectedImage = null; // Optional: clear the selected image when closed
  }
}
