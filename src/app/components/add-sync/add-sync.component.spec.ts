import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSyncComponent } from './add-sync.component';

describe('AddSyncComponent', () => {
  let component: AddSyncComponent;
  let fixture: ComponentFixture<AddSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
