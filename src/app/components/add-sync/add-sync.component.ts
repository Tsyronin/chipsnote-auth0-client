import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { AddTodoistSyncDialogComponent } from '../add-todoist-sync-dialog/add-todoist-sync-dialog.component';
import { Output, EventEmitter } from '@angular/core';
import { SyncsService } from 'src/app/services/syncs.service';
import { Sync, SyncToPost } from '../../models/sync';


@Component({
  selector: 'app-add-sync',
  templateUrl: './add-sync.component.html',
  styleUrls: ['./add-sync.component.css']
})
export class AddSyncComponent {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  @Output() newSyncEvent = new EventEmitter();

  todoistSyncName: string;
  todoistSyncKey: string;
  
  constructor(public dialog: MatDialog,
    private readonly _syncsService: SyncsService) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddTodoistSyncDialogComponent, {
      data: {name: this.todoistSyncName, key: this.todoistSyncKey},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
      console.log('result.success', result.success)
      console.log('result.data', result.data)
      console.log('Name', result.data.name);
      console.log('Key', result.data.key);

      var sync = new SyncToPost();
      sync.name = result.data.name;
      sync.api_token = result.data.key;
      sync.type = "todoist";

      this._syncsService.createNewSync(sync).subscribe((_) => {
        this.newSyncEvent.emit()
      })
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
