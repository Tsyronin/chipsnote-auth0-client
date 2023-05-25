import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Sync } from '../models/sync';
import { SyncsService } from '../services/syncs.service';

@Component({
  selector: 'app-syncs',
  templateUrl: './syncs.component.html',
  styleUrls: ['./syncs.component.css']
})
export class SyncsComponent implements OnInit {
  public syncs: Sync[] = [];
  
  constructor(public auth: AuthService,
    private readonly _syncsService: SyncsService) {}

  ngOnInit(): void {
    this._syncsService.getAllSyncs().subscribe(
      (syncs) => {
        this.syncs = syncs;
        console.log(syncs);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
