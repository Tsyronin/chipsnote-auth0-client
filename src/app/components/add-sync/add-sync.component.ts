import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AddTodoistSyncDialogComponent } from '../add-todoist-sync-dialog/add-todoist-sync-dialog.component';

@Component({
  selector: 'app-add-sync',
  templateUrl: './add-sync.component.html',
  styleUrls: ['./add-sync.component.css']
})
export class AddSyncComponent {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddTodoistSyncDialogComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
