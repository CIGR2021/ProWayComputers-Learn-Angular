import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})

export class ContactComponent {
  formContact = this.formBuilder.group({
    name: ['', [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ['', [
      Validators.minLength(10),
      Validators.required
    ]],
    tel: ['', [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ['', [
      Validators.email,
      Validators.required
    ]],
    message: ['', [
      Validators.minLength(20),
      Validators.required
    ]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
  ) {}

  sendForm() {
    this.notificationService.success('Formulário enviado com sucesso!')
    this.formContact.reset()
  }

}
