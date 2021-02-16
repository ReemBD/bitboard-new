import { Component, OnInit } from '@angular/core';
import { faHome, faIdCard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  faHome = faHome
  faIdCard = faIdCard
  logoLetters = 'bitboard'.split('')
  constructor() { }

  ngOnInit(): void {
  }

}
