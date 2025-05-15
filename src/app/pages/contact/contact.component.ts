import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fadeIn } from '../../animations/fade-in.animation';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeIn],
})
export class ContactComponent {
  formSuccess = false;
  formError = false;
  showToast = false;

  // This method is called when the form is submitted
  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      this.sendEmail(formData);
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

  // This method sends an email via EmailJS
  private sendEmail(formData: any) {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with actual values from EmailJS
    emailjs
      .send(
        'service_x4n1weu',
        'template_13xxq9m',
        templateParams,
        '4AKPcqJnpkc6QD-ys'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.log('Email sending failed:', error);
        }
      );
  }

  // This method triggers the toast message
  private triggerToast() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000); // Toast disappears after 3 seconds
  }
}
