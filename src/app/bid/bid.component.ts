import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BidService } from '../bid.service';

interface Bid {
  price?: Number;
  name?: String;
}

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']

})
export class BidComponent implements OnInit {
  bid: Bid = { name: '', price: 1300 };
  lowestBid: any;
  lowestUser: String;
  getBidSubscription: Subscription;
  saveBidSubscription: Subscription;

  constructor(private bidService: BidService) { }

  ngOnInit() {
    this.bidService.getInitialBid().subscribe((data: Bid) => {
      this.lowestBid = data.price;
      this.lowestUser = data.name;
    });

    this.getBidSubscription = this.bidService.getBid().subscribe((data: Bid) => {
      this.lowestBid = data.price;
      this.lowestUser = data.name;
    });
  }

  ngOnDestroy() {
    this.getBidSubscription.unsubscribe();
    this.saveBidSubscription.unsubscribe();
  }

  sendBid() {
    this.saveBidSubscription = this.bidService.saveBid(this.bid);
  }
}
