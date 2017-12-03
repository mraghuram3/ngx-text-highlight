/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgHighlightModule }  from 'ngx-text-highlight';

@Component({
  selector: 'app',
  template: `<ng-highlight></ng-highlight>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NgHighlightModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
