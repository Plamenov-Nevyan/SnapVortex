import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import { Email } from 'src/app/types/Email';

@Component({
  selector: 'app-contacts-owner',
  templateUrl: './contacts-owner.component.html',
  styleUrls: ['./contacts-owner.component.css']
})
export class ContactsOwnerComponent {

  emailData: Email = {
    sender: '',
    subject: 'Question',
    message: ''
  }

  constructor(private emailServices: EmailService){}

  onSendEmail(){
    this.emailServices.sendEmail(this.emailData).subscribe({
      next: (resp) => console.log(resp),
      error: (errMsg) => console.log(errMsg)
    })
  }

  onEmailDataChange(event: Event){
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement){
      this.emailData = {
        ...this.emailData,
        [event.target.name] : event.target.value
      }
    }
    console.log(this.emailData)
  }
}
