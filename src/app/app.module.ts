import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DomEventDirective } from './shared/dom-event.directive';
import { TimeStringPipe } from './shared/time-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DomEventDirective,
    TimeStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
