import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface TodoistSyncDialogData {
  name: string;
  key: string;
}

@Component({
  selector: 'app-add-todoist-sync-dialog',
  templateUrl: './add-todoist-sync-dialog.component.html',
  styleUrls: ['./add-todoist-sync-dialog.component.css']
})
export class AddTodoistSyncDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddTodoistSyncDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoistSyncDialogData,
    @Inject(MAT_DIALOG_DATA) public success: boolean = false ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
