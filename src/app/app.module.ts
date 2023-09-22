//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { NameSearchComponent } from './components/name-search/name-search.component';
import { CnpjSearchComponent } from './components/cnpj-search/cnpj-search.component';
import { DistrictSearchComponent } from './components/district-search/district-search.component';
import { StreetSearchComponent } from './components/street-search/street-search.component';
import { GeneralSearchComponent } from './components/general-search/general-search.component';
import { RowCardComponent } from './components/row-card/row-card.component';
import { SocialNameSearchComponent } from './components/social-name-search/social-name-search.component';
import { MatSpinnerOverlayComponent } from './components/mat-spinner-overlay/mat-spinner-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    NameSearchComponent,
    CnpjSearchComponent,
    DistrictSearchComponent,
    StreetSearchComponent,
    GeneralSearchComponent,
    RowCardComponent,
    SocialNameSearchComponent,
    MatSpinnerOverlayComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
