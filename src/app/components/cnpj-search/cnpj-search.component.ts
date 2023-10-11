import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SearchResult } from 'src/app/interfaces/search-result';
import { ApiService } from 'src/app/services/api/api.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-cnpj-search',
  templateUrl: './cnpj-search.component.html',
  styleUrls: ['./cnpj-search.component.css']
})
export class CnpjSearchComponent {
 
  constructor(private apiService: ApiService, private dialogService: DialogService) {
  }

  displayedColumns: string[] = ['cnpj', 'nome_fantasia', 'razao_social', 'endereco', 'bairro', 'cep'];
  dataSource = new MatTableDataSource<SearchResult>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  filterValue: string = "";
  results: SearchResult[] = [];

  ngOnInit(): void {
  }

  applyFilter() {
    document.getElementById("spinner")!.style.display = "block";
    this.apiService.filtroCnpj(this.filterValue).subscribe((data: SearchResult[]) => {
      this.results = [];
      data.forEach(element => {
        this.results.push(element);
      });
      this.dataSource = new MatTableDataSource(this.results);
      this.dataSource.paginator = this.paginator;
      document.getElementById("spinner")!.style.display = "none";
    })
  }

  openRowCard(rowData: any) {
    this.dialogService.openRowCard(rowData);
  }
}
