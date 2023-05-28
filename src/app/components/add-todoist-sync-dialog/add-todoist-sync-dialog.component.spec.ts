import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoistSyncDialogComponent } from './add-todoist-sync-dialog.component';

describe('AddTodoistSyncDialogComponent', () => {
  let component: AddTodoistSyncDialogComponent;
  let fixture: ComponentFixture<AddTodoistSyncDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoistSyncDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoistSyncDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
