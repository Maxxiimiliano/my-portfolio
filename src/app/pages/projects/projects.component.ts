import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeIn } from '../../animations/fade-in.animation';
import { LightboxComponent } from '../../shared/lightbox/lightbox.component';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  timeSpent: string;
  role: string;
  github: string;
  liveUrl: string;
  screenshots: string[];
  features: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LightboxComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeIn],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [
    {
      title: 'CarLease',
      description: 'Full-stack vehicle rental and sales web application. Covers the complete flow from browsing to secure payment, with a full admin panel and 22 end-to-end tests.',
      technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Clerk', 'Stripe', 'Cloudinary', 'Tailwind CSS', 'Playwright'],
      image: 'carlease1.png',
      timeSpent: '15 weeks',
      role: 'Lead Developer',
      github: 'https://github.com/Maxxiimiliano/grupo12_car_lease',
      liveUrl: 'https://grupo12-car-lease.vercel.app/',
      screenshots: ['carlease1.png'],
      features: [
        'Filterable vehicle catalog with real-time date availability calendar',
        'Stripe Checkout integration with webhook-based reservation confirmation',
        'Role-based access control via Clerk (user / admin)',
        'Full admin panel: manage vehicles, reservations, offices and users',
        'Vehicle sales module with visit request forms',
        'Interactive office map using OpenStreetMap',
        'Transactional emails via Nodemailer + Gmail SMTP',
        'Image uploads via Cloudinary CDN',
        '22 end-to-end tests with Playwright',
        'Deployed on Vercel with Neon serverless PostgreSQL',
      ],
    },
    {
      title: 'FastFlow',
      description: 'AI Copilot for safe n8n workflow operations. Connect your n8n instances, configure LLMs, and manage workflows through an AI-powered interface.',
      technologies: ['TypeScript', 'Next.js', 'React', 'n8n', 'AI', 'REST API'],
      image: 'fastflow1.png',
      timeSpent: 'Ongoing',
      role: 'Sole Developer',
      github: '',
      liveUrl: '',
      screenshots: ['fastflow1.png'],
      features: [
        'Connect to any n8n self-hosted instance',
        'Configure LLM models for AI-powered workflow explanations and modifications',
        'Project-based organization linking servers and AI setups',
        'Safe workflow exploration and editing with AI guidance',
        'Full TypeScript codebase with Next.js App Router',
      ],
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio built with Angular and SCSS, featuring dark/light theming, animations, and a CI/CD pipeline via GitHub Actions.',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'Responsive Design', 'CI/CD'],
      image: 'portfolio1.png',
      timeSpent: '2 weeks',
      role: 'Sole Developer',
      github: '',
      liveUrl: '',
      screenshots: ['portfolio2.png', 'portfolio3.png'],
      features: [
        'Responsive design with dark/light mode toggle',
        'Dynamic project showcase with animations',
        'Contact form with email integration via EmailJS',
      ],
    },
    {
      title: 'Wallapop Offer Finder',
      description: 'A private tool that monitors Wallapop listings and triggers real-time price alerts when deals appear below a set threshold.',
      technologies: ['React', 'Node.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'API'],
      image: 'pricer1.png',
      timeSpent: '2 years',
      role: 'Sole Developer',
      github: '',
      liveUrl: '',
      screenshots: ['pricer2.png', 'pricer3.png'],
      features: [
        'Real-time price alert system with configurable thresholds',
        'Built with Next.js & React',
        'API integration with Wallapop',
      ],
    },
  ];

  selectedProjectIndex = 0;
  slideIndices = this.projects.map(() => 0);

  selectedImage: string | null = null;
  lightboxVisible = false;

  private intervalId: ReturnType<typeof setInterval> | null = null;
  private readonly slideDuration = 3500;

  get active(): Project {
    return this.projects[this.selectedProjectIndex];
  }

  get activeImages(): string[] {
    return this.getImages(this.active);
  }

  get activeSlide(): number {
    return this.slideIndices[this.selectedProjectIndex];
  }

  ngOnInit(): void {
    this.startAutoAdvance();
  }

  ngOnDestroy(): void {
    this.stopAutoAdvance();
  }

  getImages(project: Project): string[] {
    return [project.image, ...project.screenshots.filter(s => s !== project.image)];
  }

  selectProject(index: number): void {
    this.slideIndices[this.selectedProjectIndex] = 0;
    this.selectedProjectIndex = index;
    this.startAutoAdvance();
  }

  goToSlide(slideIndex: number, event: Event): void {
    event.stopPropagation();
    this.slideIndices[this.selectedProjectIndex] = slideIndex;
    this.startAutoAdvance();
  }

  openLightbox(image: string): void {
    this.selectedImage = image;
    this.lightboxVisible = true;
  }

  closeLightbox(): void {
    this.lightboxVisible = false;
    this.selectedImage = null;
  }

  private startAutoAdvance(): void {
    this.stopAutoAdvance();
    if (this.getImages(this.projects[this.selectedProjectIndex]).length <= 1) return;
    this.intervalId = setInterval(() => {
      const idx = this.selectedProjectIndex;
      const len = this.getImages(this.projects[idx]).length;
      this.slideIndices[idx] = (this.slideIndices[idx] + 1) % len;
    }, this.slideDuration);
  }

  private stopAutoAdvance(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
