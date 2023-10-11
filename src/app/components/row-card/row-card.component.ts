import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-row-card',
  templateUrl: './row-card.component.html',
  styleUrls: ['./row-card.component.css'],
})
export class RowCardComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    let iframe = document.getElementById("maps");
  }

  maskCep(cep: any) : string {
    let strCep = cep.toString();
    return `${strCep.substring(0, 5)}-${strCep.substring(5, 8)}`;
  }

  maskCnpj(cnpj: any) : string {
    let strCnpj = cnpj.toString();
    return `${strCnpj.substring(0, 2)}.${strCnpj.substring(2, 5)}.${strCnpj.substring(5, 8)}/${strCnpj.substring(8, 12)}-${strCnpj.substring(12, 14)}`;
  }

  makeIframeUrl(tipo_end: string, logradouro: string, numero: string, bairro: string): SafeResourceUrl {
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyAgt91BsFfO8hiVTO831Tnc3ghN8v5lZBc&q=
    ${tipo_end} ${logradouro} ${numero} ${bairro} Curitiba Paraná Brasil`);
  }

}
