import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BidService } from './bid.service';
import { BidComponent } from './bid/bid.component';

@NgModule({
  declarations: [
    AppComponent,
    BidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
