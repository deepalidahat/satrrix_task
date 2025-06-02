import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResisterListComponent } from './resister-list.component';

describe('ResisterListComponent', () => {
  let component: ResisterListComponent;
  let fixture: ComponentFixture<ResisterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResisterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
