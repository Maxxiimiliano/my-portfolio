import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent {
  @Input() imageUrl: string | null = null;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeLightbox() {
    this.close.emit();
  }
}
