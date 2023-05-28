import { Component, Input } from '@angular/core';
import { Sync } from '../../models/sync';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css']
})
export class SyncComponent {

  @Input() sync?:Sync
}
