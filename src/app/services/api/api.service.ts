import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from 'src/app/interfaces/search-result';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string = 'https://buskaki-be.vercel.app';

  constructor(private http: HttpClient) { }

  filtroNomeFantasia(company: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/nome_fantasia?value=${company}`);
  };

  filtroRazaoSocial(company: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/razao_social?value=${company}`);
  };

  filtroCnpj(cnpj: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/cnpj/${cnpj}`);
  };

  filtroBairro(bairro: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/bairro?value=${bairro}`);
  };

  filtroRua(logradouro: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/endereco?value=${logradouro}`);
  };

  filtroAvancado(value: string){
    return this.http.get<SearchResult[]>(`${this.baseUrl}/companies/advanced?value=${value}`);
  };
}