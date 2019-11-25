import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './_templates/header/header.component';
import { FooterComponent } from './_templates/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { CountryComponent } from './country/country.component';
import { NumberComponent } from './number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    AboutComponent,
    CountryComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
