import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/services/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {


  subscription: Subscription
  @Input() contacts: Contact[] = []
  @Output() onRemoveContact = new EventEmitter<string>()

  constructor(private ContactService: ContactService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges({ contacts }) {
    this.contacts = contacts.currentValue
  }


}
