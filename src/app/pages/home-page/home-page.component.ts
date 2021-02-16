import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { ContactService } from 'src/app/services/contact.service';
import { User } from 'src/app/services/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User
  rate: number;
  constructor(private UserService: UserService, private ContactService: ContactService, private BitcoinService: BitcoinService) { }

  async ngOnInit() {
    this.user = this.UserService.getUser()
    this.setUserRate()
  }

  async setUserRate() {
    this.rate = await this.BitcoinService.getRate(this.user.coins)
  }

}
