import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistricSearchComponent } from './district-search.component';

describe('DistricSearchComponent', () => {
  let component: DistricSearchComponent;
  let fixture: ComponentFixture<DistricSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistricSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistricSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
