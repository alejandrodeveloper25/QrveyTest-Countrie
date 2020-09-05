import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesService } from './countries/country.service';
import { CountriesComponent } from './countries/countries.component';
import { ModalCountryComponent } from './modal-country/modal-country.component';
import { FilterPipe } from './countries/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    FilterPipe,
    ModalCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
