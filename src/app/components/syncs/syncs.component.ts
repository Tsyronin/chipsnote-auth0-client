import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Sync } from '../../models/sync';
import { SyncsService } from '../../services/syncs.service';

@Component({
  selector: 'app-syncs',
  templateUrl: './syncs.component.html',
  styleUrls: ['./syncs.component.css']
})
export class SyncsComponent implements OnInit {
  public syncs: Sync[] = [];
  public testSyncs: Sync[] = [
    {
      id: "bd6e00a7-0ad7-47ce-bb83-83a1d308f196",
      type: "todoist",
      name: "cool_todoist",
      is_primary: false
    },
    {
      id: "bd6e00a7-0ad7-47ce-bb83-83a1d308f196",
      type: "todoist",
      name: "cool_todoist",
      is_primary: true
    },
    {
      id: "bd6e00a7-0ad7-47ce-bb83-83a1d308f196",
      type: "todoist",
      name: "cool_todoist",
      is_primary: false
    },
    {
      id: "bd6e00a7-0ad7-47ce-bb83-83a1d308f196",
      type: "todoist",
      name: "cool_todoist",
      is_primary: false
    },
    {
      id: "bd6e00a7-0ad7-47ce-bb83-83a1d308f196",
      type: "todoist",
      name: "cool_todoist",
      is_primary: false
    }
  ]
  
  constructor(public auth: AuthService,
    private readonly _syncsService: SyncsService) {}

  ngOnInit(): void {
    this._syncsService.getAllSyncs().subscribe(
      (syncs) => {
        this.syncs = syncs.sort((a, b) => a.name.localeCompare(b.name));
        console.log(syncs);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  relodeSyncs() {
    this._syncsService.getAllSyncs().subscribe(
      (syncs) => {
        this.syncs = syncs.sort((a, b) => a.name.localeCompare(b.name));
        console.log(syncs);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
