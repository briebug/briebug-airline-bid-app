import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import * as io from 'socket.io-client';

@Injectable()
export class BidService {
  private url ='https://limitless-shelf-54746.herokuapp.com';

  private socket: any = io('https://limitless-shelf-54746.herokuapp.com');

  constructor(private http: Http) { }


  getBid() {

    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('new-bid', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    })

    return observable;

  }

  getInitialBid() {
    const path = `${this.url}/bid`;
    return this.http.get(path)
      .map(res => res.json());
  }

  saveBid(data) {
    const path = `${this.url}/bid/save`;
    return this.http.post(path, data)
      .map(res => res.json())
      .subscribe((result) => {
        this.socket.emit('save-bid', result);
      }, (err) => {
        console.log(err);
      });
  }

}
