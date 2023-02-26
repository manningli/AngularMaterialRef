import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutsomerListComponent } from './cutsomer-list.component';

describe('CutsomerListComponent', () => {
  let component: CutsomerListComponent;
  let fixture: ComponentFixture<CutsomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutsomerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutsomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
