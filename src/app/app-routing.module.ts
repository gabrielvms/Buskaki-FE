import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameSearchComponent } from './components/name-search/name-search.component';
import { CnpjSearchComponent } from './components/cnpj-search/cnpj-search.component';
import { DistrictSearchComponent } from './components/district-search/district-search.component';
import { GeneralSearchComponent } from './components/general-search/general-search.component';
import { StreetSearchComponent } from './components/street-search/street-search.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';

const routes: Routes = [
  { path: '', component: GeneralSearchComponent },
  { path: 'name-search', component: NameSearchComponent },
  { path: 'cnpj-search', component: CnpjSearchComponent },
  { path: 'district-search', component: DistrictSearchComponent },
  { path: 'street-search', component: StreetSearchComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent },
  { path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
