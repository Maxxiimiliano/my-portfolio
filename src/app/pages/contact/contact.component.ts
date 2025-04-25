import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeIn } from '../../animations/fade-in.animation';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeIn],
})
export class ContactComponent {
  formSuccess = false;
  formError = false;
  showToast = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      this.formSuccess = true;
      this.formError = false;
      this.triggerToast();
      form.resetForm();
    } else {
      this.formSuccess = false;
      this.formError = true;
      this.triggerToast();
    }
  }

  private triggerToast() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000); // Toast disappears after 3 seconds
  }
}
