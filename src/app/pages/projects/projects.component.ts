import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { fadeIn } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeIn],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio built with Angular and SCSS.',
      technologies: ['Angular', 'SCSS', 'HTML', 'Responsive Design'],
      image: '/cat.jpeg',
      link: '/projects/portfolio',
      timeSpent: '2 weeks',
      role: 'Sole Developer',
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
      image: '/cat2.jpeg',
      link: '/projects/ecommerce',
      timeSpent: '2 years',
      role: 'Sole Developer',
    },
    // Add more projects if needed
  ];
}
