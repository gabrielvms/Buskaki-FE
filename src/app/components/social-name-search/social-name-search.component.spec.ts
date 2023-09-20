import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNameSearchComponent } from './social-name-search.component';

describe('SocialNameSearchComponent', () => {
  let component: SocialNameSearchComponent;
  let fixture: ComponentFixture<SocialNameSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNameSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
