import { Component, Input } from '@angular/core';
import { Sync } from '../../models/sync';
import { SyncsService } from 'src/app/services/syncs.service';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css']
})
export class SyncComponent {
  @Input() sync?:Sync
  @Output() primaryUpdatedEvent = new EventEmitter();

  constructor(private readonly _syncsService: SyncsService) {}

  makePrimary() {
    this._syncsService.makeSyncPrimary(this.sync.id).subscribe((_) => {
      this.primaryUpdatedEvent.emit();
    })
  }
}
