import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { CountryComponent } from './country/country.component';
import { NumberComponent } from './number/number.component';
import { NumbersComponent } from './numbers/numbers.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'countries',
    component: CountryComponent
  },
  {
    path: 'numbers/:country_id',
    component: NumbersComponent
  },
  {
    path: 'number/:number',
    component: NumberComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
