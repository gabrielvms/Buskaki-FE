import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SearchResult } from 'src/app/interfaces/search-result';
import { ApiService } from 'src/app/services/api/api.service';
import { DISTRICTS } from 'src/app/constants/districts';

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.css']
})
export class NameSearchComponent {
  districts: string[] = DISTRICTS;

  constructor(private apiService: ApiService) {
  }

  displayedColumns: string[] = ['cnpj', 'nome_fantasia', 'razao_social', 'endereco', 'bairro', 'cep'];
  dataSource = new MatTableDataSource<SearchResult>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  filterValue: string = "";
  filterType: string = "";
  selectedDistrict: string = "";
  results: SearchResult[] = [];

  ngOnInit(): void {
  }

  applyFilter() {
    document.getElementById("spinner")!.style.display = "block";
    this.apiService.filtroNomeFantasia(this.selectedDistrict, this.filterValue).subscribe((data: SearchResult[]) => {
      this.results = [];
      data.forEach(element => {
        this.results.push(element);
      });
      this.dataSource = new MatTableDataSource(this.results);
      this.dataSource.paginator = this.paginator;
      document.getElementById("spinner")!.style.display = "none";
    })
  }
}
