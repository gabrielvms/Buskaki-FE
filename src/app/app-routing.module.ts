import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NameSearchComponent } from './components/name-search/name-search.component';
import { CnpjSearchComponent } from './components/cnpj-search/cnpj-search.component';
import { DistrictSearchComponent } from './components/district-search/district-search.component';
import { GeneralSearchComponent } from './components/general-search/general-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'general-search', component: GeneralSearchComponent },
  { path: 'name-search', component: NameSearchComponent },
  { path: 'cnpj-search', component: CnpjSearchComponent },
  { path: 'district-search', component: DistrictSearchComponent },
  { path: 'street-search', component: RegisterComponent },
  { path: 'advanced-search', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
