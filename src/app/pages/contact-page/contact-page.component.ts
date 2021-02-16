import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts: Contact[] = []
  subscription: Subscription
  constructor(private ContactService: ContactService) { }

  ngOnInit(): void {
    this.loadContacts()
  }

  onFilterContacts(filterBy = null) {
    this.loadContacts(filterBy)
  }

  loadContacts(filterBy = null) {
    this.ContactService.loadContacts(filterBy)
    this.subscription = this.ContactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  onRemoveContact(id) {
    this.ContactService.deleteContact(id)
  }

}
