import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesdesemployersComponent } from './listesdesemployers.component';

describe('ListesdesemployersComponent', () => {
  let component: ListesdesemployersComponent;
  let fixture: ComponentFixture<ListesdesemployersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListesdesemployersComponent]
    });
    fixture = TestBed.createComponent(ListesdesemployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
