import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';
import { DISTRICTS } from 'src/app/constants/districts';
import { SearchResult } from 'src/app/interfaces/search-result';
import { ApiService } from 'src/app/services/api/api.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-distric-search',
  templateUrl: './district-search.component.html',
  styleUrls: ['./district-search.component.css']
})
export class DistrictSearchComponent {
  myControl = new FormControl('');
  options: string[] = DISTRICTS;
  filteredOptions!: Observable<string[]>;
  
  constructor(private apiService: ApiService, private dialogService: DialogService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  displayedColumns: string[] = ['cnpj', 'nome_fantasia', 'razao_social', 'endereco', 'bairro', 'cep'];
  dataSource = new MatTableDataSource<SearchResult>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  results: SearchResult[] = [];

  ngOnInit(): void {
    document.getElementById("spinner")!.style.display = "none";  
  }

  applyFilter() {
    document.getElementById("spinner")!.style.display = "block";
    const selectedDistrict = this.myControl.value != null? this.myControl.value : "";
    this.apiService.filtroBairro(selectedDistrict).subscribe((data: SearchResult[]) => {
      this.results = [];
      data.forEach(element => {
        this.results.push(element);
      });
      this.dataSource = new MatTableDataSource(this.results);
      this.dataSource.paginator = this.paginator;
      document.getElementById("spinner")!.style.display = "none";
    })
  }
  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  openRowCard(rowData: any) {
    this.dialogService.openRowCard(rowData);
  }
}
