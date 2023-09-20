import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from 'src/app/interfaces/search-result';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string = 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies`);
  };

  filtroNomeFantasia(bairro: string, company: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/nome_fantasia/${bairro}/${company}`);
  };

  filtroRazaoSocial(bairro: string, company: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/razao_social/${bairro}/${company}`);
  };

  filtroCnpj(cnpj: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/cnpj/${cnpj}`);
  };

  filtroBairro(bairro: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/bairro/${bairro}`);
  };
  filtroRua(bairro: string, tipo_logradouro: string, logradouro: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/endereco/${bairro}/${tipo_logradouro}/${logradouro}`);
  };
}