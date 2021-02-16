import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  filterBy = { term: '' }

  @Output() onFilter = new EventEmitter<any>()
  
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges({ filterBy }) {
    console.log('filterBy: ', filterBy);
  }




}
