import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesdesProjetsComponent } from './listesdes-projets.component';

describe('ListesdesProjetsComponent', () => {
  let component: ListesdesProjetsComponent;
  let fixture: ComponentFixture<ListesdesProjetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListesdesProjetsComponent]
    });
    fixture = TestBed.createComponent(ListesdesProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
