Steps for Meet up live code session

-  ng new app
- cd airline-seat-bid-app
- npm install socket.io-client —save
- ng g s bid -m app.module.ts
- Copy code from https://github.com/briebugconsulting/briebug-airline-bid-app/blob/master/src/app/bid.service.ts to bid.service.ts
- ng g c bid
- copy code from https://github.com/briebugconsulting/briebug-airline-bid-app/blob/master/src/app/bid/bid.component.ts to bid.component.ts
- Copy HTML from https://github.com/briebugconsulting/briebug-airline-bid-app/blob/master/src/app/bid/bid.component.html to bid.component.html
- in app.component.html relace html with <app-bid></app-bid>
- ng serve

# AirlineSeatBidApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
