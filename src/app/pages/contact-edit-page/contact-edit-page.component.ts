import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {
  editForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  contact: Contact
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.contact = data.contact || this.contactService.getEmptyContact()
    })
    const { name, email, phone } = this.contact
    this.editForm = this.FormBuilder.group({
      name: [name, Validators.required],
      email: [email, [Validators.required, Validators.pattern(this.emailRegx)]],
      phone: [phone, Validators.required],
    })
  }

  onSaveContact() {
    if (!this.editForm.valid) return;
    const { name, email, phone } = this.editForm.value
    this.contact = { ...this.contact, name, email, phone }
    this.contactService.saveContact({ ...this.contact })

  }

}
