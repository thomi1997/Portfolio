import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    './scss/contact-btn.scss',
    './scss/contact-balls.scss',
    './scss/contact-all-inputs.scss',
    './scss/contact-content.scss'
  ]
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  @ViewChild('myEmailSendingForm') myEmailSendingForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  formData = {
    name: '',
    email: '',
    message: ''
  };


  load = false;
  progressBarInterval = null;
  sendMailFinishInfo = false;
  percent = 0;


  isClickedName = false;
  isClickedEmail = false;
  isClickedMessage = false;


  checkTrue: string = "/assets/img/icons/input-icons/green-choppy.png";
  checkFalse: string = "/assets/img/icons/input-icons/exclamation-mark.png";


  constructor() { }


  ngOnInit(): void { }


  //query which input field.
  onFocus(id: any) {
    if (id === 'name')
      this.isClickedName = true;
    if (id === 'email')
      this.isClickedEmail = true;
    if (id === 'message')
      this.isClickedMessage = true;
  }


  //query which input field without content.
  onBlur() {
    if (this.formData.name === '')
      this.isClickedName = false;
    if (this.formData.email === '')
      this.isClickedEmail = false;
    if (this.formData.message === '')
      this.isClickedMessage = false;
  }


  //shows green tick when it is correct
  showCheckImage(fieldName: string, checkTrue: boolean): boolean {
    const field = this.myForm?.form.get(fieldName);
    return field?.valid && (field?.touched || field?.dirty) === checkTrue;
  }

  //shows red exclamation mark if it is wrong
  //html *ngIf="isFieldInvalid('email') && isFieldTouched('email')"
  isFieldInvalid(fieldName: string): boolean {
    const field = this.myForm?.form.get(fieldName);
    return field?.invalid && (field?.touched || field?.dirty);
  }


  isFieldTouched(fieldName: string): boolean {
    const field = this.myForm?.form.get(fieldName);
    return field?.touched;
  }


  submitForm() {
    if (this.myForm?.valid) {
      this.sendMail();
      console.log('Form submitted:', this.formData);
    }
  }


  sendMail() {
    const nameField = this.nameField.nativeElement;
    const emailField = this.emailField.nativeElement;
    const messageField = this.messageField.nativeElement;
    const sendButton = this.sendButton.nativeElement;
    this.formDisabled(nameField, emailField, messageField, sendButton);
    this.sendProcess(nameField, emailField, messageField);
    this.formActivated(nameField, emailField, messageField, sendButton);
  }


  formDisabled(nameField: any, emailField: any, messageField: any, sendButton: any) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  async sendProcess(nameField: any, emailField: any, messageField: any) {
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://thomas-ketler.de/portfolio/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
    this.animateButtonAndShowInfo();
  }


  formActivated(nameField: any, emailField: any, messageField: any, sendButton: any) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }


  animateButtonAndShowInfo() {
    let percent = 0;
    this.buttonInvisible();
    this.updateProgress(percent);
    this.clearInterval();
    this.showProgressBar(this.percent);
  }


  buttonInvisible() {
    document.getElementById('send-button').classList.add('d-none');
    document.getElementById('progressBar').classList.remove('d-none');
    document.getElementById('progressBar').classList.add('d-flex');
    document.getElementById('progress-number').textContent = '0%';
  }



  updateProgress(percent: number) {
    let progressBar = document.getElementById("progress");
    progressBar.style.width = percent + "%";
    document.getElementById('progress-number').textContent = percent + '%';
  }


  clearInterval() {
    if (this.progressBarInterval) {
      clearInterval(this.progressBarInterval);
    }
  }


  showProgressBar(percent: number) {
    this.updateProgress(percent);
    this.progressInterval(percent);
  }


  progressInterval(percent: number) {
    this.progressBarInterval = setInterval(() => {
      percent++;
      if (percent <= 100) {
        this.updateProgress(percent);
      } else {
        this.sendCompleted();
      }
    }, 30);
  }


  sendCompleted() {
    clearInterval(this.progressBarInterval);
    this.progressBarInterval = null;
    setTimeout(() => {
      this.showButton();
      this.clearInputs();
      this.sendMailFinishInfo = true;
    }, 500);
    setTimeout(() => {
      this.sendMailFinishInfo = false;
    }, 5000);
  }


  showButton() {
    document.getElementById('progressBar').classList.add('d-none');
    document.getElementById('progressBar').classList.remove('d-flex');
    document.getElementById('send-button').classList.remove('d-none');
  }


  clearInputs() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
    this.deleteFormData();
  }


  deleteFormData() {
    delete this.formData.name;
    delete this.formData.email;
    delete this.formData.message;
  }


  scrollTop() {
    document.getElementById("header").scrollIntoView({
      behavior: "smooth",
    });
  }
}