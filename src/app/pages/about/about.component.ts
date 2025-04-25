import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fadeIn } from '../../animations/fade-in.animation';

@Component({
  selector: 'app-about',
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeIn],
})
export class AboutComponent {}
