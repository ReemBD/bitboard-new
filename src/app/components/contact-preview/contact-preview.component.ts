import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from 'src/app/services/contact.model';
import { Router } from '@angular/router';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactPreviewComponent implements OnInit {
  faTrash = faTrash
  faEdit = faEdit

  @Input() contact: Contact
  @Output() openContact = new EventEmitter<string>()
  @Output() onRemoveContact = new EventEmitter<string>()

  constructor(public router: Router) { }

  ngOnInit(): void {

  }

  editContact() {
    this.router.navigate(['edit', this.contact._id])
  }
}
