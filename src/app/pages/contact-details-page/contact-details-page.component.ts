import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  @Input() contactId = null
  contact: Contact;
  subscription: Subscription
  constructor(private route: ActivatedRoute, private router: Router, private ContactService: ContactService) { }

  ngOnInit(): void {
    this.getContact()
    this.contact = this.route.snapshot.data.contact
  }

  getContact() {
    this.subscription = this.ContactService
      .getContactById(this.contactId).subscribe(contact => {
        this.contact = contact
      })
  }

  ngOnChanges({ contactId }) {
    const { previousValue, currentValue } = contactId
    if (previousValue !== currentValue) this.getContact()
  }

}
